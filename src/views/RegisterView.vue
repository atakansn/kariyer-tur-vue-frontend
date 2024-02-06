<script setup>
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import {UserIcon, BuildingOfficeIcon} from "@heroicons/vue/24/solid/index.js";
</script>

<template>
    <div class="fixed bottom-0 end-0 mb-3 me-3">
        <DarkModeToggle button-class="w-14 h-14 bg-neutral-800 hover:bg-neutral-500 dark:bg-slate-50 dark:hover:bg-slate-300 text-white dark:text-neutral-900"
                        icon-class="w-8 h-8"/>
    </div>

    <section class="flex items-center justify-center min-h-screen py-10 bg-green-500/10 dark:bg-neutral-700">
        <div class="col-span-6 rounded-b-md lg:col-span-6 bg-green-700 lg:rounded-lg">
            <div class="flex flex-col justify-center h-full p-12">
                <div class="text-center">
                    <h5 class="text-[18.5px] text-white">Başlayalım</h5>
                    <p class="mt-3 text-white/80">Kaydolun Kariyer Turun tüm özelliklerini kullanın.</p>
                </div>
                <form action="index.html" class="mt-8">
                    <div class="mb-5">
                        <label for="email" class="text-white">E-posta Adresi</label>
                        <input type="text" class="w-full mt-1 bg-green-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" required="" id="email" placeholder="E-posta adresi">
                    </div>
                    <div class="mb-5">
                        <label for="password" class="text-white">Parola</label>
                        <input type="password" class="w-full mt-1 bg-green-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" id="password" placeholder="Parola">
                    </div>
                    <div class="mb-5">
                        <label for="password-confirmation" class="text-white">Parola Tekrarı</label>
                        <input type="password" class="w-full mt-1 bg-green-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" id="password-confirmation" placeholder="Parola tekrarı">
                    </div>
                    <div class="mb-5">
                        <fieldset>
                            <legend class="text-md text-white">Giriş yapmak istediğiniz hesap türü</legend>
                            <div class="divide-y divide-green-50 border-green-50">
                                <div class="relative flex items-start py-4">
                                    <div class="min-w-0 flex-1 inline-flex gap-2 items-center text-sm">
                                        <UserIcon class="h-4 w-4 text-white"/>
                                        <label for="user" class="select-none font-medium text-white">Kullanıcı</label>
                                    </div>
                                    <div class="ml-3 flex h-5 items-center">
                                        <input id="user" name="login-type" type="radio" checked class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500">
                                    </div>
                                </div>

                                <div class="relative flex items-start py-4">
                                    <div class="min-w-0 flex-1 inline-flex gap-2 items-center text-sm">
                                        <BuildingOfficeIcon class="h-4 w-4 text-white"/>
                                        <label for="company" class="select-none font-medium text-white">Şirket</label>
                                    </div>
                                    <div class="ml-3 flex h-5 items-center">
                                        <input id="company" name="login-type" type="radio" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500">
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <div>
                            <input class="align-middle border-transparent rounded focus:ring-0 focus:ring-offset-0 checked:bg-green-500" type="checkbox" id="terms-conditions" name="terms-conditions">
                            <label class="text-white align-middle ms-2" for="terms-conditions">
                                <a href="javascript:void(0)" class="pb-1 text-white underline align-middle">Hüküm ve koşulları</a>
                                kabul ediyorum.
                            </label>
                        </div>
                    </div>
                    <div class="my-8 text-center">
                        <button type="submit" class="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">Kayıt Ol
                        </button>
                    </div>
                </form>
                <div class="text-center">
                    <p class="text-white">
                        Zaten üye misiniz ? <RouterLink :to="{name: 'login'}" as="link" class="text-white underline fw-medium"> Oturum Aç </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>