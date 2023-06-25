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

onMounted(() => {
  document.documentElement.classList.add('dark');
  initFlowbite();
})

</script>
