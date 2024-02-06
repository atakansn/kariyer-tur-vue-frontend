<script setup>
import Label from "@/components/Label.vue";
import Input from "@/components/Input.vue";
</script>

<template>
    <div>
        <div>
            <h5 class="mb-5 font-semibold text-17 dark:text-gray-50">
                Parola Güncelleme
            </h5>
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12">
                    <Label for="current-password-input" value="Mevcut Parola"/>
                    <Input type="password" class="mt-1" id="current-password-input" name="current-password-input"/>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <Label for="new-password-input" value="Yeni Parola"/>
                    <Input type="password" class="mt-1" id="new-password-input" name="new-password-input"/>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <Label for="confirm-password-input" value="Yeni Parola Onayı"/>
                    <Input type="password" class="mt-1" id="confirm-password-input" name="confirm-password-input"/>
                </div>
            </div>
        </div>
        <div class="mt-8 text-right">
            <a href="javascript:void(0)" class="text-white btn bg-green-500 border-transparent focus:ring-green-500/20">Güncelle</a>
        </div>
    </div>
</template>

<style scoped>

</style>