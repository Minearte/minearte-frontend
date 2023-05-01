<template>
  <div class="contenedor">
    <div v-for="item in packageArray" class="caja" :key="item.id">
      <Package
        :img="item.img"
        :name="item.name"
        :description="item.description"
        :id="item.id"
        :price="item.price"
        autor="Minearte Network"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { packages } from "../../requests/interfaces/package";
import api from "../../ts/api";
import Package from "./Package.vue";

export default {
  components: {
    Package,
  },
  data: () => ({
    category: "",
    packagesID: [] as number[],
    packageArray: [] as packages[],
  }),
  mounted() {
    this.mount();
  },
  methods: {
    async mount() {
      this.category = this.$route.params.category as string;
      this.packageArray = [];
      this.getPackages();
    },
    async getPackages() {
      await api.get("store/category/" + this.category).then((res) => {
        this.packagesID = res.data.packages;
      });

      for (let i = 0; i < this.packagesID.length; i++) {
        await api.get("store/package/" + this.packagesID[i]).then((res) => {
          this.packageArray.push(res.data);
        });
      }
    },
  },
  watch: {
    $route() {
      this.mount();
    },
  },
};
</script>
<style scoped>

.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}

</style>
