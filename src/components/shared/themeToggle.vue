<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const isLightTheme = ref(true);

function toggleTheme() {
  const newTheme = isLightTheme.value ? 'dark' : 'light';
  localStorage.setItem('portfolioTheme', newTheme);
  isLightTheme.value = !isLightTheme.value;
}

onMounted(() => {
  const storedTheme = localStorage.getItem('portfolioTheme');
  const setDefaultDark = storedTheme && storedTheme == 'dark';
  const setDefaultLight = storedTheme && storedTheme == 'light';
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if ((setDefaultDark || prefersDark) && !setDefaultLight) {
    isLightTheme.value = false;
  }
});

watchEffect(() => {
  const newTheme = isLightTheme.value ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
});
</script>

<template>
  <button @click="toggleTheme" class="icon theme-toggle" tabindex="1">
    <div class="theme-toggle__background">
      <icon
        v-if="isLightTheme"
        custom-class="theme-toggle__logo"
        file-name="moon"
        width="22"
        height="22"
      />
      <icon
        v-else
        custom-class="theme-toggle__logo"
        file-name="sun"
        width="22"
        height="22"
      />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  height: 32px;
  padding: 2px 4px;
  &__background {
    display: flex;
    align-items: center;
    padding: 4px 10px;
    background-color: var(--color-border);
    border-radius: 16px;
  }
  &__logo {
    background-color: var(--color-background-soft);
    border-radius: 50%;
    padding: 4px;
  }
}
</style>
