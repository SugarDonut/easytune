<template>
  <header class="bg--grad">
    <section class="header">
      <div class="container header__container">
        <router-link class="header__logo" to="/">
          <img src="../img/logo.svg" alt="Easytune logo" />
        </router-link>
        <nav :class="{ nav__visible: showNavMenu }" class="nav">
          <ul class="nav__list list-reset">
            <li class="nav__item header__item">
              <router-link class="nav__link nav-color" to="/tuning"
                >Tuning</router-link
              >
            </li>
            <li class="nav__item header__item">
              <router-link class="nav__link nav-color" to="/history"
                >History</router-link
              >
            </li>
            <li class="nav__item header__item">
              <router-link class="nav__link nav-color" to="/payment"
                >Payment</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="btns">
          <button @click="login" class="btn btns__btn btn-reset btn--grad btn--ingradient">
            Login
          </button>
          <button class="btn btns__btn btn-reset btn--grad btn--outgradient">
            Registration
          </button>
          <!--           
          <button class="btn btns__btn btn-reset btn--grad">
            <img src="../img/btn-doll.svg" alt="" />
            Balance: $100
          </button>
          <button class="btn btns__btn btn-reset btn--white">
            <img src="../img/btn-profile.svg" alt="" />
            User@email.com
          </button>
          <a class="btns__log-out nav__link" href="">log out</a>
           -->
        </div>

        <label
          :class="{ burgerbox__fixed: showNavMenu }"
          class="burgerbox"
          for="burger"
        >
          <input
            @click="showListBurger"
            class="burgerbox__input"
            type="checkbox"
            id="burger"
          />
          <span class="burgerbox__box"></span>
        </label>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      showNavMenu: false,
    };
  },

  methods: {
    showListBurger() {
      this.showNavMenu = this.showNavMenu === true ? false : true;
    },
  },
};
</script>

<style scoped></style>
