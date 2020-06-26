<template>
  <div id="app">
    <TheHeader />
    <Homepage />
    <TheFooter />
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
</style>
