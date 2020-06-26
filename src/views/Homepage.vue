<template>
  <div>
    <Banner />
    <About />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";

export default {
  name: "Homepage",
  components: {
    Banner,
    About
  }
};
</script>

<style scoped>
</style>