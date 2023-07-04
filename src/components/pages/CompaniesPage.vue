<script setup>
import { ref } from 'vue';
const companyList = ref([
  {
    title: 'Front-End Engineer',
    name: 'Dribbble Holdings Ltd.',
    location: 'Remote',
    dates: '05/2022 – Current',
    bullets: [
      'Developed products for a web application serving over 4+ million visitors each month, using Vue.js, CSS/SASS, and Ruby on Rails',
      'Spearheaded discussions with product, QA, and backend developers to convert product ideas into tangible deliveries',
      'Supported fellow engineers through code reviews, training new hires, uplifting documentation, and advancement of internal processes.'
    ]
  },
  {
    title: 'Senior Front-End Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    dates: '10/2021 – 05/2022',
    bullets: [
      'Mentored junior developers weekly to assist in their growth and learning',
      'Led Front-End development for projects using HTML, CSS/SASS, and Angular 10',
      'Contributed to initial planning for the creation of an internal web search tool to serve call centre representatives'
    ]
  },
  {
    title: 'Front-End Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    dates: '09/2019 – 10/2021',
    bullets: [
      'Developed Front-End for a web application serving over 7000 call centre representatives, using HTML, CSS/SASS and Angular 10',
      'Implemented unit tests through the use of the Jest framework to guarantee 85% test coverage',
      'Uplifted legacy AngularJS applications to the latest Angular version'
    ]
  },
  {
    title: 'Full-Stack Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    dates: '01/2018 – 09/2019',
    bullets: [
      'Contributed to implementation and planning for a high priority rework of existing Rogers and Fido call centre and retail applications',
      'Designed RESTful api services and SSO architecture',
      'Developed using AngularJS, Spring Framework, Cassandra, and AkkaHTTP'
    ]
  },
  {
    title: 'Java J2EE Developer',
    name: 'Rogers Communications Inc',
    location: 'Brampton, ON',
    dates: '05/2016 – 01/2018',
    bullets: [
      'Developed for a Fido/Rogers legacy application serving 500 stores using Java 1.6, Javascript, and the Oracle ATG Web Commerce platform',
      'Trained co-op students on development and best team practices',
      'Developed data models and SQL database designs to plan projects'
    ]
  }
]);
</script>

<template>
  <section class="companies grid-3">
    <div class="container__colored">test</div>
    <div class="container__colored">test</div>
    <div class="container__colored">test</div>
  </section>
</template>

<style lang="scss" scoped>
.companies {
  margin-top: 50px;
}
</style>
