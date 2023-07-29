<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import Modal from '../../shared/modal.vue';
import TechStack from '../../shared/techStack.vue';

const props = defineProps({
  itemList: {
    type: Array,
    required: true
  }
});

const modalData = ref({
  title: '',
  bullets: [],
  location: '',
  image: '',
  showModal: false
});
</script>

<template>
  <div class="container__colored" style="margin-top: 50px">test</div>
</template>

<style lang="scss" scoped>
@import '../../../assets/stylesheets/mixins';
</style>
