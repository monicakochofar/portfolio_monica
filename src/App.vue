<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main class="portfolio">
    <header class="portfolio__header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="portfolio__navigation">
        Navigation
        <nav>
          <RouterLink class="navigation-link" to="/">Home</RouterLink>
          <RouterLink class="navigation-link" to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <!-- Router output -->
    <RouterView class="portfolio__content" />
  </main>
</template>

<style lang="scss" scoped>

.portfolio {
  display: flex;
  margin: 50px auto 0 auto;
  max-width: 1630px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: 10px 5px 5px var(--color-border);
  overflow: auto;
  background: var(--color-background-soft);
  padding: 20px;

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
    flex: 2;
    padding: 20px;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background-mute);
    width: 100%;
    border-radius: 16px;
    padding: 10px 6px;
    margin-top: 14px;
    .navigation-link {
      margin-right: 8px;
    }
  }
}

</style>
