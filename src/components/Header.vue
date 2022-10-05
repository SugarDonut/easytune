<template>
  <et-modal-box v-model:show="showModal"></et-modal-box>
  <header class="bg--grad">
    <section class="header">
      <div class="container header__container">
        <router-link class="header__logo" to="/">
          <img src="../img/logo.svg" alt="Easytune logo" />
        </router-link>
        <nav
          v-show="registerUser"
          :class="{ nav__visible: showListBurger }"
          class="nav"
        >
          <ul class="nav__list list-reset">
            <li class="nav__item header__item">
              <router-link
                @click="showListBurger = false"
                class="nav__link nav-color"
                to="/tuning"
                >Tuning</router-link
              >
            </li>
            <li class="nav__item header__item">
              <router-link
                @click="showListBurger = false"
                class="nav__link nav-color"
                to="/history"
                >History</router-link
              >
            </li>
            <li class="nav__item header__item">
              <router-link
                @click="showListBurger = false"
                class="nav__link nav-color"
                to="/payment"
                >Payment</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="btns">
          <button
            v-if="!registerUser"
            @click="login"
            class="btn btns__btn btn-reset btn--grad btn--ingradient"
          >
            Login
          </button>
          <button
            v-if="!registerUser"
            class="btn btns__btn btn-reset btn--grad btn--outgradient"
          >
            Registration
          </button>

          <button v-if="registerUser" class="btn btns__btn btn-reset btn--grad">
            <img src="../img/btn-doll.svg" alt="" />
            Balance: $100
          </button>
          <button
            v-if="registerUser"
            class="btn btns__btn btn-reset btn--white"
          >
            <img src="../img/btn-profile.svg" alt="" />
            User@email.com
          </button>
          <a v-if="registerUser" class="btns__log-out nav__link" href=""
            >log out</a
          >
        </div>

        <label
          v-if="registerUser"
          :class="{ burgerbox__fixed: showListBurger }"
          class="burgerbox"
          for="burger"
        >
          <input
            v-model="showListBurger"
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
      showModal: false,
      showListBurger: false,
      registerUser: false,
    };
  },

  methods: {
    login() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped></style>
