<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  bullets: {
    type: String,
    required: true
  },
  showModal: {
    type: Boolean,
    required: true
  }
});

function close() {
  document.querySelector('.overlay').classList.remove('show');
}

function open() {
  document.querySelector('.overlay').classList.add('show');
}

onMounted(() => {
  if (props.showModal) {
    open();
  }
});

watch(
  () => props.showModal,
  (showModal) => {
    if (showModal) {
      open();
    } else {
      close();
    }
  }
);
</script>

<template>
  <div class="overlay" @click="close">
    <div class="modal-content">
      <button class="modal-content__close" @click="close">X</button>
      <h2>{{ props.title }}</h2>
      <ul class="modal-content__bullets">
        {{
          props.bullets
        }}
        <!-- <li v-for="bullet in props.bullets" :key="bullet">{{ bullet }}</li> -->
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/variables';
.overlay {
  opacity: 0;
  position: fixed;
  z-index: var(--z-index-front);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--color-background-soft);
  transition: all ease 0.5s;
  &.show {
    opacity: 1;
  }
}

.modal-content {
  position: relative;
  background-color: var(--color-background);
  margin: 15% auto;
  padding: 40px 50px;
  border: 1px solid var(--color-border);
  width: 56%;
  min-height: 40%;
  border-radius: 12px;

  &__close {
    position: absolute;
    top: 12px;
    right: 16px;
  }
}
</style>
