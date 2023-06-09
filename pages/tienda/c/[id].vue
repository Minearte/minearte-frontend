<script setup lang="ts">
const {t} = useI18n();

useHead({
  title: t("store.meta.title"),
  meta: [
    {
      name: "description",
      content: t("store.meta.description"),
    },
    {
      name: "keywords",
      content: t("store.meta.keywords"),
    },
  ],
});
</script>

<template>
  <NuxtLayout name="tienda">
    <h1 class="text-white text-4xl mb-6">{{ name }}</h1>
    <div class="mb-2 grid auto-row-max">
      <Product v-for="p in packages" :id="p.id.toString()" :title="p.name" :image="p.image" :price="p.price.toString()" :description="p.description"/>
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
import Notiflix from 'notiflix'

const load = Notiflix.Loading;

export default defineComponent({
  components: {Product},
  data() {
    return {
      id: this.$route.params.id,
      categories: [] as ICategories[],
      category: {} as ICategories,
      packages: [] as IPackage[],
      name: "",
    }
  },
  methods: {
    async loadPackages() {
      load.init({
        svgColor: '#fc683f',
      })

      load.dots({

      })

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
        this.category = category;

        this.name = category.name;

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
    this.loadPackages().finally(() => {
      this.packages = this.packages.sort((a, b) => {
        const aIndex = this.category.packages.indexOf(a.id.toString());
        const bIndex = this.category.packages.indexOf(b.id.toString());

        return aIndex - bIndex;
      })

      load.remove()
    });
  }
})
</script>