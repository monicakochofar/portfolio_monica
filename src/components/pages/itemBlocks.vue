<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import Modal from '../shared/modal.vue';

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
  modalData.value.location = item.location;

  modalData.value.showModal = true;
}
</script>

<template>
  <div class="grid-3" style="margin-top: 50px">
    <section
      class="block__item container__colored"
      v-for="item in props.itemList"
      :key="item.title"
    >
      <header class="block__header">
        <div class="block__title">
          <h5>{{ item.name }}</h5>
          <span v-if="item.title" style="text-decoration: underline">{{
            item.title
          }}</span>
          <span class="block__dates" v-if="item.startDate && item.endDate"
            >{{ item.startDate }} - {{ item.endDate }}</span
          >
        </div>
        <a
          v-if="item.website"
          class="block__logo"
          :href="item.website"
          target="_blank"
        >
          <icon :file-name="item.icon" />
        </a>
      </header>

      <ul class="block__bullets">
        <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      <div class="block__footer">
        <button class="block__read-more" @click="readMoreToggle(item)">
          Learn More
        </button>
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

  &__item {
    display: flex;
    flex-direction: column;
    animation: fadeIn 1.5s;
    align-self: start;
    min-height: 260px;
    max-height: 260px;
    overflow: auto;
    transition: all 0.3s ease;

    &:hover {
      transform: translate(2px, 2px);
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
    max-height: 84px;
    overflow: hidden;
  }

  &__read-more {
    width: 74px;
    margin-top: 14px;
    @include fontBodySmall;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
