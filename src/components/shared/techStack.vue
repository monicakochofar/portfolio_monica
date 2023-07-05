<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const props = defineProps({
  stackList: {
    type: Array,
    required: true
  }
});

// const acceptedVals = ['Vue', 'Java', 'Ruby on Rails', 'Unix', 'AngularJS', 'Angular 2+'];
</script>

<template>
  <div class="tech-stack">
    <div class="tech-stack__item" v-for="stack in props.stackList" :key="stack">
      {{ stack }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/mixins';
@import '../../assets/stylesheets/variables';
.tech-stack {
  display: flex;
  gap: 10px;
  flex-direction: column;

  @include smallScreens {
    flex-direction: row;
  }

  &__item {
    @include pill;
    font-weight: 500;
    background-color: var(--color-background-quiet);
  }
}
</style>
