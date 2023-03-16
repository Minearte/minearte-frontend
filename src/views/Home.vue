<template>
    <div>
        <h1>{{ lang.title }}</h1>
    </div>
</template>

<script lang="ts">
import { es } from '../lang/defaults'
export default {
    name: 'Home',
    data() {
        return {
            lang:es
        }
    },
}
</script>