<script setup>
import {ref} from "vue";
import {PencilSquareIcon, TrashIcon} from "@heroicons/vue/24/outline/index.js";
import Combobox from "@/components/Combobox.vue";
import InputTag from "@/components/InputTags.vue";
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
import AppButton from "@/components/AppButton.vue";

const photoPreview = ref(null)
const photoInput = ref(null)
const userPhoto = ref('/src/assets/images/user/img-02.jpg')
const updatePhotoPreview = event => {
    const files = event.target.files

    if(!files) {
        return
    }

    const fileReader = new FileReader()

    fileReader.onload = fileReadEvent => {
        photoPreview.value = fileReadEvent.target.result
    }

    fileReader.readAsDataURL(files[0])
}

const selectNewPhoto = () => photoInput.value.click()

const clearPhotoFileInput = () => {
    if(photoPreview.value) {
        photoPreview.value = null
    }
}
</script>

<template>
    <div class="pt-1 space-x-8">
        <form>
            <div>
                <h5 class="mb-3 text-gray-900 fs-17 fw-semibold dark:text-gray-50">Hesap Detaylarım</h5>
                <div class="text-center">
                    <div class="relative mb-4">
                        <input type="file"
                               ref="photoInput"
                               class="hidden"
                               @change="updatePhotoPreview"/>

                        <img v-if="!photoPreview"
                             :src="userPhoto"
                             class="w-40 h-40 p-1 mx-auto border-2 rounded-full border-gray-100/50 dark:border-neutral-600"
                             id="profile-img"
                             alt="Profil Fotoğrafı">

                        <img v-if="photoPreview"
                             :src="photoPreview"
                             class="w-40 h-40 p-1 mx-auto border-2 rounded-full border-gray-100/50 dark:border-neutral-600"
                             id="profile-img"
                             alt="Profile Resmi Ön İzleme">

                        <button @click.prevent="selectNewPhoto" type="button" class="absolute inline-flex items-center p-2 text-center rounded-full shadow-md shadow-gray-100 bottom-2 right-[42%] z-10 bg-gray-50 dark:bg-neutral-700 dark:text-white dark:shadow-none hover:bg-gray-100">
                            <PencilSquareIcon class="h-5 w-5"/>
                        </button>

                        <button v-if="photoPreview"
                                @click.prevent="clearPhotoFileInput" type="button" class="absolute inline-flex items-center p-2 text-center rounded-full text-red-500 shadow-md shadow-gray-100 bottom-2 left-[42%] z-10 bg-gray-50 dark:bg-neutral-700 dark:text-red-500 dark:shadow-none hover:bg-gray-100 hover:text-red-600">
                            <TrashIcon class="h-5 w-5"/>
                        </button>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Ad Soyad" for="name"/>
                                <Input type="text" id="name" name="name" class="mt-1"/>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="E-Posta" for="email"/>
                                <Input type="email" id="email" name="email" class="mt-1"/>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Telefon Numarası" for="phone-number"/>
                                <Input type="text" id="phone-number" name="phone-number" class="mt-1"/>
                            </div>
                        </div>

                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Meslek" for="profession"/>
                                <Combobox name="profession" class="mt-1" id="profession"/>
                            </div>
                        </div>

                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Teklif Edilen Maaş" for="offered-salary"/>
                                <Input type="text" id="offered-salary" name="offered-salary" class="mt-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <h5 class="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">Profil</h5>
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12">
                        <Label value="Kendinizden Bahsedin" for="about"/>
                        <textarea class="w-full mt-1 text-sm rounded border-gray-100/50 dark:bg-transparent dark:border-neutral-600 dark:text-gray-300" id="about" rows="5"></textarea>
                    </div>
                    <div class="col-span-12">
                        <Label value="Konuştuğunuz Diller" for="languages"/>
                        <InputTag class="mt-1" id="languages" placeholder="Konuştuğunuz dilin adını girip Enter'a basın."/>
                    </div>
                    <div class="col-span-12">
                        <Label value="Yetenekler" for="skills"/>
                        <InputTag class="mt-1" id="skills" placeholder="Yeteneklerinizin adını girip Enter'a basın."/>
                    </div>
                    <div class="col-span-12">
                        <Label value="Lokasyon" for="location"/>
                        <Input type="text" class="mt-1" id="location" name="location"/>
                    </div>
                </div>
                <div class="mt-8 text-right">
                    <AppButton type="submit">
                        Güncelle
                    </AppButton>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>