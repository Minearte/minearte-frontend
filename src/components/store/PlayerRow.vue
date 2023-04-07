<template>
    <div>
        <img :src="link" alt="">
        <span> {{ nickname }} </span>
    </div>

</template>

<script lang="ts">
export default {
    name: "PlayerRow",
    props: {
        nickname: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            link: "https://mc-heads.net/head/"+ this.nickname +"/"
        }
    },

}
</script>

<style scoped>
* {
    text-align: left;
}
img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    margin-left: 20px;
}
</style>