<script setup>
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
</script>

<template>
    <div class="pt-1 space-x-8">
        <form action="#">
            <div>
                <h5 class="mb-3 text-gray-900 fs-17 fw-semibold dark:text-gray-50">İletişim Bilgilerim</h5>
                <div class="mt-4">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <label for="facebook" class="text-sm text-gray-900 dark:text-gray-50">Facebook</label>
                                <input type="text" class="w-full mt-1 text-gray-500 border rounded border-gray-100/50 text-13 dark:bg-transparent dark:border-neutral-600" id="facebook" value="https://www.facebook.com">
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <label for="twitter" class="text-sm text-gray-900 dark:text-gray-50">Twitter</label>
                                <input type="text" class="w-full mt-1 text-gray-500 border rounded border-gray-100/50 text-13 dark:bg-transparent dark:border-neutral-600" id="twitter" value="https://www.twitter.com">
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <label for="linkedin" class="text-sm text-gray-900 dark:text-gray-50">Linkedin</label>
                                <input type="text" class="w-full mt-1 text-gray-500 border rounded border-gray-100/50 text-13 dark:bg-transparent dark:border-neutral-600" id="linkedin" value="https://www.linkedin.com">
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <label for="whatsapp" class="text-sm text-gray-900 dark:text-gray-50">Whatsapp</label>
                                <input type="text" class="w-full mt-1 text-gray-500 border rounded border-gray-100/50 text-13 dark:bg-transparent dark:border-neutral-600" id="whatsapp" value="https://www.whatsapp.com">
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <div class="mb-3">
                                <label for="whatsapp" class="text-sm text-gray-900 dark:text-gray-50">Github</label>
                                <input type="text" class="w-full mt-1 text-gray-500 border rounded border-gray-100/50 text-13 dark:bg-transparent dark:border-neutral-600" id="whatsapp" value="https://www.whatsapp.com">
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