<script setup>

import Pagination from "@/components/Pagination.vue";
import Combobox from "@/components/Combobox.vue";
</script>

<template>
    <div>
        <div class="grid items-center grid-cols-12 mb-4">
            <div class="col-span-12 lg:col-span-8">
                <div class="mb-3 mb-lg-0">
                    <h6 class="text-gray-900 text-16 dark:text-gray-50"> Showing 1 – 8 of 11 results </h6>
                </div>
            </div><!--end col-->


            <div class="col-span-12 lg:col-span-4">
                <div class="candidate-list-widgets">
                    <div class="grid items-center grid-cols-12 gap-3">
                        <div class="col-span-12 lg:col-span-6">
                            <Combobox/>
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <Combobox/>
                        </div>
                    </div>
                </div><!--end candidate-list-widgets-->
            </div><!--end col-->
        </div>
        <div class="mt-8">
            <div class="grid grid-cols-1 gap-y-5">
                <div class="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out   hover:border-green-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 lg:col-span-1">
                            <a href="company-details.html"><img src="/src/assets/images/featured-job/img-01.png" alt="" class="img-fluid rounded-3"></a>
                        </div><!--end col-->
                        <div class="col-span-12 lg:col-span-9">
                            <div class="mt-4 ms-5 lg:mt-0">
                                <h5 class="mb-1 text-17"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Business Associate</a></h5>
                                <ul class="flex gap-3 mb-0">
                                    <li class="">
                                        <p class="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                                    </li>
                                    <li class="">
                                        <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="mdi mdi-map-marker"></i> California</p>
                                    </li>
                                    <li class="">
                                        <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                    </li>
                                </ul>
                                <div class="flex flex-wrap gap-2 mt-3">
                                    <span class="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">Part Time</span>
                                    <span class="px-2 py-0.5 mt-1 font-medium text-yellow-500 rounded bg-yellow-500/20 text-13">Urgent</span>
                                </div>
                            </div>
                        </div><!--end col-->
                        <div class="items-center col-span-12 lg:col-span-2">
                            <ul class="flex flex-wrap gap-3 mt-4 ms-5 lg:mt-0">
                                <li class="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                    <a href="manage-jobs-post.html" class="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
                                        <i class="uil uil-edit"></i>
                                    </a>
                                </li>
                                <li class="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" class="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
                                        <i class="uil uil-trash-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div><!--end col-->
                    </div><!--end row-->
                </div>
            </div>
        </div>
        <Pagination/>
    </div>
</template>

<style scoped>

</style>