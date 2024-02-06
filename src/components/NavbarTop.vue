<script setup>
import {MapPinIcon} from "@heroicons/vue/16/solid/index.js";
</script>

<template>
    <div class="hidden px-5 mx-auto border-gray-200 container-fluid lg:px-24 bg-gray-50 md:block dark:bg-neutral-600">
        <div class="grid items-center grid-cols-12">
            <div class="col-span-7">
                <ul class="flex items-center py-3">
                    <li class="mr-4">
                        <p class="mb-0 text-gray-800 text-13 dark:text-gray-50 inline-flex">
                            <MapPinIcon class="mr-1 w-4 h-4"/>
                            <span>
                                Konumunuz: <a href="javascript:void(0)" class="font-medium">Türkiye</a>
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="col-span-5 ml-auto mr-3">
                <ul class="flex items-center py-3">
                    <li>
                        <ul class="flex flex-wrap gap-4 text-gray-800">
                            <li class="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                <a href="javascript:void(0)" class="social-link"><i class="uil uil-whatsapp"></i></a>
                            </li>
                            <li class="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                <a href="javascript:void(0)" class="social-link"><i
                                        class="uil uil-facebook-messenger-alt"></i></a></li>
                            <li class="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                <a href="javascript:void(0)" class="social-link"><i class="uil uil-instagram"></i></a>
                            </li>
                            <li class="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                <a href="javascript:void(0)" class="social-link"><i class="uil uil-twitter-alt"></i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>