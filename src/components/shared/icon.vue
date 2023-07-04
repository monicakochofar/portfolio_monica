<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  fileName: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    required: false
  }
});

const icon = defineAsyncComponent(() =>
  import(`/src/assets/images/${props.fileName}.svg`)
);
</script>

<template>
  <component :is="icon" :class="props.customClass" />
</template>
