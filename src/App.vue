<template>
    <header class="header header--main">
      <div class="container header__container">
        <a class="header__logo" href="#"
          ><img src="./img/logo.svg" alt="Easytune logo"
        /></a>
        <nav class="nav">
          <ul class="nav__list list-reset">
            <li class="nav__item"><a href="" class="nav__link">Tuning</a></li>
            <li class="nav__item"><a href="" class="nav__link">History</a></li>
            <li class="nav__item"><a href="" class="nav__link">Payment</a></li>
          </ul>
        </nav>
        <div class="btns">
          <button class="btn btn-reset btn--main btn--ingradient">Login</button>
          <button class="btn btn-reset btn--main btn--outgradient">
            Registration
          </button>
          <a class="btns__log-out nav__link" href="">log out</a>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./scss/main.scss";


/*  */
.header {
  background: linear-gradient(180deg, #e9e9e9 -15.83%, #ffffff 93.18%);
  &__container {
    @include flex-sb;
  }

  &--main {
    padding-top: 24px;
  }

  &__logo {
    min-width: 140px;
  }
}

.nav {
  &__list {
    @include flex;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 98px;
    }
  }

  &__link {
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: var(----color-shaft);
  }
}

.btns {
  @include flex-ali-center;

  &__log-out {
      margin: 0;
      padding: 0;
      min-width: 70px;

      &:hover{
        color: var(--color-pastel);
      }
    }

  .btn {
    font-weight: 600;
    font-size: 15px;
    line-height: 17px;
    padding: 11px 10px;
    width: 160px;

    &:not(:last-child) {
      background-origin: border-box;
      margin-right: 23px;
    }

    &--main {
      border: solid 1px transparent;
      border-radius: 10px;
      background-image: linear-gradient(90deg, #4dadd8 18%, #81e9c0 100%);
      background-origin: border-box;
    }

    &--ingradient {
      color: var(--color-white);
    }

    &--outgradient {
      color: var(--color-shaft);
      box-shadow: 2px 1000px 1px #fff inset;
    }
  }
}
</style>
