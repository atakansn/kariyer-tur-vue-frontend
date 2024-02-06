<script setup>
const props = defineProps({
    value: {
        type: String,
        required: false
    }
})
</script>

<template>
    <label v-if="props.value"
           v-bind="$attrs"
           class="text-sm text-gray-900 dark:text-gray-50">
        {{ props.value }}
    </label>

    <label v-else
           v-bind="$attrs"
           class="text-sm text-gray-900 dark:text-gray-50">
        <slot/>
    </label>
</template>

<style scoped>

</style>