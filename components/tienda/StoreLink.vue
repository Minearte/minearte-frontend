<script setup lang="ts">
const {t} = useI18n();
import {Icon} from "@iconify/vue";
</script>

<template>
  <NuxtLink
      class="w-full transition-all sm:w-auto focus:ring-4 text-white focus:outline-none rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-orange-400 hover:bg-orange-500 focus:ring-gray-700"
      :to="link">
    <Icon icon="tabler:package" class="w-5 h-5 mr-2"/>
    <div class="text-left">
      <div class="mb-1 text-xs">{{ t('store.goTo') }}</div>
      <div class="-mt-1 font-sans text-sm font-semibold">{{ name }}</div>
    </div>

  </NuxtLink>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    categoryID: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      link: "/tienda/c/" + this.categoryID + "/"
    }
  }
})
</script>