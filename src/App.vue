<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <section class="stars">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </section>
  <div class="content">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key:any="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data:() => ({
    active: 0
  })
})
</script>

<style scoped>
@import "./assets/css/stars.css";
</style>
