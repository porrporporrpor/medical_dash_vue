<template>
  <div class="header_area">
    <div class="main-menu">
      <b-navbar toggleable="lg" type="light" variant="light" class="shadow fixed-top">
        <b-navbar-brand href="#">
          <router-link to="/">
            <font-awesome-icon icon="star-of-life" />KMITL
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/#banner">หน้าแรก</b-nav-item>
            <b-nav-item href="/#about">เกี่ยวกับ</b-nav-item>
            <b-nav-item href="/#calculator">โปรแกรมคำนวณ</b-nav-item>
          </b-navbar-nav>
         
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.header_area .main-menu .navbar .navbar-brand {
  padding: 0 2rem 0 5rem;
  color: #f16323;
  font-size: 1.7rem;
  font-weight: 500;
}

.header_area .main-menu .navbar {
  padding: 1rem 10rem;
}

@media only screen and (max-width: 1000px) {
  .header_area .main-menu .navbar .navbar-brand {
    padding: 0;
  }
  .header_area .main-menu .navbar {
    padding: 1rem 2rem;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: inherit;
}
</style>