<script setup lang="ts">
import {Icon} from "@iconify/vue";

const {t} = useI18n();

</script>

<template>
  <div @click="goToDiscord" class="text-shadow cursor-pointer">
    <div class="grid grid-cols-1 mr-3 float-left mt-7">
      <p class="text-right align-text-bottom text-xl text-glow text-orange-300 mx-1 font-bold">{{ t('discord') }}</p>
      <p class="text-orange-300 text-right text-sm ">{{ t('clickToJoin') }}</p>
    </div>

    <div class="grid grid-cols-1 float-right">
      <p class="text-center bg-orange-300 rounded-xl mx-1"> {{ userCount }}</p>
      <Icon
          icon="mdi:discord"
          class="text-orange-300 text-5xl hover:shadow-2xl text-shadow mt-2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import constants from "~/Constants";

export default defineComponent({
  data() {
    return {
      userCount: "...",
    }
  },
  methods: {
    async getDiscordCount() {
      const data = await fetch(`https://discord.com/api/guilds/${constants.DISCORD_GUILD_ID}/widget.json`)

      const userCount = data.json() as Promise<any>

      this.userCount = (await userCount).presence_count.toString();
    },
    async goToDiscord() {
      window.open(`${constants.DISCORD_INVITE_URL}`, '_blank')
    }
  },
  mounted() {
    this.getDiscordCount()
  },
})
</script>