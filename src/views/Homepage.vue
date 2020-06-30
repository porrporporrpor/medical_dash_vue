<template>
  <div>
    <Banner />
    <About />
    <Calculator />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import Calculator from "../components/Calculator.vue";

export default {
  name: "Homepage",
  components: {
    Banner,
    About,
    Calculator,
  },
  
};
</script>

<style scoped>
</style>