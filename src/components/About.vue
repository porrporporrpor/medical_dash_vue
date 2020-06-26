<template>
  <div>

<!--  ========================= Service Area ==========================  -->
    <section class="services-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center services-title">
            <h1 class="text-uppercase title-text">เกี่ยวกับ</h1>
            <hr />
          </div>
        </div>
        <div class="container services-list">
          <div class="row">
            <Ability icon="weight" title="BMI" description="คำนวณดัชนีมวลกาย" />
            <Ability icon="running" title="MMI" description="คำนวณดัชนีมวลกล้ามเนื้อ" />
            <Ability icon="poll-h" title="RESULT" description="แปรผลดัชนี" />
            <Ability icon="comment-medical" title="ADVICE" description="ให้คำแนะนำการปฏิบัติตน" />
          </div>
        </div>
      </div>
    </section>

<!--  ========================= About Area ==========================  -->
<section class="about-area" id="about">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="about-image">
            <img
              src="../assets/img/doctor_check.jpg"
              alt="About us"
              class="img-fluid d-flex align-items-center"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-12 about-title">
          <h2 class="pt-5 pl-5">โปรแกรมคำนวณ</h2>
          <hr />
          <div class="paragraph">
            <p class="para">
              โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อ ถูกสร้างเพื่อใช้สำหรับการแปลผลและให้คำแนะนำเบื้องต้นต่อบุคคลทั่วไปเด็กและผู้ใหญ่อายุมากกว่า 5 ปี
              ที่ทราบค่ามวลกล้ามเนื้อของตนเองภายหลังจากการตรวจวัดมวลกล้ามเนื้อด้วยเครื่องวัดองค์ประกอบร่างกาย ที่มีราคาถูก เพื่อการปรับใช้งานในบ้าน โรงเรียน
              สำหรับประชากรขนาดใหญ่ โปรแกรมจะคำนวณค่าดัชนีมวลกล้ามเนื้อ และแปลค่าดัชนีมวลกล้ามเนื้อร่วมกับค่าดัชนีมวลกาย
              <a href="">อ่านเพิ่มเติม</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import Ability from "../components/Ability.vue";
// import router from "vue-router"

export default {
  name: "About",
  components: {
    Ability,
    // router
  }
};
</script>

<style scoped>
.services-area {
  padding-top: 6rem;
}
/* About */
.about-area {
  padding: 5rem 10% 5rem 10%;
}

.about-area .para {
  font-weight: 300;
  font-size: 18px;
  padding: 2rem 0 0 10%;
}
</style>