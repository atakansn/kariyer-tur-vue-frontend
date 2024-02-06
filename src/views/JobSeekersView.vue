<script setup>

import Combobox from "@/components/Combobox.vue";
import Pagination from "@/components/Pagination.vue";
import PageTitleWithBreadCrumb from "@/components/PageTitleWithBreadCrumb.vue";
</script>

<template>
    <PageTitleWithBreadCrumb page-title="Adaylar"/>

    <!-- Start grid -->
    <section class="py-20">
        <div class="container mx-auto">
            <div class="col-span-12">
                <div class="job-list-header">
                    <form action="#">
                        <div class="grid grid-cols-12 lg:gap-3 gap-y-3">
                            <div class="col-span-12 xl:col-span-3">
                                <div class="relative filler-job-form">
                                    <i class="uil uil-briefcase-alt"></i>
                                    <input type="search" class="w-full filter-job-input-box dark:text-gray-100" id="exampleFormControlInput1" placeholder="Job, company... ">
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-span-12 xl:col-span-3">
                                <div class="relative filler-job-form">
                                    <i class="uil uil-location-point"></i>
                                    <Combobox input-class="w-full pl-9 pr-8 filter-job-input-box dark:text-gray-100"
                                              placeholder="Konum"/>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-span-12 xl:col-span-3">
                                <div class="relative filler-job-form">
                                    <i class="uil uil-clipboard-notes"></i>
                                    <Combobox input-class="w-full pl-9 pr-8 filter-job-input-box dark:text-gray-100"
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
            </div>
            <div class="mt-5">
                <div class="grid items-center grid-cols-12">
                    <div class="col-span-12 lg:col-span-8">
                        <h6 class="mb-0 text-gray-900 fs-16 dark:text-gray-50"> Showing 1 – 8 of 11 results </h6>
                    </div>
                    <div class="col-span-12 lg:col-span-4">
                        <div class="grid grid-cols-12 gap-y-3 lg:gap-3">
                            <div class="col-span-12 lg:col-span-6">
                                <div class="mt-2 mt-lg-0">
                                    <Combobox input-class="w-full text-sm h-11 pl-3 pr-8 rounded-md border-gray-100/50 dark:bg-neutral-700 dark:border-gray-100/20 focus:ring-0 focus:ring-offset-0"
                                              placeholder="Varsayılan"/>
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <div class="mt-2 mt-lg-0">
                                    <Combobox input-class="w-full text-sm h-11 rounded-md border-gray-100/50 dark:bg-neutral-700 dark:border-gray-100/20 focus:ring-0 focus:ring-offset-0"
                                              placeholder="Tümü"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 space-y-6">
                <div class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                    <div class="grid items-center grid-cols-12">
                        <div class="col-span-12 md:col-auto">
                            <div>
                                <a href="javascript:void(0)"><img src="/src/assets/images/user/img-01.jpg" alt="" class="w-16 h-16 p-1 rounded-full outline outline-2 outline-gray-100/50 dark:outline-neutral-600"></a>
                            </div>
                        </div><!--end col-->

                        <div class="col-span-12 md:col-span-5">
                            <div class="mt-3 mt-lg-0">
                                <h5 class="mb-0 text-gray-900 text-19 dark:text-white"><a href="candidate-details.html">Charles Dickens</a> <span class="px-2 py-1 text-sm text-white bg-green-500 rounded"><i class="align-middle mdi mdi-star"></i> 4.8</span></h5>
                                <p class="mb-2 text-gray-500 text-muted dark:text-gray-300"> Project Manager</p>
                                <ul class="flex flex-wrap gap-3 text-gray-500 dark:text-gray-300">
                                    <li class="list-inline-item">
                                        <i class="mdi mdi-map-marker"></i> Oakridge Lane Richardson
                                    </li>
                                    <li class="list-inline-item">
                                        <i class="uil uil-wallet"></i> $650 / hours
                                    </li>
                                </ul>
                            </div>
                        </div><!--end col-->

                        <div class="col-span-12 md:col-span-4">
                            <div class="flex flex-wrap gap-2 mt-2 mt-lg-0">
                                <span class="px-2 py-1 text-sm font-medium text-green-500 rounded bg-green-500/20">Leader</span>
                                <span class="px-2 py-1 text-sm font-medium rounded bg-violet-500/20 text-violet-500">Manager</span>
                                <span class="px-2 py-1 text-sm font-medium text-yellow-500 rounded bg-yellow-500/20">Developer</span>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                    <div class="absolute top-4 ltr:right-4 rtl:left-4">
                        <div class="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded border-gray-100/50 hover:bg-red-600 hover:text-white dark:border-neutral-600 dark:hover:border-transparent">
                            <a href="javascript:void(0)"><i class="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    </section>
    <!-- End grid -->
</template>

<style scoped>

</style>