<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    TheFooter
  },
  created() {
    document.title = "โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อ";
  }
};
</script>

<style>
@import "./css/custom.css";

#app {
  font-family: "Mitr";
}
</style>
