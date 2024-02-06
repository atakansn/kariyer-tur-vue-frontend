<script setup>
import {computed} from "vue";

const props = defineProps({
    size: {
        required: false,
        type: String,
        default: 'md'
    }
})

const sizes = [
    {xs: 'px-2.5 py-1.5 text-xs'},
    {sm: 'px-3 py-2 text-sm'},
    {md: 'px-4 py-2 text-sm'},
    {lg: 'px-4 py-2 text-base'},
    {xl: 'px-6 py-3 text-base'},
]

const matchSize = computed(() => {

    const propSize = props.size.toLowerCase()

    const findSize = sizes.find(size => size[propSize])

    return findSize
        ? findSize[propSize]
        : 'px-4 py-2 text-sm'
})

</script>

<template>
    <button v-bind="$attrs"
            :class="[matchSize]"
            class="inline-flex items-center rounded border border-transparent bg-green-600 font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        <slot/>
    </button>
</template>

<style scoped>

</style>