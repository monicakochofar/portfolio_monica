<script setup>
import { onMounted } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import TypingEffect from './components/shared/typingEffect.vue';

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
    <section class="portfolio container container__colored">
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
            <RouterLink class="navigation-link" to="/">Companies</RouterLink>
            <RouterLink class="navigation-link" to="/projects"
              >Projects</RouterLink
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
              custom-class="medium-logo"
              file-name="medium"
              width="20"
              height="20"
            ></icon>
          </a>
        </div>
      </header>

      <section class="portfolio__welcome">
        <h1>
          <TypingEffect text="Hello, I'm Monica"></TypingEffect>
        </h1>
        <div class="portfolio__description">
          <p>I'm a Front-End developer from Toronto.</p>
          <p>
            Welcome to my personal website, the aim here is to showcase my
            experiences and developed projects.
          </p>
          <p>
            Feel free to take look around, and reach out through any of my
            social links if you're interested in working together.
          </p>
        </div>
      </section>
    </section>

    <!-- Router output -->
    <RouterView class="container" />
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

  &__welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    padding: 20px;
    overflow-y: auto;
  }

  &__description {
    max-width: 650px;
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

    .medium-logo {
      fill: var(--color-background);
    }
  }
}
</style>
