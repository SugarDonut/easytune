<template>
  <footer>
    <div class="footer">
      <div class="container header__container">
        <router-link class="header__logo" to="/">
          <img src="../img/logo.svg" alt="Easytune logo"/>
        </router-link>
        <nav class="nav footer__nav">
          <ul class="nav__list list-reset">
            <li class="nav__item footer__item">
              <router-link class="footer__link nav__link nav-color" to="/privacy-policy">Privacy Policy</router-link>
            </li>
            <li class="nav__item footer__item">
              <router-link class="footer__link nav__link nav-color" to="/user-agreement">User Agreement</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>