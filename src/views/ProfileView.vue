<script setup>
import PageTitleWithBreadCrumb from "@/components/PageTitleWithBreadCrumb.vue";
import Section from "@/components/Section.vue"
import ProfileSidebar from "@/components/ProfileSidebar.vue";
import Button from "@/components/AppButton.vue";

</script>

<template>
    <PageTitleWithBreadCrumb page-title="Profilim"/>

    <Section class="py-20">
        <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-4">
                <ProfileSidebar/>
            </div>
            <div class="col-span-12 lg:col-span-8">
                <div class="border rounded border-gray-100/50 dark:border-neutral-600 nav-tabs bottom-border-tab p-6">
                    <RouterView/>
                </div>
            </div>
        </div>
    </Section>
</template>

<style scoped>
</style>