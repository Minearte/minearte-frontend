<template>
    <div>
        <img :src="link" alt="">
        <span> {{ nickname }} </span>
        <span class="gray">{{ package }}</span>
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
        package : {
            type: String,
            required: true
        }
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
.gray {
    color: #808080;
    font-size: 12px;
    margin-left: 4px;
}

</style>