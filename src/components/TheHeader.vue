<template>
<div class="header_area">
 <div class="main-menu">
  <b-navbar toggleable="lg" type="light" variant="light" fixed>
    <b-navbar-brand href="#">
      <font-awesome-icon icon="star-of-life" />
      KMITL
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">หน้าแรก</b-nav-item>
        <b-nav-item href="#">เกี่ยวกับ</b-nav-item>
        <b-nav-item href="#">โปรแกรมคำนวณ</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</div>

</template>

<script>

export default {
  name: "TheHeader"
};
</script>

<style scoped>

/* Header */
.header_area .main-menu .navbar .navbar-brand {
  padding: 0 2rem 0 5rem;
  color: #f16323;
  font-size: 1.7rem;
  font-weight: 500;
}

.header_area .main-menu .navbar {
  padding: 1rem 10rem;
}

</style>