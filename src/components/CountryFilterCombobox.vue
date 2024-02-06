<script setup>
import {ref} from "vue";

const list = ref(false)
</script>

<template>
    <div class="mt-3 filter-search-form mt-md-0">
        <svg class="w-5 h-5 absolute top-5 ml-3.5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>

        <div>
            <input id="combobox" type="text"
                   class="md:w-full rounded-l-none filter-input-box placeholder:text-gray-300 placeholder:text-13 dark:text-gray-300"
                   placeholder="Ülke" role="combobox" aria-controls="options"
                   aria-expanded="false">

            <!-- Open Button -->
            <button type="button"
                    class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-500">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Open List -->
            <ul v-if="list" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                id="options" role="listbox">
                <!--
                  Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                  Active: "text-white bg-indigo-600", Not Active: "text-gray-900"
                -->
                <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    id="option-0" role="option" tabindex="-1">
                    <!-- Selected: "font-semibold" -->
                    <span class="block truncate">Leslie Alexander</span>

                    <!--
                      Checkmark, only display for selected option.

                      Active: "text-white", Not Active: "text-indigo-600"
                    -->
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
          <!-- Heroicon name: mini/check -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"/>
          </svg>
        </span>
                </li>
                <!-- More items... -->
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>