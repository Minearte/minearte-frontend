<template>
  <span v-if="loading" class="hider flex items-center">
      <span class="loader" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingSpinner",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    async mounted() {
      this.loading = false;
    },
  },
  mounted() {
    this.mounted();
  },
});

</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: rotation_19 1s linear infinite;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  background-color: #FFF;
  border-radius: 50%;
  animation: scale50 1s infinite ease-in-out;
}

.loader::before {
  top: auto;
  bottom: 0;
  background-color: #fc764e;
  animation-delay: 0.5s;
}

@keyframes rotation_19 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale50 {
  0%, 100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

.hider {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background: #010A11;
}
</style>