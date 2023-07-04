<script setup>
import TypingEffect from '../shared/typingEffect.vue';
</script>

<template>
  <section class="welcome">
    <h1>
      <TypingEffect text="Hello, I'm Monica"></TypingEffect>
    </h1>
    <div class="welcome__description">
      <p>I'm a Front-End developer from Toronto.</p>
      <p>
        You have found my personal website!--the aim here is to showcase my
        experiences and developed projects.
      </p>
      <p>
        Feel free to take look around, and reach out through any of my social
        links if you're interested in working together.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
  &__description {
    max-width: 650px;
  }
}
</style>
