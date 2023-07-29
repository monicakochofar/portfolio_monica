<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import Modal from '../shared/modal.vue';
import TechStack from '../shared/techStack.vue';

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

function readMoreToggle(item) {
  modalData.value.title = item.name;
  modalData.value.bullets = item.bullets;
  modalData.value.location = item.location || '';

  modalData.value.showModal = true;
}
</script>

<template>
  <div class="grid-3 block" style="margin-top: 50px">
    <section
      class="block__item container__colored"
      v-for="item in props.itemList"
      :key="item.title"
    >
      <div>
        <header class="block__header">
          <div class="block__title">
            <h4>{{ item.name }}</h4>
            <h5 v-if="item.title">
              {{ item.title }}
            </h5>
            <span class="block__dates" v-if="item.startDate && item.endDate">
              {{ item.startDate }} - {{ item.endDate }}
            </span>
          </div>
          <a
            v-if="item.website && item.icon"
            class="block__logo"
            :href="item.website"
            target="_blank"
          >
            <icon :file-name="item.icon" />
          </a>
        </header>

        <ul class="block__bullets">
          <li class="block__bullet" v-html="item.bullets[0]"></li>
        </ul>
      </div>

      <div class="block__footer">
        <button class="block__read-more" @click="readMoreToggle(item)">
          Learn More
          <icon file-name="popup" width="16" height="16" />
        </button>
        <TechStack :stack-list="item.stack" />
      </div>
    </section>

    <Modal
      :title="modalData.title"
      :bullets="modalData.bullets"
      :location="modalData.location"
      :image="modalData.image"
      :showModal="modalData.showModal"
      @modal-closed="modalData.showModal = false"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/mixins';
.block {
  .show-full {
    max-height: unset;
    overflow: scroll;
  }

  &__logo {
    color: var(--color-text);
    &:hover {
      color: var(--color-text);
      transform: scale(1.2);
    }
  }

  &__item {
    display: flex;
    opacity: 0;
    flex-direction: column;
    animation: fadeIn 1.5s forwards;
    align-self: start;
    min-height: 264px;
    overflow: hidden;
    justify-content: space-between;

    &:nth-child(1) {
      animation-delay: 0.3s;
    }

    &:nth-child(2) {
      animation-delay: 0.7s;
    }

    &:nth-child(3) {
      animation-delay: 1.1s;
    }

    &:nth-child(n + 4) {
      animation-delay: 1.4s;
    }

    @include smallScreens {
      min-height: 264px;
    }
    @include mediumScreens {
      min-height: 322px;
    }
    @include largeScreens {
      min-height: 264px;
    }

    &:hover {
      transform: translate(2px, 2px);
      transition: transform 0.3s ease;
    }
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__title {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }

  &__dates,
  &__bullets {
    @include fontBodySmall;
  }

  &__bullets {
    min-height: 84px;
    max-height: 84px;
    overflow: hidden;
    @include smallScreens {
      max-height: 84px;
    }
  }

  &__read-more {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 28px;

    @include smallScreens {
      margin-top: 14px;
    }
  }
}
</style>
