<template>
    <div class="navbar-parent">
        <div class="nav">
            <StoreNav />
        </div>
    </div>

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
import StoreNav from '../components/store/StoreNav.vue';
export default {
    components: {
        Sidebar,
        StoreNav
    }
}
</script>

<style scoped>
@import "../assets/css/store/grid.css";
</style>