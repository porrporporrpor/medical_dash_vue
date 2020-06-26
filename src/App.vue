<template>
  <div id="app">
    <TheHeader />
    <div clas="site-main">
      <Homepage/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import Homepage from './views/Homepage.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Homepage,
    TheFooter,
  }
}
</script>

<style>
@import './css/custom.css';

#app {
font-family: 'Mitr';
}
</style>
