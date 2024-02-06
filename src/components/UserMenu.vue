<script setup>

</script>

<template>
    <div class="relative dropdown">
        <button type="button" class="flex items-center px-4 py-5 dropdown-toggle"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <img class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                 src="/src/assets/images/user/img-02.jpg"
                 alt="Header Avatar">
            <span class="hidden fw-medium xl:block dark:text-gray-50">Kullanıcı Adı</span>
        </button>
        <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
            id="profile/log" aria-labelledby="navNotifications">
            <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                   href="manage-jobs.html">İşleri Yönet</a>
            </li>
            <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                <a class="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                   href="bookmark-jobs.html">Favori İşler</a>
            </li>
            <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                <RouterLink class="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                   :to="{name: 'profile-overview'}" as="link">Profilim</RouterLink>
            </li>
            <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                <a class="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                   href="sign-out.html">Çıkış Yap</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>