<template>
  <div>
    <LoadingSpinner />
    <nuxt-layout>
      <Background>
        <NavBar />
        <NuxtLoadingIndicator />
        <HeaderTriplezone />
        <NuxtPage />
      </Background>
    </nuxt-layout>
  </div>
</template>

<style>
.app {
  height: 100vh;
}
</style>
<script setup lang="ts">
import NavBar from "~/components/nav/NavBar.vue";
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { Init } from "~/notifications/Notiflix";

onMounted(() => {
  document.documentElement.classList.add('dark');
  initFlowbite();
  Init();
})

</script>

<style>
@import 'assets/css/dark.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
