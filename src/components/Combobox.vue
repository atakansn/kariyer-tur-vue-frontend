<script setup>
import {
    Combobox as ComboboxHeadlessUi,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    TransitionRoot
} from "@headlessui/vue";
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/20/solid/index.js"
import {computed, ref, watch} from "vue";

const props = defineProps({
    options: {
        required: false,
        type: [Function, Array, Object],
        default: () => []
    }
})

const selectedOption = ref(props.options[0])
const options = ref([])
const query = ref('')

if(typeof props.options === 'function') {
    props.options(result => {
        selectedOption.value = result[0]
        options.value = [...result]
    })
} else if(typeof props.options === 'object') {
    options.value = [...props.options]
}

let filteredOptions = computed(() =>
    query.value === ''
        ? options.value
        : options.value.filter((option) =>
            option.label.toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

</script>

<template>
    <ComboboxHeadlessUi v-model="selectedOption">
        <div class="relative">
            <div class="relative">
                <ComboboxInput
                        class="md:w-full rounded-l-none filter-input-box placeholder:text-gray-300 placeholder:text-13 truncate pe-8 dark:text-gray-300"
                        :display-value="option => option.label"
                        @change="query = $event.target.value"
                />
                <ComboboxButton
                        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
                        v-slot="{open}">
                    <ChevronDownIcon
                            class="h-5 w-5 text-gray-400"
                            :class="{'rotate-180': open}"
                            aria-hidden="true"
                    />
                </ComboboxButton>
            </div>
            <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
            >
                <ComboboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                >
                    <div v-if="filteredOptions.length === 0 && query !== ''"
                         class="relative cursor-default select-none px-4 py-2 text-gray-700"
                    >
                        Hiçbir Şey Bulunamadı.
                    </div>

                    <ComboboxOption
                            v-for="(option, index) in filteredOptions"
                            as="template"
                            :key="index"
                            :value="option"
                            v-slot="{ selected, active }"
                    >
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4"
                            :class="{
                                    'bg-green-600 text-white': active,
                                      'text-gray-900': !active,
                                    }"
                        >
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ option.label }}
                </span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3" :class="{ 'text-white': active, 'text-green-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                </span>
                        </li>
                    </ComboboxOption>
                </ComboboxOptions>
            </TransitionRoot>
        </div>
    </ComboboxHeadlessUi>
</template>

<style scoped>

</style>