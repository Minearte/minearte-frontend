<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { t } = useI18n(); 

</script>

<template>
  <div class="text-shadow">
    <div class="grid grid-cols-1 float-left">
      <p class="text-center bg-orange-300 rounded-xl mx-1"> {{ playerCount }}</p>
      <Icon
        icon="mdi:minecraft"
        class="text-orange-300 text-5xl hover:shadow-2xl text-shadow mt-2"
      />
    </div>

    <div class="grid grid-cols-1 ml-3 float-left mt-7">
      <p class="text-left align-text-bottom text-xl text-glow text-orange-300 mx-1 font-bold">{{ t('ip') }}</p>
      <p class="text-orange-300 text-sm ">{{ t('clickToCopy') }}</p>
    </div>
  </div>
</template>

<script lang="ts">

export default defineComponent({
    data() {
        return {
            playerCount: "...",
        }
    },
    methods: {
        async getPlayerCount() {
            const { data: serverData } = await useFetch('https://api.mcsrvstat.us/2/mc.minearte.net')

            
        },
    },
})
</script>

