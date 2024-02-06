<script setup>
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
</script>

<template>
    <Component :is="useRoute().meta.layoutComponent">
        <RouterView/>
    </Component>
</template>

<style scoped>
</style>