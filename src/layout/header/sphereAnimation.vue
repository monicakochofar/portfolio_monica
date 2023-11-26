<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { onMounted, ref, reactive, toRef, watch } from 'vue';

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
const state = reactive({
  sizes: {
    width: 0,
    height: 0
  }
});

watch(
  () => props.width,
  (newVal) => {
    console.log('watch props.width function called with args:', newVal);
  }
);

console.log('this.$parent', this);

// const triggerRefresh = toRef(props, 'width');

// watch(
//   triggerRefresh,
//   () => {
//     console.log('prop updated');
//     // state.sizes.width = props.width;
//   },
//   { immediate: true }
// );

// watch(props.height, () => {
//   state.sizes.height = props.height;
// });

onMounted(() => {
  state.sizes.width = props.width;
  state.sizes.height = props.height;
  //scene
  const scene = new THREE.Scene();

  //sphere
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: '#00ff83'
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  //light
  const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
  light.position.set(0, 10, 10);
  scene.add(light);

  //camera
  const camera = new THREE.PerspectiveCamera(
    45,
    state.sizes.width / state.sizes.height,
    0.1,
    100
  );
  camera.position.z = 20;
  scene.add(camera);
  const renderer = new THREE.WebGLRenderer({ canvas: webGL.value });
  renderer.setSize(state.sizes.width, state.sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);

  //controls
  const controls = new OrbitControls(camera, webGL.value);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;

  //resize
  window.addEventListener('resize', () => {
    //update sizes
    state.sizes.width = props.width;
    state.sizes.height = props.height;
    // state.sizes.width = window.innerWidth;
    // state.sizes.height = window.innerHeight;

    //update camera
    camera.aspect = state.sizes.width / state.sizes.height;
    camera.updateProjectionMatrix();

    //update renderer
    renderer.setSize(state.sizes.width, state.sizes.height);
  });

  const animationLoop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animationLoop);
  };
  animationLoop();

  initTimeline(mesh);
});

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
        Math.round(e.pageX / state.sizes.width),
        Math.round(e.pageY / state.sizes.height),
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
  // margin: -20px;
}
</style>
