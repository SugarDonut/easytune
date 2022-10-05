<template>
  <section class="modal" v-show="show" @click="closeModal">
    <div class="container">
      <div @click.stop class="modal__container">
        <button class="btn-reset modal__close" @click="closeModal"></button>
        <h1 class="modal__title">{{ nameTitle }}</h1>
        <p class="modal__subtitle">
          Enter your e-mail and we will send you<br />
          a one-time password
        </p>
        <p class="modal__subtitle">Check your email, please</p>
        <div class="modal__content">
          <label  class="modal__field form-field" for="email">
            <input
              class="form-field__input"
              type="text"
              id="email"
              placeholder="E-mail"
            />
          </label>
          <label  class="modal__field form-field" for="password">
            <input
              class="form-field__input"
              type="text"
              id="password"
              placeholder="Password"
            />
          </label>
          <div class="modal__forgot modal__forgot--right">
            <a href="#" class="modal__link nav-color">Forgot password?</a>
          </div>
          <div class="modal__btns">
            <button class="btn btns__btn btn-reset btn--grad btn--ingradient">
              {{nameTitle}}
            </button>
          </div>
          <div class="modal__forgot">
            <a href="#" class="modal__link nav-color">Login with password</a>
            <a href="#" class="modal__link nav-color">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModalBox",
  data() {
    return {
      registerUser: true,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    nameTitle:String
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss"></style>
