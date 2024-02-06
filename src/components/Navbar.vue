<script setup>
import {RouterLink} from "vue-router";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import Notification from "@/components/Notification.vue";
import UserMenu from "@/components/UserMenu.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>

<template>
    <nav class="navbar fixed right-0 left-0 top-0 lg:top-[44.5px] px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
         id="navbar">
        <div class="mx-auto container-fluid">
            <div class="flex flex-wrap items-center justify-between mx-auto">
                <RouterLink to="/" class="flex items-center">
                    <img src="/src/assets/images/logo-dark.png" alt="Kariyer Tur" class="logo-dark h-[22px] block dark:hidden">
                    <img src="/src/assets/images/logo-light.png" alt="Kariyer Tur" class="logo-dark h-[22px] hidden dark:block">
                </RouterLink>

                <div class="flex items-center lg:order-2">
                    <div>
                        <DarkModeToggle/>
                    </div>

                    <div>
                        <Notification/>
                    </div>

                    <div>
                        <UserMenu/>
                    </div>
                </div>

                <NavigationMenu/>
            </div>
        </div>
    </nav>
</template>