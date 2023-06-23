<template>
  <div>
    <div id="background">
      <slot />
    </div>
  </div>
</template>

<style>
body {
  background-color: #ffaa00;
  background-image: url("../assets/backgrounds/darks/side-waves-orange-dark.svg");
  background-attachment: fixed;
  background-size: cover;
}
</style>
