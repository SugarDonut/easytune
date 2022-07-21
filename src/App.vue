<template>
  <div id="app">
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
          <button class="btn btn-reset btn--ingradient">Login</button>
          <button class="btn btn-reset btn--outgradient">Registration</button>
          <p>log out</p>
          </div>

      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.header{
  padding: 20px 0;
  &__container {
    @include flex-sb
  }

  &--main{
    background: linear-gradient(180deg, #E9E9E9 -15.83%, #FFFFFF 93.18%);
  }
}


.nav{
  &__list{
    @include flex
  }

  &__item{
    &:not(:last-child){
      margin-right: 98px;
    }
  }

  &__link{
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: var(----color-shaft)
  }
}

.btns{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


  .btn{
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 12px 38px;
    width: 160px;
    border: solid 2px transparent;
    border-radius: 10px;
    background-image: linear-gradient(90deg, #4DADD8 18%, #81E9C0 100%);
    background-origin: border-box;
    

  &:not(:last-child){
    background-origin: border-box;
    margin-right: 23px;
  }


  &--ingradient{
    color: var(--color-white);
  }

  &--outgradient{
    color: var(--color-shaft);
    box-shadow: 2px 50px 1px #fff inset;
    
  }

}

}




</style>
