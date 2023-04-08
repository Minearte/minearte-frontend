<template>
 {{ category }}
</template>
<script lang="ts">
export default {
    data: () => ({
        category: ""
    }),
    mounted() {
        this.mount()
    },
    methods: {
        async mount() {
            this.category = this.$route.params.category as string;  
        },
    },
    watch: {
        $route() {
            this.mount();
        }
    }
}
</script>
<style scoped>
@import "../../assets/css/store/card.css";
</style>