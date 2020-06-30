<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="services">
      <div class="services-icon text-center py-4">
        <font-awesome-icon :icon="`${ icon }`" size="5x" />
      </div>
      <div class="card-body text-center">
        <h5 class="card-title text-uppercase font-roboto">{{ title }}</h5>
        <p class="card-text text-secondary">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ability",
  props: {
      icon: String,
      title: String,
      description: String,
  }
};
</script>

<style scoped>
.services-area .services-icon {
  color: #f16323;
}
</style>