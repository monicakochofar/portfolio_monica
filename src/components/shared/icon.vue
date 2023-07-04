<script setup>
  import { defineAsyncComponent } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      required: false
    }
  });

  const icon = defineAsyncComponent(() =>
    import(`/src/assets/images/${props.name}.svg`)
  );
</script>

<template>
  <component :is="icon" :class="props.customClass" />
</template>