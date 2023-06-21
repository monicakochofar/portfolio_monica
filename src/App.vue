<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';
import 'inline-svg';

onBeforeMount(() => {

  inlineSVG.init({
    svgSelector: 'img.svg', // the class attached to all images that should be inlined
    initClass: 'js-inlinesvg', // class added to <html>
  }, function () {
    console.log('All SVGs inlined');
  });
});

</script>

<template>
  <main>

    <section class="portfolio container">
      <header class="portfolio__header">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="portfolio__navigation">
          Navigation
          <nav class="navigation-links">
            <RouterLink class="navigation-link" to="/">Home</RouterLink>
            <RouterLink class="navigation-link" to="/experience">Experience</RouterLink>
          </nav>
        </div>
      </header>
      <!-- Router output -->
      <RouterView class="portfolio__content" />
    </section>


    <section class="companies container">
      <h2>Companies I have worked with:</h2>
      
    </section>

  </main>
</template>

<style lang="scss" scoped>
@import './assets/stylesheets/mixins';

.container {
  margin: 50px 20px 0;
  max-width: 1600px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: 10px 5px 5px var(--color-border);
  overflow: auto;
  background: var(--color-background-soft);
  padding: 20px;

  @include smallScreens {
    margin: 50px 50px 0;
  }

  @include mediumScreens {
    max-height: 368px;
  }

  @include extraLargeScreens {
    margin: 50px auto 0 auto;
  }

}

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
}

</style>
