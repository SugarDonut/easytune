<template>
  <header class="bg--grad">
    <section class="header">
      <div class="container header__container">
        <router-link class="header__logo" to="/">
          <img src="../img/logo.svg" alt="Easytune logo"/>
        </router-link>
        <nav class="nav">
          <ul class="nav__list list-reset">
            <li class="nav__item header__item">
              <router-link class="nav__link nav-color" to="/tuning">Tuning</router-link>
            </li>
            <li class="nav__item header__item">
              <router-link class="nav__link nav-color" to="/history">History</router-link>
            </li>
            <li class="nav__item header__item">
              <router-link class="nav__link nav-color" to="/payment">Payment</router-link>
            </li>
          </ul>
        </nav>
        <div class="btns">
          <button class="btn btns__btn btn-reset btn--grad btn--ingradient">
            Login
          </button>
          <button class="btn btns__btn btn-reset btn--grad btn--outgradient">
            Registration
          </button>

          <!--          <button class="btn btns__btn btn-reset btn&#45;&#45;grad ">-->
          <!--            <img src="../img/btn-doll.svg" alt="">-->
          <!--            Balance: $100-->
          <!--          </button>-->
          <!--          <button class="btn btns__btn btn-reset btn&#45;&#45;white">-->
          <!--            <img src="../img/btn-profile.svg" alt="">-->
          <!--            User@email.com-->
          <!--          </button>-->
          <!--          <a class="btns__log-out nav__link" href="">log out</a>-->

        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>