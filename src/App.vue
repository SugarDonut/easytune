<template>
  <div id="app">
    <header class="header header--main">
      <div class="container header__container">
        <a class="container__img" href="#"
          ><img src="./img/logo.svg" alt="Easytune logo"
        /></a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.header {
  &__container {
    @include flex-sb;
  }
}
</style>
