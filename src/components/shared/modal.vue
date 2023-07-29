<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  bullets: {
    type: Array,
    required: true
  },
  showModal: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  }
});
const emit = defineEmits(['modal-closed']);

function close() {
  document.querySelector('.overlay').classList.remove('show');
  emit('modal-closed');
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
    <div class="modal-content" @click.stop>
      <button
        class="modal-content__close"
        aria-label="Close Modal"
        @click="close"
      >
        X
      </button>
      <span class="modal-content__title">{{ props.title }}</span>
      <div v-if="props.location" class="modal-content__location">
        <span class="color-heading">Location:</span> {{ props.location }}
      </div>
      <img v-if="props.image" class="modal-content__image" :src="props.image" />
      <ul class="modal-content__bullets">
        <li v-for="bullet in props.bullets" :key="bullet" v-html="bullet"></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/variables';
@import '../../assets/stylesheets/mixins';
.overlay {
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(1, 1, 1, 0.5);
  transition: all ease 0.5s;
  z-index: -1;
  &.show {
    opacity: 1;
    z-index: var(--z-index-front);
  }
}

.modal-content {
  position: relative;
  background-color: var(--color-background);
  margin: 8% auto;
  padding: 40px 50px;
  border: 1px solid var(--color-border);
  width: 84%;
  max-width: 888px;
  min-height: 40%;
  border-radius: 12px;

  &__title {
    @include fontHeading3;
  }

  &__location {
    padding-bottom: 12px;
  }

  &__image {
    display: none;
    @include smallScreens {
      display: block;
    }
  }

  &__close {
    position: absolute;
    top: 12px;
    right: 16px;
  }
}
</style>
