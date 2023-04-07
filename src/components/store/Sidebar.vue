<template>
  <div class="card-contaier">
    <div class="card-header">
      <h4>Compras Recientes</h4>
    </div>
    <div class="content">
      <div v-for="item in sales">
        <PlayerRow :nickname="item.player" />
      </div>
    </div>
  </div>

  <div class="card-contaier">
    <div class="card-header">
      <h4>Información</h4>
    </div>
    <div class="content">
      <div class="panel-body">
        <p></p>
        <p>
          Minearte Network no esta afiliada de ninguna manera a Minecraft,
          Mojang AB o Microsoft Corporation de ninguna manera.&nbsp;
        </p>
        <p>
          Ninguna compra realizada podrá ser reembolsada, debido a que se
          considera una donación que se invierte directamente en la mejora
          continua del servidor.
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import api from "../../ts/api";
import { sale } from "../../ts/interfaces/store";
import PlayerRow from "./PlayerRow.vue";
export default {
  components: {
    PlayerRow,
  },
  data: () => ({
    sales: [] as sale[],
  }),
  mounted() {
    this.loadRecentSales();
  },
  methods: {
    async loadRecentSales() {
      await api
        .get("/store/sales")
        .then((res) => {
          this.sales = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/store/card.css";
</style>
