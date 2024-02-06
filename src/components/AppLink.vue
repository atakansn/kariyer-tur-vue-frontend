<script setup>
import {RouterLink} from "vue-router";
import {computed} from "vue";

const props = defineProps({
    ...RouterLink.props,
    inactiveClass: String
})

const isExternalLink = computed(
    () => typeof props.to === 'string' && props.to.startsWith('http')
)
</script>

<template>
    <a v-if="isExternalLink"
       v-bind="$attrs"
       :href="props.to"
    >
        <slot :isActive="props.isActive"/>
    </a>

    <RouterLink v-else
                v-bind="props"
                custom
                v-slot="{ isActive, href, navigate }"
    >
        <a v-bind="$attrs"
           :href="href"
           @click="navigate"
           :class="isActive ? props.activeClass : props.inactiveClass"
        >
            <slot :isActive="isActive"/>
        </a>
    </RouterLink>
</template>

<style scoped>
</style>