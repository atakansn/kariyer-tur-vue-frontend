<script setup>

import {inject, onBeforeMount, ref, watch} from "vue";

const addTab = inject('addTab')
const activeTabHash = inject('activeTabHash')

const props = defineProps({
    title: {
        required: true
    }
})

const hash = ref('')
const isActive = ref(false)

onBeforeMount(() => {
    hash.value = `#${props?.title?.toLowerCase().replace(/ /g, '-')}`

    addTab({
        title: props.title,
        hash: hash.value
    })
})

watch(activeTabHash, () => {
    isActive.value = activeTabHash.value === hash.value
})
</script>

<template>
    <div v-show="isActive">
        <slot :hash="hash"/>
    </div>
</template>

<style scoped>

</style>