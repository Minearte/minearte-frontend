<template>
    <div>
        <img class="" :style="cssProperties" src="../../assets/logo.png" alt="Minearte Logo">
    </div>
</template>

<script>
export default defineComponent({
    props: {
        size: {
            type: Number,
            default: 200,
        },
    },
    data() {
        return {
            cssProperties: {
                height: this.size + 'px',
            }
        }
    },
})
</script>
