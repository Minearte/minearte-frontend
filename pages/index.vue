<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
    {
        name: "keywords",
        content: t("meta.keywords"),
    },
    {
        name: "icon",
        content: "../assets/logo.png",
    }
  ],
});
</script>

<template>
  <div>

  </div>
</template>

<style>
@import url(../assets/css/main.css);
</style>
