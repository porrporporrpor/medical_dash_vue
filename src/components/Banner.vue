<template>
  <section class="site-banner" id="banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 text-center site-title">
          <h1 class="title-text">BMI & MMI Calculator</h1>
          <p class="title-text">โปรแกรมคำนวณดัชนีมวลกายและกล้ามเนื้อสำหรับเด็กและผู้ใหญ่</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.site-banner {
  background: url("../assets/img/banner.jpeg") no-repeat center 0;
  background-size: cover;
  height: 100vh;
  color: whitesmoke;
}

.site-banner .site-title h1 {
  position: static;
  padding-top: 45vh;
  font-weight: 500;
  font-size: 3rem;
  color: whitesmoke;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.51);
}

.site-banner .site-title p {
  font-weight: 400;
  font-size: 1.8rem;
  color: whitesmoke;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.51);
}
</style>