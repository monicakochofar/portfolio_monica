<script setup>
import Header from '@/layout/header/header.vue';
import Footer from '@/layout/footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('portfolioTheme', 'dark');
});
</script>

<template>
  <main class="container">
    <Header></Header>

    <!-- TODO: create a filter by date, tech stack, etc. -->
    <!-- <section class="container__colored" style="margin-top: 50px;">filter here</section> -->

    <!-- Router output -->
    <RouterView id="router-view" />

    <Footer></Footer>
  </main>
</template>
