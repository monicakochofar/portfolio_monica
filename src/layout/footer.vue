<template>
  <footer class="site-footer">
    <p style="text-align: center">
      Built and designed by Monica Kochofar.<br />All rights reserved. ©
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/stylesheets/mixins';

.site-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @include fontBodySmall;
}
</style>
