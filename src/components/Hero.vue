<template>
  <div class="parent">
    <div class="div1 d-flex flex-column justify-content-center">
      <h1>{{ lang.hero?.title }}</h1>
      <p>{{ lang.hero?.subtitle }} </p>
      <vs-button :active="active == 0" @click="handleCopyIP()">
        <i class='bx bx-network-chart'></i> {{ lang.hero?.copyIp }}
      </vs-button>
    </div>
    <div class="div2 hero-img aos-init aos-animate">
      <img src="/src/assets/logo.png" width="546" height="546" alt="" class="img-fluid">
    </div>
  </div>
</template>

<script lang="ts">
import { es } from '../lang/defaults';
import Notiflix from 'notiflix';

export default {
  data: () => ({
    lang: es,
    active: 0,
    serverCount: 0,
  }),
  methods: {
    async handleCopyIP() {
      await navigator.clipboard.writeText('mc.minearte.net');
      Notiflix.Report.success('¡Éxito!', '¡IP copiada al portapapeles!', 'Ok');
    },
  }
}
</script>

<style scoped>
@import url('../assets/css/hero.css');
</style>
