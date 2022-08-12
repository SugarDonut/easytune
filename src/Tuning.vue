<template>
  <section class="tuning background--grad tuning__bg">
    <div class="container">
      <div class="tuning__container">
        <div class="tuning__options option">
          <h1 class="tuning__title">Select options</h1>
        </div>
        <div class="tuning__choice choice">
          <h1 class="tuning__title">Your tuning</h1>
          <div class="choice__task task task__head">
            Task № 20220702.161558.4575
          </div>
          <div class="choice__descr">
            <div class="choice__left">
              <p class="left-name">Filename</p>
              <p class="left-name">Size</p>
              <p class="left-name">Software number</p>
              <p class="left-name">Software version</p>
              <p class="left-name">Software upgrade</p>
            </div>
            <div class="choice__right">
              <p class="right-name">BMW_9ad6Svt.bin</p>
              <p class="right-name">4.0 Mb (4194304 bytes)</p>
              <p class="right-name">N47020T1-F10N47TL</p>
              <p class="right-name">v.5</p>
              <p class="right-name">O_7BUJ-00000BAB-074</p>
            </div>
          </div>
          <div class="choice__stamp">
            <p>
              Use OBD Codes. Use factory DTC codes -
              <span>For Mercedes and BMW</span>
            </p>
          </div>
          <div class="choice__code">
            <p>Enter codes (e g 255F 23 F4)</p>
            <span>255F0001</span>
          </div>
          <div class="choice__task task task__bottom">
            <p>Found D5F D001</p>
            <span
              >DTC already removed: Following DTC will be removed: 255
              FD001</span
            >
          </div>
          <table class="choce__table table">
            <thead class="table__head">
              <tr class="table__row">
                <th class="table__column">
                  <label for="">
                    <input class="table__check" id="check1" type="checkbox" name="" />
                  </label>
                </th>
                <th class="table__column">N</th>
                <th class="table__column">ECU modification</th>
                <th class="table__column">Price</th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr class="table__row">
                <th class="table__column">
                  <label for="">
                    <input  class="table__check" type="checkbox" name="" id="" />
                  </label>
                </th>
                <th class="table__column">1</th>
                <th class="table__column">
                  <h3 class="table__title">tun</h3>
                  <p class="table__desc">Stage1</p>
                </th>
                <th class="table__column">$1 000</th>
              </tr>
               <tr class="table__row">
                <th class="table__column">
                  <label for="">
                    <input class="table__check" type="checkbox" name="" id="" />
                  </label>
                </th>
                <th class="table__column">1</th>
                <th class="table__column">
                  <h3 class="table__title">tun</h3>
                  <p class="table__desc">Stage1</p>
                </th>
                <th class="table__column">$1 000</th>
              </tr>
               <tr class="table__row">
                <th class="table__column">
                  <label for="">
                    <input class="table__check" type="checkbox" name="" id="" />
                  </label>
                </th>
                <th class="table__column">1</th>
                <th class="table__column">
                  <h3 class="table__title">tun</h3>
                  <p class="table__desc">Stage1</p>
                </th>
                <th class="table__column">$1 000</th>
              </tr>
               <tr class="table__row">
                <th class="table__column">
                  <label for="">
                    <input class="table__check" type="checkbox" name="" id="" />
                  </label>
                </th>
                <th class="table__column">1</th>
                <th class="table__column">
                  <h3 class="table__title">tun</h3>
                  <p class="table__desc">Stage1</p>
                </th>
                <th class="table__column">$1 000</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tuning",
};
</script>

<style lang="scss"></style>
