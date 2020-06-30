<template>
  <!--  ======================= Start Main Area ================================ -->
  <main class="site-main">
    <!--  ========================= Calculator Area ==========================  -->
    <section class="calculator-area" ref="calculator">
      <div class="container-fluid">
        <div class="row">
          <div class="card shadow calculator-box">
            <ResultTableCard
              title="เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว"
              result="12.12"
              percentile="12th-13th "
            />
            <br />

            <ResultTableCard
              title="MMI : ดัชนีมวลกล้ามเนื้อ"
              result="44"
              percentile="12th-15th"
              interpret_result="กล้ามเนื้อปกติ"
            />
            <br />

            <ResultTableCard
              title="BMI : ดัชนีมวลกาย"
              result="44"
              percentile="12th-15th"
              interpret_result="กล้ามเนื้อปกติ"
            />
            <br />

            <div class="row justify-content-between result-area" id="cal_result">
              <div class="col-lg-6 card calculator-result">
                <h4>คำแนะนำ</h4>
                <br />
                <div class="text-left">
                  <p>
                    <i class="fas fa-running"></i>
                    การแปรผลดัชนีมวลกล้ามเนื้อ : result.mmi_result
                  </p>
                  <p>
                    <i class="fas fa-weight"></i>
                    การแปรผลดัชนีมวลกาย : result.bmi_result
                  </p>
                  <p>
                    <i class="fas fa-lightbulb"></i>
                    การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : result.mmi_result result.bmi_result
                  </p>
                  <p>
                    <i class="fas fa-user-md"></i>
                    แพทย์ : result.bmi_mmi_result.doctor
                  </p>
                  <p>
                    <i class="fas fa-utensils"></i>
                    อาหาร : result.bmi_mmi_result.food
                  </p>
                  <p>
                    <i class="fas fa-running"></i>
                    กิจกรรมทางกาย : result.bmi_mmi_result.activity
                  </p>
                  <p>
                    <i class="fas fa-dumbbell"></i>
                    การออกกำลังกาย : result.bmi_mmi_result.excercise
                  </p>
                </div>
              </div>
              <div class="col-lg-6 card calculator-result">
                <h4>สรุปผล</h4>
                <br />
                <div class="text-left">
                  <p>
                    <i class="fas fa-user-friends"></i>
                    เพศ : result.gender
                  </p>
                  <p>
                    <i class="fas fa-user-friends"></i>
                    อายุ : result.age ปี
                  </p>
                  <p>
                    <i class="fas fa-user-friends"></i>
                    น้ำหนัก : result.weight กิโลกรัม
                  </p>
                  <p>
                    <i class="fas fa-user-friends"></i>
                    ส่วนสูง : result.height เซนติเมตร
                  </p>
                  <p>
                    <i class="fas fa-running"></i>
                    น้ำหนักมวลกล้ามเนื้อ : result.muscle กิโลกรัม
                  </p>
                  <p>
                    <i class="fas fa-running"></i>
                    เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว : result.muscle_weight | floatformat:2 เปอร์เซ็น
                  </p>
                  <p>
                    <i class="fas fa-running"></i>
                    ดัชนีมวลกล้ามเนื้อ : result.mmi | floatformat:2
                  </p>
                  <p>
                    <i class="fas fa-running"></i>
                    การแปรผลดัชนีมวลกล้ามเนื้อ : result.mmi_result
                  </p>
                  <p>
                    <i class="fas fa-weight"></i>
                    ดัชนีมวลกาย : result.bmi | floatformat:2
                  </p>
                  <p>
                    <i class="fas fa-weight"></i>
                    การแปรผลดัชนีมวลกาย : result.bmi_result
                  </p>
                  <p>
                    <i class="fas fa-lightbulb"></i>
                    การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : result.mmi_result result.bmi_result
                  </p>
                  <p>
                    <i class="fas fa-user-md"></i>
                    แพทย์ : result.bmi_mmi_result.doctor
                  </p>
                  <p>
                    <i class="fas fa-utensils"></i>
                    อาหาร : result.bmi_mmi_result.food
                  </p>
                  <p>
                    <i class="fas fa-running"></i>
                    กิจกรรมทางกาย : result.bmi_mmi_result.activity
                  </p>
                  <p>
                    <i class="fas fa-dumbbell"></i>
                    การออกกำลังกาย : result.bmi_mmi_result.excercise
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

    <!-- SOURCE -->
    <div ref="printMe">
      <h1>Print me!</h1>
    </div>
    <!-- OUTPUT -->
    <img :src="output" />
  </main>
  <!--  ======================= End Main Area ================================ -->
</template>

<script>
import ResultTableCard from "../components/ResultTableCard.vue";
import html2canvas from "html2canvas";

export default {
  name: "ResultPage",
  components: {
    ResultTableCard
  },
  data() {
    return {
      output: null
    };
  },
  methods: {
    createImage: async function() {
      if (screen.width >= 750) {
        const el = this.$refs.calculator
        console.log(el)
        // html2canvas(el, {
        //   onrendered: canvas => {
        //     const ctx = canvas.getContext("2d");
        //     ctx.webkitImageSmoothingEnabled = true;
        //     ctx.mozImageSmoothingEnabled = true;
        //     ctx.imageSmoothingEnabled = true;
        //   }
        // }).then(canvas => {
        //     console.log(canvas)
        //     document.body.appendChild(canvas);
        //     canvas.toDataURL('image/jpg'), 'FastFest.jpg'
        // });
        this.output = (await html2canvas(el)).toDataURL();
        // document.querySelectorAll(".calculator-result")[0].style.textAlign =
        //   "left";
        // document.querySelectorAll(".calculator-result")[1].style.textAlign =
        //   "left";
        // document.querySelectorAll(".calculator-result")[2].style.textAlign =
        //   "left";
        // document.querySelectorAll(".calculator-result")[3].style.textAlign =
        //   "left";
        // document.querySelectorAll(".calculator-result")[4].style.textAlign =
        //   "left";

        // position it relatively, just below the fold..
        // myOffscreenEl.style.position = "relative";
        // myOffscreenEl.style.top = 1200 + "vh";

        // html2canvas(myOffscreenEl, {
        //   onrendered: function(canvas) {
        //     var ctx = canvas.getContext("2d");
        //     ctx.webkitImageSmoothingEnabled = true;
        //     ctx.mozImageSmoothingEnabled = true;
        //     ctx.imageSmoothingEnabled = true;
        //     // restore the old offscreen position
        //     myOffscreenEl.style.top = 0;
        //     var a = document.createElement("a");
        //     // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        //     console.log(canvas)
        //     a.href = canvas
        //       .toDataURL("image/jpeg")
        //       .replace("image/jpeg", "image/octet-stream");
        //     a.download = "result.jpg";
        //     a.click();

        //     // document.querySelectorAll(".calculator-result")[0].style.textAlign =
        //     //   "center";
        //     // document.querySelectorAll(".calculator-result")[1].style.textAlign =
        //     //   "center";
        //     // document.querySelectorAll(".calculator-result")[2].style.textAlign =
        //     //   "center";
        //     // document.querySelectorAll(".calculator-result")[3].style.textAlign =
        //     //   "center";
        //     // document.querySelectorAll(".calculator-result")[4].style.textAlign =
        //     //   "center";
        //   }
        // });
      } else {
        window.print();
      }
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

.calculator-area .calculator-result {
  padding: 1rem;
  background-color: #f1f3f6;
  text-align: center;
}
</style>