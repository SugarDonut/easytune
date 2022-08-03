<template>
  <section class="modal">
    <div class="modal__container">
      <button class="btn-reset modal__close"></button>
      <h1 class="modal__title">Register</h1>
      <p class="modal__subtitle">
        Enter your e-mail and we will send you<br> a one-time password
      </p>
      <label class="modal__field form-field"  for="">
        <input class="form-field__input" type="text" name="" id="" placeholder="E-mail">
      </label>
       <button class="modal__btn btn btn-reset btn--main btns__btn--ingradient">
            Register
          </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style lang="scss"></style>
