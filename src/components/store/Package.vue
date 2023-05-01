<template>
  <div class="card">
    <div class="infos">
      <div class="image">
        <img :src="img" alt="image"  v-if="img"/>
        <img src="/src/assets/logo.png" v-else alt="">
      </div>
      <div class="info">
        <div>
          <p class="name">
            {{ name }}
          </p>
        </div>
        <div class="stats">
          <p class="flex flex-col">
            Precio
            <span class="state-value">
              {{ price }}$
            </span>
          </p>
          <p class="flex flex-col">
            Descripcion
            <span class="state-value">
              <span class="b-pointer" @click="showDescription()">Ver</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <button @click="handleBuy()" class="request" type="button">Comprar</button>
  </div>
</template>

<script lang="ts">
import { Confirm, Loading, Report } from "notiflix";
import api from "../../ts/api";
import Sweatalert from "sweetalert2";

export default {
  props: {
    img: {
      type: String,
      default: "",
      required: true,
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    id: {
      type: [String, Number],
      default: null,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    autor: {
      type: String,
      default: "",
    },
  },
  methods: {
    async handleBuy() {
      await Confirm.prompt(
        "¿Cual es tu nick de Minecrat?",
        "Ingresa tu nick de Minecraft",
        "",
        "Comprar",
        "Cancelar",
        (username) => {
          if (username === "") {
            Report.failure(
              "Ingresa tu nick de Minecraft",
              "No puedes dejar el campo vacio",
              "Ok"
            );
          } else {
            Loading.dots("Conectando con Tebex...");
						api.post("store/checkout", {
              packageID: "5412971",
							username: username,
            }).then((res) => {
							Loading.remove();
              window.open(res.data.url, "_blank");
							Report.success(
									"Redirigido a Tebex",
									"",
									"Ok"
								);
              console.log(res.data);
              
						}).catch((err) => {
							Loading.remove();
							Report.failure(
									"Error al comprar",
									"Ha ocurrido un error al comprar",
									"Ok"
								);
							console.log(err);
						});
          }
        },
        () => {}
      );
    },

    async showDescription(){
      await Sweatalert.fire(this.description)
    }
  },
};
</script>

<style scoped>
.card {
  max-width: 320px;
  border-radius: 1rem;
  background-color: var(--color-primary);
  padding: 1.5rem;
  color: var(--text-secondary);
}

.infos {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-gap: 1rem;
  gap: 1rem;
}

.image {
  height: 7rem;
  width: 7rem;
  border-radius: 0.5rem;
  background-color: rgb(189, 163, 21);
  background: linear-gradient(
    to bottom right,
    rgb(207, 177, 8),
    rgb(240, 238, 128)
  );
}

img {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
}

.info {
  height: 7rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
}

.function {
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

.stats {
  width: 90%;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(0, 0, 0, 1);
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4px;
}

.state-value {
  font-weight: 700;
  color: rgb(118, 36, 194);
}

.request {
  margin-top: 2rem;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: all 0.3s ease;
}

.request:hover {
  background-color: rgb(118, 36, 194);
  color: #fff;
}

.b-pointer{
  cursor: pointer;
}
</style>