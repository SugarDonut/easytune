<template>
  <et-modal-box v-model:show="showModal"></et-modal-box>
  <section class="tune">
    <div class="container tune__bg">
      <div class="tune__content">
        <div class="tune__left">
          <span class="tune__left--slogan">tune it fast</span>
          <h1 class="tune__left--main-title">Chip tuning for all vehicles</h1>
          <p class="tune__left--descr">Boost your car's engine power</p>
          <div class="tune__btns">
            <button
              @click="login"
              class="btn tune__btn btn-reset btn--grad btn--ingradient"
            >
              Login
            </button>
            <button
              @click="registration"
              class="btn tune__btn btn-reset btn--grad btn--outgradient"
            >
              Registration
            </button>
          </div>
        </div>
        <div class="tune__right">
          <div class="tune__right--fb white-block">
            <img src="../img/img-engine.svg" alt="" />
            <p>Improvement in engine performance</p>
          </div>
          <div class="tune__right--sb white-block">
            <p>Energy booster</p>
            <img src="../img/img-engine-boost.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="boosts">
    <div class="container">
      <div class="chip-tuning__block">
        <div class="chip-tuning__param">
          <h2 class="chip-tuning__title title">Chip tuning</h2>
          <p class="descr">
            ‒ changes in the parameters of the engine, by making changes to the
            firmware of the controller.
          </p>
        </div>
        <div class="chip-tuning__boost">
          <div class="chip-block chip-block__mother white-block">
            <img src="../img/chip.png" alt="" />
            <p>Increasing engine power</p>
          </div>
          <div class="chip-block chip-block__speed white-block">
            <img src="../img/speed.png" alt="" />
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
      <h2 class="you-can__title title">With our service you can:</h2>
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
          <div class="percent-hundred">
            <div class="percent-hundred__one">
              <span class="percent-hundred__hundred">100%</span>
            </div>
            <div class="percent-hundred__two">
              <h3 class="percent-hundred__title">refund guarantee</h3>
              <p class="percent-hundred__subtitle">
                within 30 days if processed file doesn't work
              </p>
            </div>
            <img
              class="percent-hundred__img"
              src="../img/Car-bg-2.png"
              alt=""
            />
          </div>
        </div>
        <ul class="advantages-block__list list-reset">
          <li class="advantages-block__item advantages-color--one">
            <h4 class="advantages-block__title">Tested solutions only</h4>
            <p class="advantages-block__subtitle">
              All solution are real car tested
            </p>
            <span class="advantages-block__number">01</span>
          </li>
          <li class="advantages-block__item advantages-color--two">
            <h4 class="advantages-block__title">Free registration</h4>
            <p class="advantages-block__subtitle">Pay only when you buy</p>
            <span class="advantages-block__number">02</span>
          </li>
          <li class="advantages-block__item advantages-color--three">
            <h4 class="advantages-block__title advantages-color--text">
              Solutions added regularly
            </h4>
            <p class="advantages-block__subtitle advantages-color--text">
              New solutions appear <br />every day
            </p>
            <span class="advantages-block__number">03</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="contacts">
    <div class="container">
      <div class="contacts-block">
        <div class="contacts-block__mail contacts-mail">
          <h2 class="contacts-mail__title title">Our contacts</h2>
          <a
            href="mailto:support@onlinecarservice.ru"
            class="contacts-mail__field white-block"
          >
            <h5>e-mail</h5>
            <span>support@onlinecarservice.ru</span>
          </a>
        </div>
        <div class="contacts-block__docum">
          <ul class="contacts-block__nav list-reset">
            <li class="contacts-block__list">
              <h4 class="contacts-block__title">ORGANIZATION IE</h4>
              <p class="contacts-block__subtitle">
                Plyshevskij Alexander Sergeevich
              </p>
            </li>
            <li class="contacts-block__list">
              <h4 class="contacts-block__title">INN / PSRN</h4>
              <p class="contacts-block__subtitle">
                025551261000 / 316028000097627
              </p>
            </li>
            <li class="contacts-block__list">
              <h4 class="contacts-block__title">ACCOUNT NUMBER</h4>
              <p class="contacts-block__subtitle">4080 2810 1060 0001 3713</p>
            </li>
          </ul>
        </div>
        <div class="contacts-block__docum">
          <ul class="contacts-block__nav list-reset">
            <li class="contacts-block__list">
              <h4 class="contacts-block__title">BANK ADDRESS</h4>
              <p class="contacts-block__subtitle">
                Bashkirskoe otdelenie №8598 PAO Sberbank<br />
                g. Ufa
              </p>
            </li>
            <li class="contacts-block__list">
              <h4 class="contacts-block__title">REGISTERED OFFICE</h4>
              <p class="contacts-block__subtitle">
                52027, Russian Federation, Republic of<br />
                Bashkortostan, Belebeevsky district,<br />
                Annovka village, Molodezhnaja str., 6
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    login() {
      this.showModal = true;
    },
    registration() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped></style>
