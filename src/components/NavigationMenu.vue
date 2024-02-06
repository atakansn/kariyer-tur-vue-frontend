<script setup>
import {onMounted, ref} from "vue";
import {Bars3Icon, ChevronDownIcon} from "@heroicons/vue/16/solid/index.js";

const navigationMenuEl = ref(null)
const showDropdown = ref(false)
const dropdownMenuEl = ref(null)

onMounted(() => {
    window.addEventListener('resize', () => navigationMenuEl.value.classList.add('hidden'))

    //dropdown
    const dropdownElem = document.querySelectorAll('.dropdown');

    // dropdown event
    dropdownEvent(dropdownElem);

    window.addEventListener('click', function (e) {
        dismissDropdownMenu();
    });

})

const toggleNavbar = () => {
    if (!!navigationMenuEl.value) {
        navigationMenuEl.value.classList.toggle('hidden')
    } else {
        if(process.env.NODE_ENV === 'development') {
            console.warn('navigationMenuEl, undefined veya null.')
        }
    }
}

const dropdownEvent = (elem) => {
    Array.from(elem).forEach(function (item) {
        item.querySelectorAll(".dropdown-toggle").forEach(function (subitem) {
            subitem.addEventListener("click", function (event) {
                subitem.classList.toggle("show");

                if (!subitem.classList.contains("show")) {
                    item.querySelector(".dropdown-menu").classList.remove("block")
                    item.querySelector(".dropdown-menu").classList.add("hidden")
                } else {
                    dismissDropdownMenu()
                    item.querySelector(".dropdown-menu").classList.add("block")
                    item.querySelector(".dropdown-menu").classList.remove("hidden")
                    if (item.querySelector(".dropdown-menu").classList.contains("block")) {
                        subitem.classList.add("show")
                    } else {
                        subitem.classList.remove("show")
                    }
                    event.stopPropagation();
                }
            });
        });
    });
}

const dismissDropdownMenu = () => {
    Array.from(document.querySelectorAll(".dropdown-menu"))
        .forEach(function (item) {
            item.classList.remove("block")
            item.classList.add("hidden")
        });
    Array.from(document.querySelectorAll(".dropdown-toggle"))
        .forEach(function (item) {
            item.classList.remove("show")
        });
}
</script>

<template>
    <!-- Collapse Navbar Button -->
    <div>
        <button @click="toggleNavbar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">

            <span class="sr-only">Ana menüyü aç</span>

            <Bars3Icon class="w-6 h-6"/>
        </button>
    </div>

    <!-- Navigation Menu -->
    <div ref="navigationMenuEl"
         class="navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row">
            <li class="py-5 lg:px-4">
                <RouterLink as="link"
                            :to="{name: 'home'}"
                            class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50">
                    Anasayfa
                </RouterLink>
            </li>
            <li class="py-5 lg:px-4">
                <RouterLink as="link"
                            :to="{name: 'is-ilanlari'}"
                            class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50">
                    İş İlanları
                </RouterLink>
            </li>
            <li class="py-5 lg:px-4">
                <RouterLink as="link"
                            :to="{name: 'is-arayanlar'}"
                            class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50">
                    İş Arayanlar
                </RouterLink>
            </li>
            <li class="py-5 lg:px-4">
                <RouterLink as="link"
                            :to="{name: 'sirketler'}"
                            class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50">
                    Şirketler
                </RouterLink>
            </li>
            <li class="py-5 lg:px-4">
                <RouterLink as="link"
                            :to="{name: 'blog'}"
                            class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50">
                    Blog
                </RouterLink>
            </li>
            <li class="relative dropdown lg:mt-0">
                <button class="dropdown-toggle py-5 inline-flex items-center align-middle text-gray-800 lg:px-4 dark:text-gray-50 lg:h-[70px]">
                    Biz <ChevronDownIcon class="w-5 h-5 ml-1 align-middle" :class="{'rotate-180 animate-spin': showDropdown}"/>
                </button>

                <ul class="relative dropdown-menu top-auto z-50 py-2 list-none bg-white border-0 rounded lg:border border-gray-500/20 lg:absolute -left-3 lg:w-48 lg:shadow-lg dark:bg-neutral-800"
                    aria-labelledby="company">
                    <li>
                        <a class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[mode=dark]:text-gray-50"
                            href="about.html">Hakkımızda</a>
                    </li>
                    <li><a
                            class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 dark:text-gray-50"
                            href="services.html">İletişim</a>
                    </li>
                    <li><a
                            class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 dark:text-gray-50"
                            href="team.html">Gizlilik Politikası</a>
                    </li>
                    <li><a
                            class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 dark:text-gray-50"
                            href="pricing.html">Sık Sorulan Sorular</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>