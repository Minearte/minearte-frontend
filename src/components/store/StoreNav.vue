<template>
  <div class="nav">
    <div v-for="item in categories" :key="item.id">
      <StoreNavButton :packageName="item.name" :packageID="item.id" />
    </div>
  </div>
</template>
<script lang="ts">
import StoreNavButton from "./StoreNavButton.vue";
import { category } from "../../ts/interfaces/store";
import api from "../../ts/api";

export default {
  components: {
     StoreNavButton 
  },
  data() {
    return {
      categories: [] as category[],
    };
  },
  methods : {
    async getCategories() {
      await api
        .get("/store/categories")
        .then((res) => {
          this.categories = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCategories();
  }, 
};
</script>

<style scoped>
.nav {
  padding: 10px;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.56);
  height: 52px;
  width: 100vh;
}

/**
Center the div horizontally
*/
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  /** Haz que el contenido que sobre no se vaya abajo si no que se quuede en la misma linea */
  flex-wrap: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav * {
  margin: 10px;
}
</style>
