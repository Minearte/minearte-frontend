<template>
  <NuxtLayout name="tienda">
    <h1 class="text-white text-4xl mb-6">{{ categories[0].name }}</h1>
    <div class="mb-2 grid auto-row-max">
      <Product v-for="p in packages" :id="p.id.toString()" :title="p.name" :image="p.image" :price="p.price.toString()"/>
    </div>
  </NuxtLayout>
</template>

<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}
</style>

<script lang="ts">
import {defineComponent} from "vue";
import ICategories from "~/interfaces/ICategories";
import IPackage from "~/interfaces/IPackage";
import Axios from "axios";
import Constants from "~/Constants";
import Product from "~/components/tienda/Product.vue";

export default defineComponent({
  components: {Product},
  data() {
    return {
      id: this.$route.params.id,
      categories: [] as ICategories[],
      packages: [] as IPackage[]
    }
  },
  methods: {
    async loadPackages() {
      this.categories = [];
      this.packages = [];

      await Axios.get(Constants.API_URL_PROD + 'store/categories').then((response) => {
        this.categories = response.data;
      });

      this.categories.forEach((category, index) => {
        if (category.id.toString() != this.id) {
          console.log(category.id + "!=" + this.id)
          return;
        }

        category.packages.forEach((p, i) => {
          Axios.get(Constants.API_URL_PROD + 'store/package/'+ p).then((response) => {
            try {
              this.packages.push(response.data as IPackage)
            } catch (e) {
              console.log(e)
            }
          })
        })

      })
    }
  },
  mounted() {
    this.loadPackages()
  }
})
</script>