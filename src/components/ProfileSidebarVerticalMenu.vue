<script setup>
import {
    AcademicCapIcon,
    BriefcaseIcon,
    ChatBubbleLeftEllipsisIcon,
    DocumentIcon,
    EyeIcon,
    HeartIcon,
    KeyIcon,
    UserIcon
} from "@heroicons/vue/24/outline/index.js";
import AppLink from "@/components/AppLink.vue";
</script>

<template>
    <nav class="space-y-1">
        <AppLink :to="{name: 'profile-overview'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <EyeIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Profil Ön İzleme</span>
        </AppLink>

        <AppLink :to="{name: 'profile-settings'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <UserIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Profil Ayarları</span>
        </AppLink>

        <AppLink :to="{name: 'password-update'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <KeyIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Parola Güncelleme</span>
        </AppLink>

        <AppLink :to="{name: 'favorite-jobs'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <HeartIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Favorilerim</span>
        </AppLink>

        <AppLink :to="{name: 'document-upload-process'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <DocumentIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Belge Yükleme İşlemleri</span>
        </AppLink>

        <AppLink :to="{name: 'education'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <AcademicCapIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Eğitim Ekle/Düzenle</span>
        </AppLink>

        <AppLink :to="{name: 'experience'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <BriefcaseIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">Deneyim Ekle/Düzenle</span>
        </AppLink>

        <AppLink :to="{name: 'contact'}"
                 active-class="bg-green-50 text-green-800"
                 inactive-class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                 class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <ChatBubbleLeftEllipsisIcon class="text-gray-800 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"/>
            <span class="truncate">İletişim Bilgilerim</span>
        </AppLink>
    </nav>
</template>

<style scoped>

</style>