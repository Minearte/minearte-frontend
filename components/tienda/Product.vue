<template>
  <div class="w-full max-w-sm border rounded-lg shadow bg-gray-950 border-gray-700">
    <div v-if="image">
      <img class="p-8 rounded-t-lg" :src="this.image" alt="product image" />
    </div>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl text-left mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
      </a>

      <div class="flex items-center justify-between mt-3">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ price }} €</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      required: false
    },
    id: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
})
</script>