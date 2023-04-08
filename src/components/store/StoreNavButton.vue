<template>
    <RouterLink :to="link">
        <span>{{packageName}}</span>
    </RouterLink>
</template>

<script lang="ts">
export default {
    props: {
        packageName: {
            type: String,
            required: true
        },
        packageID: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            link: "/tienda/p/" + this.packageID
        }
    },
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: var(--text-main);
}

</style>