<template>
  <section class="history bg--grad tuning__bg">
    <div class="container">
      <div class="history__container">
        <div class="history__block white-block">
          <div class="history__title">History for July 2020</div>
          <div class="history__search">
            <label class="search-form" for="">
              <input
                class="search-form__input"
                type="search"
                placeholder="Search by title, task"
              />
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
          <table class="histroy__table table-history">
            <thead class="table-history__head">
              <tr class="table-history__row">
                <th class="table-history__column">Type</th>
                <th class="table-history__column">Task</th>
                <th class="table-history__column">Title</th>
                <th class="table-history__column">Sum</th>
                <th class="table-history__column">Date</th>
                <th class="table-history__column"></th>
                <th class="table-history__column"></th>
              </tr>
            </thead>
            <tbody class="table-history__body">
              <tr class="table-history__row">
                <th class="table-history__column">
                  <img src="../img/wrong.svg" alt="" />
                </th>
                <th class="table-history__column">20200232.213557.8965</th>
                <th class="table-history__column">
                  BMW_5er_F10-F11-F18_Bosch_EDC17CP45_O_7BUJ-00000BAB-074-517690_
                </th>
                <th class="table-history__column">$100</th>
                <th class="table-history__column">Mar 23, 2020</th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--grad">Download</button>
                </th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--danger">remove dtc</button>
                </th>
              </tr>
              <tr class="table-history__row">
                <th class="table-history__column">
                  <img src="../img/chip.svg" alt="" />
                </th>
                <th class="table-history__column">20200232.213557.8965</th>
                <th class="table-history__column">
                  BMW_5er_F10-F11-F18_Bosch_EDC17CP45_O_7BUJ-00000BAB-074-517690_
                </th>
                <th class="table-history__column">$100</th>
                <th class="table-history__column">Mar 23, 2020</th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--grad">Download</button>
                </th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--danger">remove dtc</button>
                </th>
              </tr>
                            <tr class="table-history__row">
                <th class="table-history__column">
                  <img src="../img/chip.svg" alt="" />
                </th>
                <th class="table-history__column">20200232.213557.8965</th>
                <th class="table-history__column">
                  BMW_5er_F10-F11-F18_Bosch_EDC17CP45_O_7BUJ-00000BAB-074-517690_
                </th>
                <th class="table-history__column">$100</th>
                <th class="table-history__column">Mar 23, 2020</th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--grad">Download</button>
                </th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--danger">remove dtc</button>
                </th>
              </tr>
                            <tr class="table-history__row">
                <th class="table-history__column">
                  <img src="../img/chip.svg" alt="" />
                </th>
                <th class="table-history__column">20200232.213557.8965</th>
                <th class="table-history__column">
                  BMW_5er_F10-F11-F18_Bosch_EDC17CP45_O_7BUJ-00000BAB-074-517690_
                </th>
                <th class="table-history__column">$100</th>
                <th class="table-history__column">Mar 23, 2020</th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--grad">Download</button>
                </th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--danger">remove dtc</button>
                </th>
              </tr>
                            <tr class="table-history__row">
                <th class="table-history__column">
                  <img src="../img/chip.svg" alt="" />
                </th>
                <th class="table-history__column">20200232.213557.8965</th>
                <th class="table-history__column">
                  BMW_5er_F10-F11-F18_Bosch_EDC17CP45_O_7BUJ-00000BAB-074-517690_
                </th>
                <th class="table-history__column">$100</th>
                <th class="table-history__column">Mar 23, 2020</th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--grad">Download</button>
                </th>
                <th class="table-history__column">
                  <button class="btn-reset btn-small btn-small--danger">remove dtc</button>
                </th>
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
  name: "History"
};
</script>

<style lang="scss"></style>
