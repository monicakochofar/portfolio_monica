<script setup>
import { ref } from 'vue';
import { COMPANY_LIST } from './utils';
const companyList = ref(COMPANY_LIST);

function readMoreToggle(e) {
  const button = e.target;
  const parent = button.closest('.companies__item');

  const bullets = parent.querySelector('.companies__bullets');
  if (bullets.classList.contains('show-full')) {
    bullets.classList.remove('show-full');
    button.innerHTML = 'Read more';
  } else {
    bullets.classList.add('show-full');
    button.innerHTML = 'Show less';
  }
}
</script>

<template>
  <div class="companies grid-3">
    <section
      class="companies__item container__colored"
      v-for="company in companyList"
      :key="company.title"
    >
      <header class="companies__header">
        <div class="companies__title">
          <h5>{{ company.name }}</h5>
          <span style="text-decoration: underline">{{ company.title }}</span>
          <!-- <span>{{ company.location }}</span> -->
          <span class="companies__dates"
            >{{ company.startDate }} - {{ company.endDate }}</span
          >
        </div>
        <a :href="company.website" target="_blank">
          <icon :file-name="company.icon" />
        </a>
      </header>

      <ul class="companies__bullets">
        <li v-for="bullet in company.bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      <div class="companies__footer">
        <button class="companies__read-more" @click="readMoreToggle">
          Read More
        </button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/mixins';
.companies {
  margin-top: 50px;

  .show-full {
    max-height: unset;
    overflow: scroll;
  }

  &__item {
    display: flex;
    flex-direction: column;
    animation: fadeIn 1.5s;
    align-self: start;
    min-height: 250px;
    // max-height: 250px;
    overflow: auto;
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
