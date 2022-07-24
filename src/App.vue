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
        <!-- <a class="btns__log-out nav__link" href="">log out</a> -->
      </div>
    </div>
    <section class="tune tune__bg">
      <div class="container">
        <div class="tune-content">
          <div class="left">
            <span class="slogan">tune it fast</span>
            <h1 class="main-title">Chip tuning for all vehicles</h1>
            <p class="descr">Boost your car's engine power</p>
            <div class="btns">
              <button class="btn btn-reset btn--main btn--ingradient">
                Login
              </button>
              <button class="btn btn-reset btn--main btn--outgradient">
                Registration
              </button>
            </div>
          </div>
          <div class="right">
            <div class="right__fb white-block">
              <img src="./img/img-engine.svg" alt="" />
              <p>Improvement in engine performance</p>
            </div>
            <div class="right__sb white-block">
              <p>Energy booster</p>
              <img src="./img/img-engine-boost.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="boosts">
      <div class="container">
        <div class="chip-tuning__block">
          <div class="chip-tuning__param">
            <h2 class="subtitle">Chip tuning</h2>
            <p class="descr">
              ‒ changes in the parameters of the engine, by making changes to
              the firmware of the controller.
            </p>
          </div>
          <div class="chip-tuning__boost">
            <div class="chip-block chip-block_mother white-block">
              <img src="./img/chip.png" alt="" />
              <p>Increasing engine power</p>
            </div>
            <div class="chip-block chip-block_speed white-block">
              <img class="img" src="./img/speed.png" alt="" />
              <p class="descr">
                Increasing <br />
                the efficiency and performance     
                           
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "header",
  components: {},
};
</script>

<style lang="scss">
@import "./scss/main.scss";

/*  */

.header {
  &__container {
    @include flex-c-sb;
  }

  &--main {
    background: linear-gradient(180deg, #e9e9e9 -15.83%, #ffffff 93.18%);
    padding-top: 24px;
  }

  &__logo {
    min-width: 130px;
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

    &:hover {
      color: var(--color-pastel);
    }
  }

  .btn {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 10px;
    width: 160px;

    &:not(:last-child) {
      background-origin: border-box;
      margin-right: 23px;
    }

    &--main {
      border: solid 1px transparent;
      border-radius: 10px;
      background-image: linear-gradient(
        90deg,
        var(--grad-Shakespeare) 18%,
        var(--grad-Riptide) 100%
      );
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
/*  */

.tune {
  &__bg {
    padding-top: 115px;
    padding-bottom: 210px;
    background-image: url(./img/Car-bg1.png);
    background-repeat: no-repeat;
    background-position: right top -42px;
  }

  &-content {
    @include flex-sb;

    .left {
      max-width: 420px;

      .slogan {
        display: block;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--color-pastel);
        margin-bottom: 8px;
      }

      .descr {
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        color: var(--color-black);
        margin-bottom: 44px;
      }
    }

    .right {
      display: flex;
      align-items: flex-end; // FIXME Как лучше реализовать позиционирование с машиной
      flex-wrap: wrap;
      flex-direction: column;
      transform: translateY(80px);

      .white-block {
        background-color: var(--color-white);
        border-radius: 18px;
        box-shadow: 5.3px 4.54px 39.34px rgba(35, 35, 35, 0.14);
      }

      &__fb {
        width: 165px;
        margin-bottom: 20px;
        padding: 31px 24px;

        img {
          margin-bottom: 6px;
        }
      }

      &__sb {
        display: flex;
        padding-top: 26px;
        padding-left: 31px;
        padding-right: 25px;
        width: 204px;

        img {
          transform: translateY(-8px);
        }
      }
    }
  }

  .main-title {
    font-size: 55px;
    font-weight: 600;
    line-height: 68px;
    color: var(--color-shaft);
    margin-bottom: 18px;
  }
}

/*  */

.chip-tuning {
  // .chip-tuning__block

  &__block {
    @include flex-sb;
  }

  // .chip-tuning__param

  &__param {
    max-width: 360px;
  }

  // .chip-tuning__boost

  &__boost {
    @include flex;
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    color: var(--color-shaft);
  }
}
.subtitle {
  font-weight: 600;
  font-size: 35px;
  line-height: 35px;
  color: var(--color-shaft);
  margin-bottom: 18px;
}
.descr {
  font-weight: 400;
  font-size: 13px;
  line-height: 27px;
  color: #7c7c7c;
}
.chip-block {
  // .chip-block_mother
  width: 370px;
  height: 163px;
  background-repeat: no-repeat;
  background-position: top left;
  padding: 20px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &_mother {
    background-image: url(./img/green.jpg);
    position: relative;

    img {
      position: absolute;
      bottom: 53px;
      left: -11px;
    }

    p {
      position: relative;
      right: -145px;
      top: 29px;
      width: 138px;
    }
  }

  // .chip-block_speed

  &_speed {
    position: relative;
    background-image: url(./img/blue.jpg);

    img {
      position: absolute;
      bottom: 39px;
      left: 10px;
    }

    p {
      position: relative;
      right: -159px;
      top: 25px;
      width: 164px;
    }
  }
}
.white-block {
  background-color: var(--color-white);
  border-radius: 18px;
  box-shadow: 5.3px 4.54px 39.34px rgba(35, 35, 35, 0.14);
}
</style>

.chip-block { // .chip-block_mother &_mother { } // .chip-block_speed &_speed {
} // .chip-block__img &__img { } // .chip-block__title &__title { } }
.white-block { }
