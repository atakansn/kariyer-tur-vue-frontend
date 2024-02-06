<script setup>
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
import {PencilIcon} from "@heroicons/vue/24/outline/index.js";
import {ref} from "vue";

const model = defineModel({
    required: true
})

const imagePreview = ref(null)

const onChange = event => {
    const files = event.target.files

    if(files) {
        const fileReader = new FileReader()
        fileReader.onload = fileReadEvent => {
            imagePreview.value = fileReadEvent.target.result
        }

        model.value = files[0]

        fileReader.readAsDataURL(files[0])
    }
}
</script>

<template>
    <div class="relative mb-4">
        <img v-if="imagePreview"
             :src="imagePreview"
             class="w-40 h-40 p-1 mx-auto border-2 rounded-full border-gray-100/50 dark:border-neutral-600"
             id="profile-img"
             :alt="imagePreview?.name ?? 'Profile Resmi Ön İzleme'">

        <img v-if="!imagePreview"
             :src="model ?? '/src/assets/images/user/img-02.jpg'"
             class="w-40 h-40 p-1 mx-auto border-2 rounded-full border-gray-100/50 dark:border-neutral-600"
             id="profile-img"
             alt="Profil Fotoğrafı">

        <div class="absolute w-8 h-8 leading-8 text-center rounded-full shadow-md bottom-2 right-[42%] z-40 bg-gray-50 dark:bg-neutral-700 dark:text-white">
            <Input id="profile-img-file-input"
                   type="file"
                   class="hidden"
                   v-model="model"
                   @input="onChange"/>
            <Label for="profile-img-file-input">
                <PencilIcon class="h-5 w-5 cursor-pointer mt-1.5 ms-1.5"/>
            </Label>
        </div>
    </div>
</template>

<style scoped>

</style>