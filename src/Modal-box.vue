<template>
  <section class="modal">
    <div class="modal__container">
      <button class="btn-reset modal__close"></button>
      <h1 class="modal__title">Login</h1>
      <!-- <p class="modal__subtitle">
        Enter your e-mail and we will send you<br> a one-time password
      </p> -->
      <p class="modal__subtitle">Check your email, please</p>
      <div class="modal__content">
        <label class="modal__field form-field" for="">
          <input
            class="form-field__input"
            type="text"
            name=""
            id=""
            placeholder="E-mail"
          />
        </label>
        <label class="modal__field form-field" for="">
          <input
            class="form-field__input"
            type="text"
            name=""
            id=""
            placeholder="Password"
          />
        </label>
        <div class="modal__forgot modal__forgot--right">
          <a href="#" class="modal__link  nav-color">Forgot password?</a>
        </div>
        <div class="modal__btns">
          <button class="btn btns__btn btn-reset btn--grad btn--ingradient">
            Login
          </button>
        </div>
        <div class="modal__forgot">
          <a href="#" class="modal__link nav-color">Login with password</a>
          <a href="#" class="modal__link nav-color">Create an account</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style lang="scss"></style>
