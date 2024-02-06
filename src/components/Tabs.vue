<script setup>
import {ref, provide} from "vue";
import {StarIcon} from "@heroicons/vue/24/solid/index.js";

const activeTabHash = ref('')
const tabs = ref([])

provide('addTab', tab => {
    const count = tabs.value.push(tab)

    if(count === 1) {
        activeTabHash.value = tab.hash
    }
})

provide('activeTabHash', activeTabHash)

</script>

<template>
    <div class="nav-tabs chart-tabpill">
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                <div class="p-1.5 bg-white dark:bg-neutral-900 shadow-lg shadow-gray-100/30 rounded-lg dark:shadow-neutral-700">
                    <ul class="items-center text-sm font-medium text-center text-gray-700 nav md:flex">
                        <li class="w-full" v-for="(tab, index) in tabs" :key="index">
                            <button @click="activeTabHash = tab.hash"
                                    type="button"
                                    :class="{'active': tab.hash === activeTabHash}"
                                    class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">
                                {{ tab.title }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tab-content">
            <slot/>
        </div>
    </div>

</template>

<style scoped>

</style>
