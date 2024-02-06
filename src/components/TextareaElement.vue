<script setup>
import {useAttrs} from "vue";

const attr = useAttrs()
</script>

<template>
    <textarea
            class="w-full mt-1 text-sm rounded border-gray-100/50 dark:bg-transparent dark:border-neutral-600 dark:text-gray-300"
            :class="attr?.class"
            :id="attr?.id"
            :name="attr?.name"
            :rows="attr?.rows ?? 5"
            :placeholder="attr?.placeholder"
            :cols="attr?.cols"
    >
    </textarea>
</template>

<style scoped>

</style>