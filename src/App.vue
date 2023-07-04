<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {

  // inlineSVG.init({
  //   svgSelector: 'img.svg', // the class attached to all images that should be inlined
  //   initClass: 'js-inlinesvg', // class added to <html>
  // }, function () {
  //   console.log('All SVGs inlined');
  // });
});

</script>

<template>
  <main>

    <section class="portfolio container">
      <header class="portfolio__header">
        <icon name="logo" width="125" height="125"></icon>
        <div class="portfolio__navigation">
          Navigation
          <nav class="navigation-links">
            <RouterLink class="navigation-link" to="/">Home</RouterLink>
            <RouterLink class="navigation-link" to="/experience">Experience</RouterLink>
          </nav>
        </div>
        <div class="portfolio__links">
          Socials:
          <a class="icon" href="https://github.com/monicakochofar" target="_blank">
              <icon name="github-white" width="20" height="20"></icon>
          </a>          
          <a class="icon" href="https://ca.linkedin.com/in/monicakochofar" target="_blank">
            <icon name="linkedin" width="20" height="20"></icon>
          </a>
          <a class="icon" href="https://mkay11.medium.com/" target="_blank">
            <icon name="medium" width="20" height="20"></icon>
          </a>
        </div>
      </header>
      <!-- Router output -->
      <RouterView class="portfolio__content" />
    </section>


    <!-- <section class="companies container">
      <h2>Companies I have worked with:</h2>
      
    </section> -->

  </main>
</template>

<style lang="scss" scoped>
@import './assets/stylesheets/mixins';

.portfolio {
  display: flex;
  gap: 50px;
  flex-direction: column;

  @include mediumScreens {
    flex-direction: row;
    height: 368px;
  }

  &__header,
  &__content {
    width: 100%;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    padding: 20px;
    overflow-y: auto;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background-mute);
    width: 100%;
    max-width: 498px;
    border-radius: 16px;
    padding: 10px 6px;
    margin-top: 14px;

    .navigation-links {
      display: flex;
      flex-direction: column;
      @include smallScreens {
        flex-direction: row;
      }
    }

    .navigation-link {
      margin-right: 8px;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
    padding: 8px;
    background-color: var(--color-background-mute);
    width: 100%;
    max-width: 498px;

    a {
      height: 20px;
    }
  }
}

</style>
