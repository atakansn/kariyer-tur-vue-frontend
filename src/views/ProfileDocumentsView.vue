<script setup>
import {ClipboardDocumentCheckIcon, DocumentDuplicateIcon, DocumentIcon, XMarkIcon} from "@heroicons/vue/24/outline/index.js";
import {ref} from "vue";
import AppButton from "@/components/AppButton.vue";
import {useBytesToSize} from "@/composables/useBytesToSize.js";

const fileInput = ref(null)
const isDragging = ref(false)
const files = ref([])

const selectDocuments = () => {
    if (!Boolean(isDragging.value)) {
        fileInput.value.click()
    }
}

const dragOver = (e) => {
    e.preventDefault()
}

const dragLeave = () => {
    isDragging.value = false
}

const dropEvent = (e) => {
    e.preventDefault()

    isDragging.value = false

    const newFiles = [...e.dataTransfer.files].map(file => {
        return new UploadableFile(file)
    }).filter(file => {
        return !fileExists(file.id)
    })

    files.value = [...files.value.concat(newFiles)]
}

const dragEnter = () => {
    isDragging.value = true;
}

const fileExists = fileId => {
    return files.value.some(({id}) => id === fileId)
}

class UploadableFile {
    constructor(file) {
        this.file = file
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
    }
}

const removeFile = fileId => {
    const index = files.value.indexOf(fileId)

    if(index > -1) {
        files.value.splice(fileId, 1)
    }
}

const fileInputOnChange = event => {
    const newFiles = [...event.target.files].map(file => {
        return new UploadableFile(file)
    }).filter(file => {
        return !fileExists(file.id)
    })

    files.value = [...files.value.concat(newFiles)]

    event.target.value = null
}
</script>

<template>
    <div>
        <input type="file" class="hidden" ref="fileInput" @change="fileInputOnChange" multiple>
        <div>
            <h5 class="mb-5 font-semibold text-17 dark:text-gray-50">
                Dosyalarınızı Yükleyin (Öz geçmiş, sertifika vb.)
            </h5>
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12">
                    <div @dragleave="dragLeave"
                         @dragenter="dragEnter"
                         @dragover="dragOver"
                         @drop="dropEvent"
                         class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                        <div class="pointer-events-none" v-if="isDragging">
                            <ClipboardDocumentCheckIcon class="mx-auto h-12 w-12 text-gray-400"/>
                            <span class="mt-2 block text-sm font-medium text-gray-900">Dosyalarınızı buraya bırakın</span>
                        </div>

                        <div class="pointer-events-auto" v-else>
                            <DocumentDuplicateIcon class="mx-auto h-12 w-12 text-gray-400"/>
                            <span class="mt-2 block text-sm font-medium text-gray-900">
                                Dosyaları/Dosyayı sürükleyip bırakın veya
                                <button @click="selectDocuments"
                                        type="button"
                                        class="font-extrabold text-gray-900">buraya tıklayın</button> yükleyin
                            </span>
                        </div>
                    </div>

                    <template v-if="files.length > 0">
                        <div class="rounded-md bg-green-50 p-4 mt-5" v-for="file in files">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <!-- Heroicon name: DocumentIcon -->
                                    <DocumentIcon class="h-8 w-8 text-green-400"/>
                                </div>
                                <div class="ml-3">
                                    <p class="text-md font-medium text-green-800">{{ file.file.name }}</p>
                                    <p class="text-xs font-medium text-green-800">{{ useBytesToSize(file.file.size) }}</p>
                                </div>
                                <div class="ml-auto pl-3">
                                    <div class="-mx-1.5 -my-1.5">
                                        <button @click="removeFile(file)" type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                                            <span class="sr-only">Dismiss</span>
                                            <!-- Heroicon name: x-mark -->
                                            <XMarkIcon class="h-6 w-6"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="mt-8 text-right">
            <AppButton type="submit">
                Yükle
            </AppButton>
        </div>
    </div>
</template>

<style scoped>

</style>