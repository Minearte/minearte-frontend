<template>
    <div>
        <Hero />
    </div>
</template>

<script lang="ts">
import { es } from '../lang/defaults'
import Hero from '../components/Hero.vue'
export default {
    name: 'Home',
    components: {
        Hero
    },
    data() {
        return {
            lang:es
        }
    },
}
</script>