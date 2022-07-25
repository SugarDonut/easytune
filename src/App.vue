<template>
  <header class="header header--main">
    <div class="container header__container">
      <a class="header__logo" href="#"
        ><img src="./img/logo.svg" alt="Easytune logo"
      /></a>
      <!-- <nav class="nav">
        <ul class="nav__list list-reset">
          <li class="nav__item"><a href="" class="nav__link nav-color--header">Tuning</a></li>
          <li class="nav__item"><a href="" class="nav__link nav-color--header">History</a></li>
          <li class="nav__item"><a href="" class="nav__link nav-color--header">Payment</a></li>
        </ul>
      </nav> -->
      <div class="btns">
        <button class="btns__btn btn-reset btn--main btns__btn--ingradient">
          Login
        </button>
        <a href=""></a>
        <button class="btns__btn btn-reset btn--main btns__btn--outgradient">
          Registration
        </button>
        <!-- <a class="btns__log-out nav__link" href="">log out</a> -->
      </div>
    </div>
    <section class="tune">
      <div class="container tune__bg">
        <div class="tune__content">
          <div class="tune__left">
            <span class="tune__left--slogan">tune it fast</span>
            <h1 class="tune__left--main-title">Chip tuning for all vehicles</h1>
            <p class="tune__left--descr">Boost your car's engine power</p>
            <div class="btns">
              <button
                class="btns__btn btn-reset btn--main btns__btn--ingradient"
              >
                Login
              </button>
              <button
                class="btns__btn btn-reset btn--main btns__btn--outgradient"
              >
                Registration
              </button>
            </div>
          </div>
          <div class="tune__right">
            <div class="tune__right--fb white-block">
              <img src="./img/img-engine.svg" alt="" />
              <p>Improvement in engine performance</p>
            </div>
            <div class="tune__right--sb white-block">
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
              <img src="./img/speed.png" alt="" />
              <p>
                Increasing <br />
                the efficiency and performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="you-can">
      <div class="container">
        <h2 class="title">With our service you can:</h2>
        <div class="service">
          <ul class="service__list list-reset">
            <li class="service__item">
              <h3 class="service__title">Tune stage1 or stage2</h3>
              <p class="service__descr">
                for all vehicles that you can read / write
              </p>
            </li>
            <li class="service__item">
              <h3 class="service__title">Disable sensors</h3>
              <p class="service__descr">
                adBLUE, DPF, EGR, throttle valve, flaps, lambda sensor or any
                other sensors
              </p>
            </li>
            <li class="service__item">
              <h3 class="service__title">Disable catalyst system</h3>
              <p class="service__descr">
                NOX sensors or any other sensors for petrol, turbo petrol,
                compressor or LPG
              </p>
            </li>
          </ul>
          <div class="service__img white-block">
            <!-- <img src="./img/graph.png" alt=""> -->
          </div>
        </div>
      </div>
    </section>
    <section class="advantages">
      <div class="container">
        <div class="advantages-block">
          <div class="advantages-block__percent">
            <h2 class="title">Our advantages</h2>
            <div class="percent-soutent">
              <div class="percent-soutent__one">
                <span class="percent-soutent__southent">100%</span>
              </div>
              <div class="percent-soutent__two">
                <h3 class="percent-soutent__title">refund guarantee</h3>
                <p class="percent-soutent__subtitle">
                  within 30 days if processed file doesn't work
                </p>
              </div>
              <img
                class="percent-soutent__img"
                src="./img/Car-bg-2.png"
                alt=""
              />
            </div>
          </div>

          <ul class="advantages-block__list list-reset">
            <li class="advantages-block__item advantages-color--one">
              <h4 class="advantages-block__title">Tested solutions only</h4>
              <p class="advantages-block_subtitle">
                All solution are real car tested
              </p>
            </li>
            <li class="advantages-block__item advantages-color--two">
              <h4 class="advantages-block__title">Free registration</h4>
              <p class="advantages-block_subtitle">Pay only when you buy</p>
            </li>
            <li class="advantages-block__item advantages-color--three">
              <h4 class="advantages-block__title advantages-color--text">
                Solutions added regularly
              </h4>
              <p class="advantages-block_subtitle advantages-color--text">
                New solutions appear <br />
                every day
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </header>
  <footer>
    <div class="footer">
      <div class="container header__container">
        <a class="header__logo" href="#"
          ><img src="./img/logo.svg" alt="Easytune logo"
        /></a>
        <nav class="nav">
          <ul class="nav__list list-reset">
            <li class="nav__item"><a href="" class="nav__link nav-color--footer">Privacy Policy</a></li>
            <li class="nav__item"><a href="" class="nav__link nav-color--footer">User Agreement</a></li>
          </ul>
        </nav>
        <div class="btns">
          <button class="btns__btn btn-reset btn--main btns__btn--ingradient">
            Login
          </button>
          <a href=""></a>
          <button class="btns__btn btn-reset btn--main btns__btn--outgradient">
            Registration
          </button>
          <!-- <a class="btns__log-out nav__link" href="">log out</a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "header",
  components: {},
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
