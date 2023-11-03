<script setup>
import { onMounted } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import TypingEffect from '@/components/shared/typingEffect.vue';
import ThemeToggle from '@/components/shared/themeToggle.vue';

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
  <section class="portfolio container__colored">
    <ThemeToggle class="portfolio__theme-toggle" />
    <header class="portfolio__header">
      <icon
        custom-class="site-logo"
        file-name="logo"
        width="125"
        height="125"
      />
      <!-- TODO: implement projects page -->
      <!-- <div class="portfolio__navigation">
        Navigation
        <nav class="navigation-links">
          <RouterLink class="navigation-link" to="/">Companies</RouterLink>
          <RouterLink class="navigation-link" to="/projects"
            >Projects</RouterLink
          >
        </nav>
      </div> -->
      <div class="portfolio__links">
        <span class="socials">Socials:</span>
        <a
          class="icon"
          id="github"
          aria-label="Github link"
          href="https://github.com/monicakochofar"
          target="_blank"
        >
          <icon file-name="github-white" width="22" height="22" />
        </a>
        <a
          class="icon"
          id="linkedin"
          aria-label="Linkedin link"
          href="https://ca.linkedin.com/in/monicakochofar"
          target="_blank"
        >
          <icon file-name="linkedin" width="22" height="22" />
        </a>
        <a
          id="medium"
          class="icon"
          aria-label="Medium Blog link"
          href="https://mkay11.medium.com/"
          target="_blank"
        >
          <icon
            custom-class="medium-logo"
            file-name="medium"
            width="22"
            height="22"
          />
        </a>
      </div>
    </header>

    <section class="portfolio__welcome">
      <h1>
        <TypingEffect text="Hello, I'm Monica."></TypingEffect>
      </h1>
      <div class="portfolio__description">
        <p>
          I'm a Front-End developer from
          <span class="bold">Toronto &#129414;</span>.
        </p>
        <p>
          Welcome to my personal website, which was built to showcase my
          <span class="bold">experiences &#x26FA;</span> and developed
          <span class="bold">projects &#x1F3F0;</span>.
        </p>
        <p>
          Feel free to take look around, and reach out through any of my
          <span class="bold">social links &#x2728;</span> if you're interested
          in working together.
        </p>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/stylesheets/mixins';

.portfolio {
  display: flex;
  position: relative;
  gap: 50px;
  flex-direction: column;

  .socials {
    padding-top: 2px;
    @include fontHeading5;
  }

  @include largeScreens {
    flex-direction: row;
    height: 368px;
  }

  &__theme-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: var(--z-index-front);
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

  &__header {
    display: flex;
    width: 100%;
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
      height: 22px;
    }
    .medium-logo {
      fill: var(--color-background);
    }
  }
}
</style>