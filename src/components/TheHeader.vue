<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
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

</template>

<script>

export default {
  name: "TheHeader"
};
</script>