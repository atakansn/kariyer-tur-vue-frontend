<script setup>
import {ref} from "vue";

const props = defineProps({
    header: {
        required: true,
        type: [String]
    }
})

const toggleBody = ref(true)
</script>

<template>
    <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
            <button @click="toggleBody = !toggleBody" type="button" class="flex items-center justify-between w-full px-4 py-2.5 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group">
                <span class="text-gray-900 text-15 dark:text-gray-50">{{ props.header }}</span>
                <svg :class="{'rotate-180 animate-bounce': toggleBody}"
                     class="w-3 h-3 text-gray-900 dark:text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
        </h6>
        <div v-show="toggleBody" class="accordion-body">
            <div class="p-5">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>