<script setup lang="ts">
const {t} = useI18n();

</script>

<template>
  <nav class="border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="/favicon.ico" class="h-8 mr-3" alt="Minearte Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ t('pageName') }}</span>
      </NuxtLink>
      <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800" aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          <NavItem langKey="nav.home" icon="bx:bx-home" link="/" />
          <NavItem langKey="nav.store" icon="mdi:cart-outline" link="/tienda" />
          <NavItem langKey="nav.discord" icon="ic:baseline-discord" link="https://discord.minearte.net" target="_blank" />
          <NavItem langKey="nav.rules" icon="bx:bx-book" link="/reglas" />
        </ul>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">

</script>
