<script setup>
import { onMounted } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

onMounted(() => {
  tippy('#github', {
    content: 'GitHub'
  });
  tippy('#linkedin', {
    content: 'LinkedIn'
  });
  tippy('#medium', {
    content: 'Medium'
  });
});
</script>

<template>
  <main>
    <section class="portfolio container">
      <header class="portfolio__header">
        <icon
          custom-class="site-logo"
          file-name="logo"
          width="125"
          height="125"
        ></icon>
        <div class="portfolio__navigation">
          Navigation
          <nav class="navigation-links">
            <RouterLink class="navigation-link" to="/">Home</RouterLink>
            <RouterLink class="navigation-link" to="/experience"
              >Experience</RouterLink
            >
          </nav>
        </div>
        <div class="portfolio__links">
          Socials:
          <a
            class="icon"
            id="github"
            href="https://github.com/monicakochofar"
            target="_blank"
          >
            <icon file-name="github-white" width="20" height="20"></icon>
          </a>
          <a
            class="icon"
            id="linkedin"
            href="https://ca.linkedin.com/in/monicakochofar"
            target="_blank"
          >
            <icon file-name="linkedin" width="20" height="20"></icon>
          </a>
          <a
            id="medium"
            class="icon"
            href="https://mkay11.medium.com/"
            target="_blank"
          >
            <icon
              custom-class="medium"
              file-name="medium"
              width="20"
              height="20"
            ></icon>
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
  animation: fadeIn 3s;

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
      align-items: center;
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

    .medium {
      fill: var(--color-background);
    }
  }
}
</style>
