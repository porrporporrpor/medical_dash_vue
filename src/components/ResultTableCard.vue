<template>
  <div class="row justify-content-between result-area">
    <div class="col-md-12 card calculator-result">
      <h4>{{ title }}</h4>
      <br />
      <h1 class="data-focus">{{ result }}%</h1>
      <div v-if="percentile != ''">
        <h4>ค่าระหว่าง {{ percentile }}</h4>
        <p v-if="interpret_result != None">( {{ interpret_result }} )</p>

        <p class="text-left">ค่าปกติเปอร์เซ็นไทล์</p>
        <div style="overflow-x:auto">
          <table class="table">
            <thead>
              <th scope="col">อายุ</th>
              <th scope="col">1th</th>
              <th scope="col">3th</th>
              <th scope="col">5th</th>
              <th scope="col">15th</th>
              <th scope="col">25th</th>
              <th scope="col">50th</th>
              <th scope="col">75th</th>
              <th scope="col">85th</th>
              <th scope="col">95th</th>
              <th scope="col">97th</th>
              <th scope="col">99th</th>
            </thead>
            <tbody>
              <td>loop muscle row</td>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <p v-if="interpret_result">({{ interpret_result }})</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultTableCard",
  props: {
    title: String,
    result: String,
    percentile: String,
    interpret_result: String
  }
};
</script>

<style scoped>
.calculator-result {
  padding: 1rem;
  background-color: #f1f3f6;
  text-align: center;
}
</style>