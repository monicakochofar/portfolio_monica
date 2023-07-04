<script setup>
  import { ref, onMounted } from 'vue'
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 100
    }
  });

  const message = ref('');
  const i = ref(0);

  function typeWriter() {
    if (i.value < props.text.length) {
      message.value += props.text.charAt(i.value);
      i.value++;
      setTimeout(typeWriter, props.speed);
    }
  }

  onMounted(() => {
    typeWriter();
  })

</script>

<template>
  <div class="typed-text">
    <span>{{ message }}</span>
    <span class="typed-text__cursor"></span>
  </div>
</template>

<style lang="scss" scoped>
  @keyframes blink {
    0% {opacity: 1;}
    40% {opacity: 1;}
    60% {opacity: 0;}
    100% {opacity: 0;}
  }
  .typed-text {
    display: flex;
    align-items: center;
    
    &__cursor {
      display: inline-block;
      width: 2px;
      height: 38px;
      background-color: var(--color-heading);
      margin-left: 8px;
      animation: blink .6s linear infinite alternate;
    }
  }
</style>