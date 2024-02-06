<script setup>

import PageTitleWithBreadCrumb from "@/components/PageTitleWithBreadCrumb.vue";
import Pagination from "@/components/Pagination.vue";
import Combobox from "@/components/Combobox.vue";
</script>

<template>
    <PageTitleWithBreadCrumb page-title="Şirketler"/>

    <!-- Start grid -->
    <section class="py-20">
        <div class="container mx-auto">
            <div class="grid items-center grid-cols-12 mb-4">
                <div class="col-span-12 lg:col-span-8">
                    <div class="mb-3 mb-lg-0">
                        <h6 class="text-gray-900 text-16 dark:text-gray-50"> Showing 1 – 8 of 11 results </h6>
                    </div>
                </div><!--end col-->

                <div class="col-span-12 lg:col-span-4">
                    <div class="candidate-list-widgets">
                        <div class="grid items-center justify-items-end grid-cols-12 gap-3">
                            <div class="col-span-12 lg:col-span-6">
                                <Combobox input-class="w-full pr-8 text-sm h-11 mr-9 rounded-md border-gray-100/50 dark:bg-neutral-700 dark:border-gray-100/20 focus:ring-0 focus:ring-offset-0" placeholder="Varsayılan"/>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <Combobox input-class="w-full pr-8 text-sm h-11 mr-9 rounded-md border-gray-100/50 dark:bg-neutral-700 dark:border-gray-100/20 focus:ring-0 focus:ring-offset-0" placeholder="Tümü"/>
                            </div>
                        </div>
                    </div><!--end candidate-list-widgets-->
                </div><!--end col-->
            </div>
            <div class="mt-8">
                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-12 lg:col-span-4">
                        <div class="relative px-6 py-12 border rounded-md border-gray-100/50 dark:border-neutral-600">
                            <img src="/src/assets/images/featured-job/img-01.png" alt="" class="mx-auto">
                            <div class="mt-5 text-center">
                                <a href="company-details.html"><h6 class="mb-3 text-lg text-gray-900 dark:text-white">Jobcy Consulting</h6></a>
                                <p class="mb-6 text-gray-500 dark:text-gray-300">New York</p>

                                <a href="company-details.html" class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30">52 Opening Jobs</a>
                            </div>
                            <div class="absolute px-2 text-white bg-violet-500 top-3 ltr:right-0 rtl:left-0">
                                <span class="relative text-xs font-medium uppercase">4.9 <i class="mdi mdi-star-outline"></i></span>
                                <div class="after:contant[] ltr:after:border-r-[11px] rtl:after:border-l-[11px] after:absolute after:border-b-[11px] ltr:after:-left-[11px] rtl:after:-right-[11px] after:top-0 after:border-t-[11px] after:border-t-transparent after:border-violet-500 after:border-b-transparent"></div>
                            </div>
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