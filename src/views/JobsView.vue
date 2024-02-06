<script setup>

import Combobox from "@/components/Combobox.vue";
import {onMounted} from "vue";
import PageTitleWithBreadCrumb from "@/components/PageTitleWithBreadCrumb.vue";
import JobItem from "@/components/JobItem.vue";
import Pagination from "@/components/Pagination.vue";
import Accordion from "@/components/Accordion.vue";

</script>

<template>
    <PageTitleWithBreadCrumb page-title="İş İlanları"/>

    <!-- Start team -->
    <section class="py-16">
        <div class="container mx-auto">
            <div class="grid grid-cols-12 xl:gap-10 gap-y-12">
                <div class="col-span-12 xl:col-span-9">
                    <div class="job-list-header">
                        <form action="#">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12 xl:col-span-3">
                                    <div class="relative filler-job-form">
                                        <i class="uil uil-briefcase-alt"></i>
                                        <input type="search" class="w-full filter-job-input-box dark:text-gray-100" id="exampleFormControlInput1" placeholder="İş, şirket adı... ">
                                    </div>
                                </div>
                                <!--end col-->
                                <div class="col-span-12 xl:col-span-3">
                                    <div class="relative filler-job-form">
                                        <i class="uil uil-location-point"></i>
                                        <Combobox input-class="w-full filter-job-input-box dark:text-gray-100"
                                                  placeholder="Konum"/>
                                    </div>
                                </div>
                                <!--end col-->
                                <div class="col-span-12 xl:col-span-3">
                                    <div class="relative filler-job-form">
                                        <i class="uil uil-clipboard-notes"></i>
                                        <Combobox input-class="w-full filter-job-input-box dark:text-gray-100"
                                                  placeholder="Kategori"/>
                                    </div>
                                </div>
                                <!--end col-->
                                <div class="col-span-12 xl:col-span-3">
                                    <a href="javascript:void(0)" class="w-full text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30"><i class="uil uil-filter"></i> Filtrele</a>
                                </div>
                                <!--end col-->
                            </div>
                            <!--end grid-->
                        </form>
                    </div>

                    <div class="space-y-8 mt-14">
                        <JobItem/>
                    </div>

                    <!-- Pagination -->
                    <Pagination/>
                </div>
                <div class="col-span-12 space-y-5 lg:col-span-3">
                    <Accordion header="İş Deneyimi">
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Deneyim Yok</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20" checked type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">0-3 yıl</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">3-6 yıl</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">6 yıldan fazla</label>
                        </div>
                    </Accordion>
                    <Accordion header="Yayınlanma Tarihi">
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">All</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20" checked type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last Hour</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 24 hours</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 7 days</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 14 days</label>
                        </div>
                        <div class="mt-2">
                            <input class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 30 days</label>
                        </div>
                    </Accordion>
                    <Accordion header="Etiketler">
                        <div class="flex flex-wrap gap-2">
                            <a href="javascript:void(0)" class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">design</a>
                            <a href="javascript:void(0)" class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">marketing</a>
                            <a href="javascript:void(0)" class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">business</a>
                            <a href="javascript:void(0)" class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">developer</a>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
    <!-- End team -->
</template>

<style scoped>

</style>