<template>
  <section class="history background--grad tuning__bg">
    <div class="container">
      <div class="history__container">
        <div class="history__block white-block">
          <div class="history__title">History for July 2020</div>
          <div class="history__search">
            <label class="search-form" for="">
              <input class="search-form__input" type="search" placeholder="Search by title, task" />
              <i class="search-form__icon"></i>
            </label>
            <div class="history__list tag list-reset">
              <a class="tag__link" href="#">July</a>
              <a class="tag__link" href="#">June</a>
              <a class="tag__link" href="#">May</a>
              <a class="tag__link" href="#">April</a>
              <a class="tag__link" href="#">March</a>
              <a class="tag__link" href="#">February</a>
            </div>
            <label class="history__label label-select">
              <input
                class="label-select__input"
                type="text"
                placeholder="Choose month"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
