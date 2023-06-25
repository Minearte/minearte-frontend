<script setup lang="ts">
import {Icon} from "@iconify/vue";

const {t} = useI18n();
</script>

<template>
  <li>
    <div class="flex items-center">
      <Icon v-if="icon"
            :icon="icon"
            class="text-2xl text-gray-400 hover:shadow-2xl link p-0.5"
      />

      <NuxtLink :to="link"
                class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
        md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-gray-700
         dark:hover:text-white md:dark:hover:bg-transparent">


        {{ t(langKey) }}
      </NuxtLink>
    </div>
  </li>
</template>

<script lang="ts">
import {defineComponent} from "#imports";

export default defineComponent({
  props: {
    langKey: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>


</style>
