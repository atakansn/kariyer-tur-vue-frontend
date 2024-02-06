<script setup>
import {ref, useAttrs} from "vue";
import {XMarkIcon} from "@heroicons/vue/16/solid/index.js";

const attrs = useAttrs()

const tags = ref([])

/*const addTag = event => {
    event.preventDefault()

    let val = event.target.value.trim()

    if (val.length > 0) {
        if (tags.value.length >= 1) {
            for (let i = 0; i < tags.value.length; i++) {
                if (tags.value[i] === val) {
                    return false
                }
            }
        }

        tags.value.push(val)
        event.target.value = ''
    }
}*/

const addTag = event => {
    event.preventDefault()

    let val = event.target.value.trim()

    if (val.length > 0) {

        let tagsArray = val.split(',')

        tagsArray = tagsArray.map(tag => tag.trim())

        tagsArray = tagsArray.filter(tag => tag.length > 0)

        for(let i = 0; i < tagsArray.length; i++) {
            let tag = tagsArray[i]

            if(tags.value.length >= 1) {
                if(tags.value.includes(tag)) {
                    continue
                }
            }

            tags.value.push(tag)
        }

        event.target.value = ''
    }
}

const removeTag = index => {
    tags.value.splice(index, 1)
}
</script>

<template>
    <div>
        <label for="tag-input">
            <input @keydown.enter="addTag"
                   :id="attrs?.id ?? ''"
                   class="w-full text-gray-500 border rounded border-gray-100/50 text-13 dark:bg-transparent dark:border-neutral-600"
                   type="text"
                   :placeholder="attrs?.placeholder ?? ''"
                   />
        </label>
    </div>
    <div v-if="tags.length > 0" class="flex flex-wrap mt-2">
           <span v-for="(tag, index) in tags"
                 :key="index"
                 class="inline-flex items-center rounded-full bg-green-500 me-2 mt-2 py-0.5 pl-3 pr-1.5 text-sm font-medium text-white">
              {{ tag }}
              <button @click="removeTag(index)"
                      type="button"
                      class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none">
                <span class="sr-only">Sil</span>
                  <XMarkIcon class="h-4 w-4"/>
              </button>
           </span>
    </div>

</template>

<style scoped>
</style>