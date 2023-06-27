<script setup lang="ts">

import StoreLink from "~/components/tienda/StoreLink.vue";

const { t } = useI18n();
</script>

<template>
  <div class="xl:mx-36 lg:mx-24 md:mx-12 sm:mx-6 mx-6 blur-white mt-6">
    <div
        class="w-full p-4 text-center border rounded-lg shadow sm:p-8 border-gray-900">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{{ t('store.index.header') }}</h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{ t('store.index.subheader') }}</p>
      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <StoreLink v-for="category in categories" :key="category.id" :name="category.name"
                   :categoryID="category.id"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ICategories from "~/interfaces/ICategories";
import Constants from "~/Constants";
export default defineComponent({
  data: () => ({
    categories: [] as ICategories[],
  }),
  methods: {
    async loadCategories() {
      const response = await fetch(Constants.API_URL_PROD + "/store/categories");

      this.categories = await response.json();
    },
  },
  mounted() {
    this.loadCategories();
  },
});

</script>