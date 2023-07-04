<script setup lang="ts">
const {t} = useI18n();

const tIln = computed(() => {
  return t('store.category.iln')
})
</script>

<template>
  <div class="w-full max-w-sm border rounded-lg shadow bg-gray-950 border-gray-700">
    <div v-if="image">
      <img class="p-8 rounded-t-lg" :src="this.image" alt="product image"/>
    </div>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl text-left mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
      </a>

      <div class="flex items-center justify-between mt-3">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ price }} €</span>
        <TiendaButton @click="viewDescription" :text="t('store.category.description')"/>
        <TiendaButton
            @click="
             buyAsk(t('store.buyPrompt.title'),
              t('store.buyPrompt.placeholder'),
              t('store.buyPrompt.confirm'),
              t('store.buyPrompt.cancel'))"
            :text="t('store.category.buy')"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Confirm, Report, Swal} from '~/notifications/Notiflix'
import Axios from "axios";
import Constants from "~/Constants";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      required: false
    },
    id: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    async buyAsk(title: string, placeholder: string, ok: string, cancel: string) {
      Confirm.prompt(
          title,
          '',
          placeholder,
          ok,
          cancel,
          (username) => {
            this.buy(username)
          }
      );
    },
    async buy(username: string) {
      await Axios.post(Constants.API_URL_PROD + 'store/checkout', {
        packageID: this.id,
        username: username
      }).then((response) => {
        if (response.data.url == "") {
          Report.failure(this.$t('store.redirectingToTebex.error'), "", this.$t('store.redirectingToTebex.confirm'));
          return;
        }
        Report.success(this.$t('store.redirectingToTebex.title'), "", this.$t('store.redirectingToTebex.confirm'));
        window.open(response.data.url, '_blank');
      })
    },
    async viewDescription() {
      await Swal.fire(this.description)
    }
  }
})
</script>
