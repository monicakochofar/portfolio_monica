<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { onMounted, ref, reactive, watch } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
});

const webGL = ref(null);
let camera, renderer, scene;

watch(
  () => props.width,
  () => {
    updateSize();
  }
);

watch(
  () => props.height,
  () => {
    updateSize();
  }
);

onMounted(() => {
  initAnimation();
});

document.body.addEventListener('theme-changed', () => {
  updateBackground();
});

const updateBackground = () => {
  let material;

  if (!scene) {
    return;
  }
  // setup ambient light
  if (localStorage.getItem('portfolioTheme') === 'dark') {
    const DARK_COLOR = '#000000';

    if (scene.getObjectByName('ambientLight')) {
      scene.remove(scene.getObjectByName('ambientLight'));
    }

    scene.background = new THREE.Color(DARK_COLOR);

    material = new THREE.MeshStandardMaterial({
      color: '#00ff83'
    });
  } else {
    const LIGHT_COLOR = '#FFFFFF';

    scene.background = new THREE.Color(LIGHT_COLOR);

    const ambLight = new THREE.AmbientLight(LIGHT_COLOR, 1);
    ambLight.name = 'ambientLight';
    scene.add(ambLight);
    material = new THREE.MeshStandardMaterial({
      color: LIGHT_COLOR
    });
  }

  // Update mesh with new shadow
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};

const updateSize = () => {
  //update camera
  camera.aspect = props.width / props.height;
  camera.updateProjectionMatrix();

  //update renderer
  renderer.setSize(props.width, props.height);
};

const initAnimation = () => {
  //scene
  scene = new THREE.Scene();

  //sphere
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: '#00ff83'
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  updateBackground();

  //light
  const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
  light.position.set(0, 10, 10);
  scene.add(light);

  //camera
  camera = new THREE.PerspectiveCamera(
    45,
    props.width / props.height,
    0.1,
    100
  );
  camera.position.z = 20;
  scene.add(camera);
  renderer = new THREE.WebGLRenderer({ canvas: webGL.value });
  renderer.setSize(props.width, props.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);

  //controls
  const controls = new OrbitControls(camera, webGL.value);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;

  const animationLoop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animationLoop);
  };
  animationLoop();

  initTimeline(mesh);
};

function initTimeline(mesh) {
  //timeline
  const t1 = gsap.timeline({ default: { duration: 1 } });
  t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
}

function addColor(mesh) {
  // mouse animation color
  let mouseDown = false;
  window.addEventListener('mousedown', () => (mouseDown = true));
  window.addEventListener('mouseup', () => (mouseDown = false));

  window.addEventListener('mousemove', (e) => {
    if (mouseDown) {
      const rgb = [
        Math.round(e.pageX / props.width),
        Math.round(e.pageY / props.height),
        150
      ];
      //animate
      gsap.to(mesh.material.color, {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
      });
    }
  });
}
</script>

<template>
  <div class="animation-container">
    <canvas ref="webGL" class="webgl"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.animation-container {
  position: absolute;
  top: 0;
  left: 0;
}

.webgl {
  border-radius: 16px;
}
</style>
