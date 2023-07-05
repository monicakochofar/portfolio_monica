<script setup>
import { ref, onMounted, watchEffect } from 'vue';
</script>

<template>
  <div class="tech-stack">Vue</div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/mixins';
.tech-stack {
  @include pill;
}
</style>
