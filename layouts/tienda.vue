<script lang="ts" setup>
import StoreLink from "~/components/tienda/StoreLink.vue";

const {t} = useI18n();
</script>

<template>
  <div class="xl:mx-52 lg:mx-32 md:mx-16 sm:mx-10 mx-4 mt-6">
    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-800 dark:text-gray-400 dark:bg-gray-900"
          id="defaultTab">

        <NuxtLink to="/tienda" id="about-tab" role="tab" aria-controls="about" aria-selected="true"
                  class="inline-block p-4 rounded-tl-lg bg-gray-900 hover:bg-gray-700 text-blue-500">{{ t('store.nav.home') }}
        </NuxtLink>

        <StoreLink v-for="category in categories" :category-i-d="category.id" :name="category.name" />

      </ul>
      <div id="defaultTabContent">
        <slot/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ICategories from "~/interfaces/ICategories";
import Constants from "~/Constants";
import Axios from "axios";
export default defineComponent({
  data() {
    return {
      categories: [] as ICategories[],
    }
  },
  mounted() {
    this.mounted();
  },
  methods: {
    async mounted() {
      this.categories = [];
      Axios.get(Constants.API_URL_PROD + 'store/categories').then((response) => {
        this.categories = response.data;
      });
    },
  },
});
</script>
