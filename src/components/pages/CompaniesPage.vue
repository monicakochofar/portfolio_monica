<script setup>
import { ref } from 'vue';
const companyList = ref([
  {
    title: 'Front-End Engineer',
    name: 'Dribbble Holdings Ltd.',
    location: 'Remote',
    startDate: '05/2022',
    endDate: 'Current',
    bullets: [
      'Developed products for a web application serving over 4+ million visitors each month, using Vue.js, CSS/SASS, and Ruby on Rails',
      'Spearheaded discussions with product, QA, and backend developers to convert product ideas into tangible deliveries',
      'Supported fellow engineers through code reviews, training new hires, uplifting documentation, and advancement of internal processes.'
    ],
    icon: 'dribbble'
  },
  {
    title: 'Senior Front-End Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '10/2021',
    endDate: '05/2022',
    bullets: [
      'Mentored junior developers weekly to assist in their growth and learning',
      'Led Front-End development for projects using HTML, CSS/SASS, and Angular 10',
      'Contributed to initial planning for the creation of an internal web search tool to serve call centre representatives'
    ],
    icon: 'rogers'
  },
  {
    title: 'Front-End Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '09/2019',
    endDate: '10/2021',
    bullets: [
      'Developed Front-End for a web application serving over 7000 call centre representatives, using HTML, CSS/SASS and Angular 10',
      'Implemented unit tests through the use of the Jest framework to guarantee 85% test coverage',
      'Uplifted legacy AngularJS applications to the latest Angular version'
    ],
    icon: 'rogers'
  },
  {
    title: 'Full-Stack Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '01/2018',
    endDate: '09/2019',
    bullets: [
      'Contributed to implementation and planning for a high priority rework of existing Rogers and Fido call centre and retail applications',
      'Designed RESTful api services and SSO architecture',
      'Developed using AngularJS, Spring Framework, Cassandra, and AkkaHTTP'
    ],
    icon: 'rogers'
  },
  {
    title: 'Java J2EE Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    startDate: '05/2016',
    endDate: '01/2018',
    bullets: [
      'Developed for a Fido/Rogers legacy application serving 500 stores using Java 1.6, Javascript, and the Oracle ATG Web Commerce platform',
      'Trained co-op students on development and best team practices',
      'Developed data models and SQL database designs to plan projects'
    ],
    icon: 'rogers'
  }
]);

function readMoreToggle(e) {
  const button = e.target;
  console.log('button', button);
  const parent = button.closest('.companies__item');

  const bullets = parent.querySelector('.companies__bullets');
  console.log('bullets', bullets);
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
        <icon :file-name="company.icon" />
      </header>

      <ul class="companies__bullets">
        <li v-for="bullet in company.bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      <footer class="companies__footer">
        <button class="companies__read-more" @click="readMoreToggle">
          Read More
        </button>
      </footer>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheets/mixins';
.companies {
  margin-top: 50px;

  .show-full {
    max-height: unset;
    overflow: visible;
  }

  &__item {
    display: flex;
    flex-direction: column;
    animation: fadeIn 1.5s;
    overflow-y: scroll;
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
