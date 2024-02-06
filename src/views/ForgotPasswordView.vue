<script setup>

import DarkModeToggle from "@/components/DarkModeToggle.vue";
</script>

<template>
    <div class="fixed bottom-0 end-0 mb-3 me-3">
        <DarkModeToggle button-class="w-14 h-14 bg-neutral-800 hover:bg-neutral-500 dark:bg-slate-50 dark:hover:bg-slate-300 text-white dark:text-neutral-900"
                        icon-class="w-8 h-8"/>
    </div>

    <section class="flex items-center justify-center min-h-screen py-10 group-data-[theme-color=violet]:bg-violet-500/10 group-data-[theme-color=sky]:bg-sky-500/10 group-data-[theme-color=red]:bg-red-500/10 group-data-[theme-color=green]:bg-green-500/10 group-data-[theme-color=pink]:bg-pink-500/10 group-data-[theme-color=blue]:bg-blue-500/10 dark:bg-neutral-700">
        <div class="col-span-6 rounded-b-md lg:col-span-6 group-data-[theme-color=violet]:bg-violet-700 group-data-[theme-color=sky]:bg-sky-700 group-data-[theme-color=red]:bg-red-700 group-data-[theme-color=green]:bg-green-700 group-data-[theme-color=pink]:bg-pink-700 group-data-[theme-color=blue]:bg-blue-700 lg:rounded-lg">
            <div class="flex flex-col justify-center h-full p-12">
                <div class="text-center">
                    <h5 class="text-[18.5px] text-white">
                        Şifre Yenile
                    </h5>
                    <p class="mt-3 text-white/80">Kariyer Tur şifrenizi sıfırlayın.</p>
                </div>
                <div class="px-3 py-5 mt-8 mb-5 text-center text-yellow-800 rounded-md bg-yellow-50" role="alert">  Enter your Email and instructions will be sent to you!  </div>
                <form action="index.html" class="mt-8">
                    <div class="mb-5">
                        <label for="email" class="text-white">E-posta</label>
                        <input type="text" class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-white/50 text-white" required="" id="usernameInput" placeholder="Enter username or email">
                    </div>

                    <div class="my-5 text-center">
                        <button type="submit" class="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">Sıfırlama Bağlantısı Gönder</button></div>
                </form>
                <div class="mt-8 text-center">
                    <p class="text-white/50">Hatırladım ? <RouterLink to="login" as="link" class="text-white underline fw-medium"> Giriş Yap </RouterLink></p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>