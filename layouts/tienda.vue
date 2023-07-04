<script lang="ts" setup>
import StoreLink from "~/components/tienda/StoreLink.vue";

const {t} = useI18n();
</script>

<template>
  <div class="xl:mx-36 lg:mx-24 md:mx-12 sm:mx-6 mx-6 blur-white mt-6">
    <div
        class="w-full p-4 text-center border rounded-lg shadow sm:p-8 border-gray-900">
        <slot />
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import ICategories from "~/interfaces/ICategories";
import Constants from "~/Constants";
import Axios from "axios";
import Notiflix from 'notiflix'

const load = Notiflix.Loading;

export default defineComponent({
  data() {
    return {
      categories: [] as ICategories[],
    }
  },
  mounted() {
    this.mounted().finally(() => {
      load.remove()
    })
  },
  methods: {
    async mounted() {
      load.init({
        svgColor: '#fc683f',
      })
      load.dots();
      this.categories = [];
      await Axios.get(Constants.API_URL_PROD + 'store/categories').then((response) => {
        this.categories = response.data;
      });
    },
  },
});
</script>
