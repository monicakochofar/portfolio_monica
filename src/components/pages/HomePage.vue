<script setup>
  import TypingEffect from '../shared/typingEffect.vue';
</script>

<template>
  <section class="welcome">
    <h1>
      <TypingEffect text="Hello, I'm Monica"></TypingEffect> 
    </h1>
    <div class="welcome__description">
      <p>
        Being a passionate Front End Developer is more than just a job for me; it's a deep-rooted enthusiasm that fuels my creativity and drive.
      </p>
      <p>
        I have a desire for growth and opportunity. Each role that I have had gives me the opportunity to learn, take on more responsiblity, and diversify my skillset.
      </p>
      <p>
        My experiences have given me the confidence to know that I can step into any role and provide value for my team.
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