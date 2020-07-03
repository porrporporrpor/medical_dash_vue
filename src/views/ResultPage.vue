<template>
  <!--  ======================= Start Main Area ================================ -->
  <main class="site-main">
    <!--  ========================= Calculator Area ==========================  -->
    <section class="calculator-area">
      <div class="container-fluid" ref="calculator">
        <div class="row">
          <div class="card shadow calculator-box">
            <ResultTableCard
              title="เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว"
              :result="result.muscle_weight"
              :percentile="result.muscle_weight_percentile"
              :df="result.muscle_selected_df"
            />
            <br />
            <ResultTableCard
              title="MMI : ดัชนีมวลกล้ามเนื้อ"
              :result="result.mmi"
              :percentile="result.mmi_percentile"
              :df="result.mmi_selected_df"
              :interpret_result="result.mmi_result"
            />
            <br />

            <ResultTableCard
              title="BMI : ดัชนีมวลกาย"
              :result="result.bmi"
              :percentile="result.bmi_percentile"
              :df="result.bmi_selected_df"
              :interpret_result="result.bmi_result"
            />
            <br />

            <div class="row justify-content-between result-area" id="cal_result">
              <div class="col-lg-6 card calculator-result">
                <h4>คำแนะนำ</h4>
                <br />
                <div class="text-left">
                  <p>
                    <font-awesome-icon icon="running" />
                    การแปรผลดัชนีมวลกล้ามเนื้อ : {{ result.mmi_result }}
                  </p>
                  <p>
                    <font-awesome-icon icon="weight" />
                    การแปรผลดัชนีมวลกาย : {{ result.bmi_result }}
                  </p>
                  <p>
                    <font-awesome-icon icon="lightbulb" />
                    การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : {{ result.mmi_result }} {{ result.bmi_result }}
                  </p>
                  <p>
                    <font-awesome-icon icon="user-md" />
                    แพทย์ : {{ result.doctor }}
                  </p>
                  <p>
                    <font-awesome-icon icon="utensils" />
                    อาหาร : {{ result.food }}
                  </p>
                  <p>
                    <font-awesome-icon icon="running" />
                    กิจกรรมทางกาย : {{ result.activity }}
                  </p>
                  <p>
                    <font-awesome-icon icon="dumbbell" />
                    การออกกำลังกาย : {{ result.excercise }}
                  </p>
                </div>
              </div>
              <div class="col-lg-6 card calculator-result">
                <h4>สรุปผล</h4>
                <br />
                <div class="text-left">
                  <p>
                    <font-awesome-icon icon="user-friends" />
                    เพศ : {{ result.gender }}
                  </p>
                  <p>
                    <font-awesome-icon icon="user-friends" />
                    อายุ : {{ result.age }} ปี
                  </p>
                  <p>
                    <font-awesome-icon icon="user-friends" />
                    น้ำหนัก : {{ result.weight }} กิโลกรัม
                  </p>
                  <p>
                    <font-awesome-icon icon="user-friends" />
                    ส่วนสูง : {{ result.height }} เซนติเมตร
                  </p>
                  <p>
                    <font-awesome-icon icon="running" />
                    น้ำหนักมวลกล้ามเนื้อ : {{ result.muscle }} กิโลกรัม
                  </p>
                  <p>
                    <font-awesome-icon icon="running" />
                    เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว : {{ result.muscle_weight }} เปอร์เซ็น
                  </p>
                  <p>
                    <font-awesome-icon icon="running" />
                    ดัชนีมวลกล้ามเนื้อ : {{ result.mmi }}
                  </p>
                  <p>
                    <font-awesome-icon icon="running" />
                    การแปรผลดัชนีมวลกล้ามเนื้อ : {{ result.mmi_result }}
                  </p>
                  <p>
                    <font-awesome-icon icon="weight" />
                    ดัชนีมวลกาย : {{ result.bmi }}
                  </p>
                  <p>
                    <font-awesome-icon icon="weight" />
                    การแปรผลดัชนีมวลกาย : {{ result.bmi_result }}
                  </p>
                  <p>
                    <font-awesome-icon icon="lightbulb" />
                    การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย :{{ result.mmi_result }} {{ result.bmi_result }}
                  </p>
                  <p>
                    <font-awesome-icon icon="user-md" />
                    แพทย์ : {{ result.doctor }}
                  </p>
                  <p>
                    <font-awesome-icon icon="utensils" />
                    อาหาร : {{ result.food }}
                  </p>
                  <p>
                    <font-awesome-icon icon="running" />
                    กิจกรรมทางกาย : {{ result.activity }}
                  </p>
                  <p>
                    <font-awesome-icon icon="dumbbell" />
                    การออกกำลังกาย : {{ result.excercise }}
                  </p>
                </div>
              </div>
            </div>
            <br />
            <b-button block variant="primary" @click="createImage()">บันทึกผล</b-button>
            <div class="pt-3">
              * อ่านเพิ่มเติมเกี่ยวกับ
              <router-link
                to="/detail"
              >โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อสำหรับเด็กและผู้ใหญ่</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  ========================= End Calculator Area ==========================  -->
  </main>
  <!--  ======================= End Main Area ================================ -->
</template>

<script>
import ResultTableCard from "../components/ResultTableCard.vue";
import domtoimage from "dom-to-image";
export default {
  name: "ResultPage",
  components: {
    ResultTableCard
  },
  data() {
    return {
      result: null
    };
  },
  beforeMount() {
    if (localStorage.getItem("calculateResult")) {
      this.result = JSON.parse(localStorage.getItem("calculateResult"));
      this.result.muscle_weight = this.result.muscle_weight.toFixed(2);
      this.result.mmi = this.result.mmi.toFixed(2);
      this.result.bmi = this.result.bmi.toFixed(2);
      console.log(this.result);
        localStorage.removeItem("calculateResult");
    } else {
      this.$router.push("/#calculator");
    }
  },
  methods: {
    createImage() {
      const el = this.$refs.calculator;
        domtoimage.toBlob(el).then(function(blob) {
          const FileSaver = require("file-saver");
          FileSaver.saveAs(blob, "result.png");
        });
    }
  }
};
</script>

<style scoped>
.calculator-area {
  padding: 5rem 0;
  background-color: #f4a100;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.calculator-area .calculator-box {
  width: 100%;
  margin: 0 8%;
  padding: 4% 10%;
}

</style>