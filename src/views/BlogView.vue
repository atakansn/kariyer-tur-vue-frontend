<script setup>
import PageTitleWithBreadCrumb from "@/components/PageTitleWithBreadCrumb.vue";
import Pagination from "@/components/Pagination.vue";
</script>

<template>
    <PageTitleWithBreadCrumb page-title="Blog"/>

    <section class="py-16">
        <div class="container mx-auto">
            <div class="grid grid-cols-12 md:gap-12 gap-y-8 md:gap-y-0">
                <div class="col-span-12 lg:col-span-8">
                    <div class="grid grid-cols-12 md:gap-5">
                        <div class="col-span-12 lg:col-span-6">
                            <div class="p-2 transition-all duration-500 bg-white rounded-md shadow-md hover:-translate-y-2 dark:bg-transparent dark:shadow-none">
                                <img src="/src/assets/images/blog/img-04.jpg" alt="" class="img-fluid">
                                <div class="p-5">
                                    <ul class="flex justify-between mb-3 list-inline">
                                        <li>
                                            <p class="mb-0 text-gray-500 dark:text-gray-300">
                                                <a href="blog-author.html" class="font-semibold text-muted">Alice Mellor</a> - Aug 08, 2021
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-0 text-gray-500 dark:text-gray-300"><i class="mdi mdi-eye"></i> 432</p>
                                        </li>
                                    </ul>
                                    <a href="blog-details.html" class="primary-link"><h6 class="text-gray-900 transition-all duration-300 text-17 dark:text-white group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500">Smartest Applications for Business</h6></a>
                                    <p class="mt-2 text-gray-500 dark:text-gray-300">Intrinsically incubate intuitive opportunities and real-time potentialities Appropriately communicate one-to-one technology.</p>
                                    <div class="mt-4 font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                        <a href="blog-details.html" class="form-text ">Read More <i class="uil uil-angle-right-b"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <Pagination/>
                </div>

                <div class="col-span-12 lg:col-span-4">
                    <form class="relative">
                        <input class="w-full rounded border-gray-100/50 placeholder:text-13 dark:border-zinc-600 dark:bg-transparent" type="search" placeholder="Arama...">
                        <button class="absolute text-gray-500 bg-transparent border-0 ltr:mr-2 rtl:ml-2 top-3 ltr:right-2 rtl:left-2 translate-middle-y" type="submit"><span class="mdi mdi-magnify text-muted"></span></button>
                    </form>

                    <div class="mt-8">
                        <h6 class="mb-2 text-gray-900 text-16 dark:text-gray-50">Kategoriler</h6>
                        <div class="w-full h-0.5 rounded-full bg-gray-100/60 dark:bg-gray-500/20">
                            <div class="group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 w-[25%] h-0.5 ltr:rounded-l-full rtl:rounded-r-full" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="my-4">
                            <div class="mb-3">
                                <input class="rounded cursor-pointer border-gray-100/50 bg-gray-50 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 checked:border-transparent focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:border-zinc-600 checked:dark:bg-violet-500/20" type="checkbox" value="" id="education">
                                <label class="align-middle ltr:ml-2 rtl:mr-2 dark:text-gray-300" for="education">Education</label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <h6 class="mb-2 text-gray-900 text-16 dark:text-gray-50">Popülar Gönderiler</h6>
                        <div class="w-full h-0.5 rounded-full bg-gray-100/60 dark:bg-gray-500/20">
                            <div class="group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 w-[25%] h-0.5 ltr:rounded-l-full rtl:rounded-r-full" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <ul class="my-4">
                            <li class="flex flex-wrap items-center pb-4 mb-4 border-b gap-y-3 md:gap-y-0 border-gray-100/50 dark:border-zinc-600">
                                <img src="/src/assets/images/blog/img-01.jpg" alt="" class="w-[86px] object-cover h-16 rounded">
                                <div class="ltr:ml-3 rtl:mr-3 grow">
                                    <a href="blog-details.html" class="overflow-hidden truncate dark:text-gray-50">The evolution of landing page creativity</a>
                                    <span class="block text-sm text-gray-500">Aug 10, 2021</span>
                                </div>
                            </li>
                            <li class="flex flex-wrap items-center pb-4 mb-4 gap-y-5 md:gap-3-0">
                                <img src="/src/assets/images/blog/img-10.jpg" alt="" class="w-[86px] object-cover h-16 rounded">
                                <div class="ltr:ml-3 rtl:mr-3 grow"><a href="blog-details.html" class="overflow-hidden truncate dark:text-gray-50">Smartest Applications for Business</a>
                                    <span class="block text-sm text-gray-500">Feb 01, 2021</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-8">
                        <h6 class="mb-2 text-gray-900 text-16 dark:text-gray-50">Etiketler</h6>
                        <div class="w-full h-0.5 rounded-full bg-gray-100/60 dark:bg-gray-500/20">
                            <div class="group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 w-[25%] h-0.5 ltr:rounded-l-full rtl:rounded-r-full" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">Fashion</a>
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">Jobs</a>
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">Business</a>
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">Corporate</a>
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">E-commerce</a>
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">Agency</a>
                            <a class="mt-2 text-xs font-medium px-2 py-0.5 text-center bg-gray-50 text-gray-600 rounded group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in dark:bg-gray-500/20 dark:text-gray-100 dark:hover:bg-violet-500/20 dark:hover:text-white" href="javascript:void(0)">Responsive</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>