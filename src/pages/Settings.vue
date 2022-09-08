<template>
  <section class="settings bg--grad">
    <div class="container settings__bg stg">
      <div class="stg__content">
        <div class="stg__change white-block">
          <div class="stg__title">Change password</div>
          <label class="stg__field form-field" for="email">
            <input
              class="form-field__input"
              type="text"
              name=""
              id="email"
              placeholder="Old password"
            />
            <input
              class="form-field__input"
              type="text"
              name=""
              id="email"
              placeholder="New password"
            />
            <input
              class="form-field__input"
              type="text"
              name=""
              id="email"
              placeholder="Confirm new password"
            />
          </label>
          <button class="stg__btn btn btn--grad pay__btn">Change password</button>
        </div>
        <div class="stg__verif white-block">
          <div class="stg__title">Verification</div>
          <div class="stg__danger">Email <strong>User@email.com</strong><br> is not verified</div>
          <button class="stg__btn btn btn--grad pay__btn">Send verification link</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Settings",
};
</script>

<style lang="scss"></style>
