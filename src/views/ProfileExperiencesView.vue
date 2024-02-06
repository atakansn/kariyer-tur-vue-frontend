<script setup>
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
import Combobox from "@/components/Combobox.vue"
</script>

<template>
    <div class="pt-1 space-x-8">
        <form action="#">
            <div>
                <h5 class="mb-3 text-gray-900 fs-17 fw-semibold dark:text-gray-50">Meslek Deneyimlerim</h5>
                <div class="mt-5">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Şirket Adı" for="company-name"/>
                                <Combobox id="company-name" name="company-name" class="mt-1"/>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="İş" for="job"/>
                                <Combobox id="job" name="job" class="mt-1"/>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Başlangıç Tarihi" for="starting-date"/>
                                <Input type="date" id="starting-date" name="starting-date" class="mt-1"/>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <Label value="Bitiş Tarihi" for="ending_date"/>
                                <Input type="date" id="ending_date" name="ending_date" class="mt-1"/>
                            </div>
                        </div>

                        <div class="col-span-12">
                            <div class="mb-3">
                                <Label value="Açıklama" for="profession"/>
                                <textarea class="w-full mt-1 text-sm rounded border-gray-100/50 dark:bg-transparent dark:border-neutral-600 dark:text-gray-300" id="profession" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 text-right">
                <a href="javascript:void(0)" class="text-white btn bg-green-500 border-transparent focus:ring-green-500/20">Güncelle</a>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>