<script setup>
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import Label from "@/components/Label.vue";
import Input from "@/components/Input.vue";
import AppLink from "@/components/AppLink.vue";
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
                    <h5 class="text-[18.5px] text-white">Kariyer Tur Kullanıcı Girişi</h5>
                    <p class="mt-3 text-white/80">Kariyer Tur'a devam etmek için oturum açın.</p>
                </div>
                <form action="index.html" class="mt-8">
                    <div class="mb-5">
                        <Label for="email" value="E-Posta Adresi" class="text-white"/>
                        <input type="text" class="w-full mt-1 bg-green-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" required name="email" id="email" placeholder="E-posta adresi">
                    </div>
                    <div class="mb-5">
                        <Label for="password" value="Parola" class="text-white"/>
                        <input type="password" class="w-full mt-1 bg-green-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" id="password" name="password" placeholder="Parola">
                    </div>
                    <div>
                        <input class="align-middle border-transparent rounded focus:ring-0 focus:ring-offset-0 bg-green-500" type="checkbox" id="remember_me">
                        <AppLink :to="{name: 'register'}" class="text-white float-right">
                            Parolanızı mı unuttunuz ?
                        </AppLink>
                        <Label class="text-white align-middle ms-2" for="remember" value="Beni Hatırla"/>
                    </div>
                    <div class="my-8 text-center">
                        <button type="submit" class="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">
                            Giriş Yap
                        </button>
                    </div>
                </form>
                <div class="text-center">
                    <p class="text-white">
                        Henüz kayıtlı değil misiniz ?
                        <AppLink :to="{name: 'register'}" class="text-white underline font-medium">
                            Kayıt Ol
                        </AppLink>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>