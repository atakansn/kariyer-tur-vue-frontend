<script setup>
import {onMounted, ref} from "vue";
import {SunIcon, MoonIcon} from "@heroicons/vue/16/solid/index.js";

const props = defineProps({
    buttonClass: {
        type: [Array, String, Object],
        required: false,
        default: () => 'w-10 h-10'
    },
    iconClass: {
        type: [Array, String, Object],
        required: false,
        default: () => 'w-6 h-6'
    }
})

const lightIcon = ref(null)
const darkIcon = ref(null)

onMounted(() => {
    if (
        localStorage.getItem('data-theme-mode') === 'dark' ||
        (!('data-theme-mode' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)
    ) {
        lightIcon.value.classList.remove('hidden')
        document.documentElement.setAttribute('data-theme-mode', 'dark')
    } else {
        darkIcon.value.classList.remove('hidden')
        document.documentElement.setAttribute('data-theme-mode', 'light')
    }
})

const toggleMode = () => {
    lightIcon.value.classList.toggle('hidden')
    darkIcon.value.classList.toggle('hidden')

    if (localStorage.getItem('data-theme-mode')) {
        if (localStorage.getItem('data-theme-mode') === 'light') {
            document.documentElement.setAttribute('data-theme-mode', 'dark')
            localStorage.setItem('data-theme-mode', 'dark')
        } else {
            document.documentElement.setAttribute('data-theme-mode', 'light')
            localStorage.setItem('data-theme-mode', 'light')
        }
    } else {
        if (document.documentElement.getAttribute('data-theme-mode') === 'dark') {
            document.documentElement.setAttribute('data-theme-mode', 'light')
            localStorage.setItem('data-theme-mode', 'light')
        } else {
            document.documentElement.setAttribute('data-theme-mode', 'dark')
            localStorage.setItem('data-theme-mode', 'dark')
        }
    }

}

const defaultClass = [
    'inline-flex',
    'items-center',
    'justify-center',
    'text-sm',
    'hover:bg-neutral-50',
    'dark:hover:bg-gray-900',
    'dark:text-gray-200',
    'rounded-lg p-2',
    'text-gray-600',
    'focus:outline-none',
    'focus:ring',
    'focus:ring-gray-100',
    'dark:focus:ring-gray-700',
]

</script>

<template>
    <button @click="toggleMode"
            type="button"
            role="switch"
            :class="[defaultClass, props.buttonClass]">
        <span class="sr-only">Modu değiştir</span>

        <!-- Sun Icon -->
        <SunIcon ref="lightIcon" :class="['hidden', props.iconClass]"/>

        <!-- Moon Icon -->
        <MoonIcon ref="darkIcon" :class="['hidden', props.iconClass]"/>
    </button>
</template>

<style scoped>

</style>