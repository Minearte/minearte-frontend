<template>
  <div class="hero row">
    <div class="col-lg-6 d-flex flex-column justify-content-center">
      <h1>{{ lang.hero?.title }}</h1>
      <p>{{ lang.hero?.subtitle }}</p>
    </div>
    <div class="col-lg-6 hero-img aos-init aos-animate">
      <img src="/src/assets/logo.png" width="546" height="546" alt="" class="img-fluid">
    </div>

  </div>
</template>

<script lang="ts">
import { es } from '../lang/defaults';
export default {
  data: () => ({
    lang: es,
  }),
};
</script>

<style scoped>
.hero {
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.hero h1 {
  font-size: 32px;
  font-weight: 200;
  margin: 0;
  padding: 0;
}

.hero p {
  font-size: 25px;
  font-weight: 200;
  padding: 0;
}
</style>
