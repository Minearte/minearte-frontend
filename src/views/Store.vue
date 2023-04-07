<template>
    <div class="parent">
        <div class="main">
            <RouterView />
        </div>
        <div class="sidebar">
            <Sidebar />
        </div>
    </div>
</template>

<script lang="ts">
import Sidebar from '../components/store/Sidebar.vue';
export default {
    components: {
        Sidebar
    }
}
</script>

<style scoped>
@import "../assets/css/store/grid.css";
</style>