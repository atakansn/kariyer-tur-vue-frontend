<script setup>
import {BriefcaseIcon, MapPinIcon, MagnifyingGlassIcon, ArrowRightIcon} from "@heroicons/vue/16/solid/index.js";
import Swiper from "@/components/Swiper.vue";
import Blog from "@/components/Blog.vue";
import NavTab from "@/components/NavTab.vue";
import Section from "@/components/Section.vue"
import Combobox from "@/components/Combobox.vue";
import JobCategoriesList from "@/components/JobCategoriesList.vue";
import Tabs from "@/components/Tabs.vue";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import {StarIcon} from "@heroicons/vue/24/solid/index.js";
import Tab from "@/components/Tab.vue";
import AppLink from "@/components/AppLink.vue";

const tabLists = ref(
    [
        {
            name: 'iş ilanı 1',
            employeeType: ['tam çalışan']
        },
        {
            name: 'iş ilanı 2',
            employeeType: ['tam çalışan', 'yarı zaman']
        },
        {
            name: 'iş ilanı 3',
            employeeType: ['yarı zaman']
        },
        {
            name: 'iş ilanı 4',
            employeeType: ['acil']
        }
    ]
)


const loadCountries = (setOptions) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(results => {
            // return [
            //     ...results.map(result => result.title)
            // ]
            setOptions(
                results.map(result => {
                    return {
                        value: result.id,
                        label: result.title
                    }
                })
            )
        })
}


</script>

<template>
    <!-- start home -->
    <Section class="relative bg-green-500/20 py-28 dark:bg-green-500/20">
        <div class="grid items-center grid-cols-12 gap-10">
            <div class="col-span-12 lg:col-span-7">
                <div class="mb-3 mr-14">
                    <h6 class="mb-3 text-sm text-gray-900 uppercase dark:text-gray-50">
                        150.000'den fazla canlı işimiz var
                    </h6>
                    <h1 class="mb-3 text-5xl font-semibold leading-tight text-gray-900 dark:text-gray-50">
                     <span class="font-bold text-green-500">
                         Kariyer Tur
                     </span> <br> ile hayalinizdeki işi bulun
                    </h1>
                    <p class="text-lg font-light text-gray-500 whitespace-pre-line dark:text-gray-300">
                        İş bulun, izlenebilir özgeçmişler oluşturun ve uygulamalarınızı zenginleştirin.
                        Farklı sektörlerin ihtiyaçları analiz edildikten sonra özenle hazırlanmıştır.
                    </p>
                </div>
                <form action="#">
                    <div class="registration-form">
                        <div class="grid grid-cols-12">
                            <div class="col-span-12 xl:col-span-4">
                                <div class="mt-3 rounded-l filter-search-form filter-border mt-md-0">
                                    <BriefcaseIcon class="w-5 h-5 absolute top-5 ml-3 text-blue-500"/>

                                    <input type="search"
                                           class="md:w-full filter-input-box placeholder:text-gray-300 placeholder:text-13 dark:text-gray-300"
                                           placeholder="İş, Şirket Adı...">
                                </div>
                            </div><!--end col-->
                            <div class="col-span-12 xl:col-span-4">
                                <div class="mt-3 filter-search-form mt-md-0">
                                    <MapPinIcon class="w-5 h-5 absolute top-5 ml-3 text-blue-500 z-10"/>

                                    <Combobox :options="loadCountries"/>
                                </div>
                            </div><!--end col-->
                            <div class="col-span-12 xl:col-span-4">
                                <div class="h-full mt-3">
                                    <button class="btn inline-flex justify-center bg-green-500 border rounded-lg border-transparent xl:rounded-l-none w-full py-[18px] text-white" type="submit">
                                        <MagnifyingGlassIcon class="w-5 h-5 me-1"/> İş Bul
                                    </button>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </form>
            </div>

            <!-- Swiper Slider -->
            <div class="col-span-12 lg:col-span-5">
                <div class="relative mt-5 mt-lg-0 ms-xl-5">
                    <Swiper/>
                </div>
            </div>
        </div>
    </Section>
    <!-- end home -->

    <!-- start category -->
    <Section class="py-20 dark:bg-neutral-800">
        <div class="grid grid-cols-1 gap-5">
            <div class="text-center">
                <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">İş Kategorileri</h3>
                <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">
                    Bize projenizden bahsetmek için bir iş gönderin. Sizi hızlı bir şekilde doğru serbest çalışanlarla eşleştireceğiz.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-5">
            <JobCategoriesList v-for="i in 12"/>
        </div>
        <div class="grid grid-cols-1">
            <div class="mt-5 text-center">
                <AppLink :to="{name: 'is-kategorileri'}" class="text-white inline-flex items-center align-middle border-transparent bg-green-500 btn hover:-translate-y-2">
                    Tüm Kategorilere Göz Atın <ArrowRightIcon class="ms-2 w-5 h-5"/>
                </AppLink>
            </div>
        </div>
    </Section>
    <!-- end category -->

    <!-- start job list -->
    <Section class="py-20 bg-gray-50 dark:bg-neutral-700">
        <div class="grid grid-cols-1 gap-5">
            <div class="mb-5 text-center">
                <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Yeni ve Rastgele İşler</h3>
                <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">
                    Bize projenizden bahsetmek için bir iş ilanı verin. Sizi hızlı bir şekilde doğru kişiyle eşleştireceğiz.
                </p>
            </div>
        </div>

        <Tabs>
            <Tab :title="tab" v-for="tab in ['Yeni', 'Öne Çıkanlar', 'Tam Zamanlı', 'Yarı Zamanlı', 'Serbest', 'Sözleşmeli']">
                <template v-for="job in ['Yeni', 'Öne Çıkanlar', 'Tam Zamanlı']">
                    <div class="block w-full tab-pane">
                        <div class="pt-8">
                            <div class="space-y-8">
                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs hover:border-green-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                    <!-- Star -->
                                    <div class="w-48 absolute -top-[4px] -left-20 -rotate-45 bg-green-500/20 group-hover/jobs:bg-green-500 transition-all duration-500 ease-in-out p-[10px] text-center dark:bg-violet-500/20">
                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle">
                                            <StarIcon class="w-6 h-6 ms-[77px] mt-1"/>
                                        </a>
                                    </div>
                                    <div class="p-4">
                                        <div class="grid items-center grid-cols-12">
                                            <div class="col-span-12 lg:col-span-2">
                                                <div class="mb-4 text-center mb-md-0">
                                                    <a href="company-details.html"><img
                                                            src="/src/assets/images/featured-job/img-01.png"
                                                            alt="" class="mx-auto img-fluid rounded-3"></a>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-span-12 lg:col-span-3">
                                                <div class="mb-2 mb-md-0">
                                                    <h5 class="mb-1 fs-18"><a href="job-details.html"
                                                                              class="text-gray-900 dark:text-gray-50">Web
                                                        Developer</a>
                                                    </h5>
                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Web
                                                        Technology pvt.Ltd</p>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-span-12 lg:col-span-3">
                                                <div class="mb-2 lg:flex">
                                                    <div class="flex-shrink-0">
                                                        <i class="mr-1 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 mdi mdi-map-marker"></i>
                                                    </div>
                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Oakridge
                                                        Lane ssRichardson</p>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-span-12 lg:col-span-2">
                                                <div>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span
                                                            class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">$</span>1000-1200/m
                                                    </p>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-span-12 lg:col-span-2">
                                                <div class="flex flex-wrap gap-1.5">
                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                    <span class="badge bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">Private</span>
                                                </div>
                                            </div>
                                            <!--end col-->
                                        </div>
                                        <!--end row-->
                                    </div>
                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                        <div class="grid grid-cols-12">
                                            <div class="col-span-12 lg:col-span-4">
                                                <div>
                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span
                                                            class="text-gray-900 dark:text-gray-50">Experience :</span>
                                                        1
                                                        - 2 years</p>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-span-12 lg:col-span-6">
                                                <div>
                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span
                                                            class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                        languages only differ in their grammar. </p>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-span-3 lg:col-span-2">
                                                <div class="text-start text-md-end dark:text-gray-50">
                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i
                                                            class="mdi mdi-chevron-double-right"></i></a>
                                                </div>
                                            </div>
                                            <!--end col-->
                                        </div>
                                        <!--end row-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Tab>
        </Tabs>

        <div class="nav-tabs chart-tabpill">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <div class="p-1.5 bg-white dark:bg-neutral-900 shadow-lg shadow-gray-100/30 rounded-lg dark:shadow-neutral-700">

                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <div class="grid grid-cols-1">
                <div class="text-center">
                    <AppLink :to="{name: 'is-ilanlari'}" class="text-white inline-flex items-center align-middle border-transparent bg-green-500 btn hover:-translate-y-2">
                        Daha Fazla Görüntüle <ArrowRightIcon type="micro" class="ms-1.5 w-5 h-5"/>
                    </AppLink>
                </div>
            </div>
        </div>
    </Section>
    <!-- end job list -->

    <!-- start process -->
    <Section class="py-20 dark:bg-neutral-800">
        <div class="nav-tabs round-pill">
            <div class="grid items-center grid-cols-12 gap-5">
                <div class="col-span-12 lg:col-span-6">
                    <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Nasıl Çalışır</h3>
                    <p class="text-gray-500 dark:text-gray-300">
                        Bize projenizden bahsedin. Sizi hızla uygun serbest çalışanlarla eşleştireceğiz.
                    </p>

                    <div class="mt-5">
                        <ul class="text-gray-700 nav">
                            <li class="w-full mb-[22px]">
                                <a href="javascript:void(0);" data-tw-toggle="tab"
                                   data-tw-target="v-pills-home-tab"
                                   class="relative inline-block w-full p-2 active group/active"
                                   aria-current="page">
                                    <div
                                            class="after:content-[''] after:h-[65px] after:border after:border-dashed after:border-gray-100 after:absolute ltr:after:left-7 rtl:after:right-7 after:-bottom-5 after:group-[.active]:bg-violet-300 hidden md:block"></div>
                                    <div class="flex">
                                        <div
                                                class="shrink-0 h-10 w-10 rounded-full text-center bg-gray-500/20 group-[.active]:group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:group-[.active]:bg-sky-500 group-data-[theme-color=red]:group-[.active]:bg-red-500 group-data-[theme-color=green]:group-[.active]:bg-green-500 group-data-[theme-color=pink]:group-[.active]:bg-pink-500 group-data-[theme-color=blue]:group-[.active]:bg-blue-500">
                            <span
                                    class="text-gray-900 group-[.active]:text-white text-16 leading-[2.5] dark:text-gray-50">1</span>
                                        </div>
                                        <div class="grow ltr:ml-4 rtl:mr-4">
                                            <h5 class="fs-18 text-gray-900 group-data-[theme-color=violet]:group-[.active]:text-violet-500 group-data-[theme-color=sky]:group-[.active]:text-sky-500 dark:text-gray-50">
                                                Bir hesap oluşturun
                                            </h5>
                                            <p class="mt-1 mb-2 text-gray-500 dark:text-gray-300">
                                                Yaygın olarak düzenlemelerde dolgu metni olarak kullanıldığından, okunabilirlik olmaması büyük öneme sahiptir.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="w-full mb-[22px]">
                                <a href="javascript:void(0);" data-tw-toggle="tab"
                                   data-tw-target="v-pills-profile"
                                   class="relative inline-block w-full p-2 group" aria-current="page">
                                    <div
                                            class="after:content-[''] after:h-[65px] after:border after:border-dashed after:border-gray-100 after:absolute ltr:after:left-7 rtl:after:right-7 after:-bottom-5 after:group-[.active]:bg-violet-300 hidden md:block"></div>
                                    <div class="flex">
                                        <div
                                                class="shrink-0 h-10 w-10 rounded-full text-center bg-gray-500/20 group-[.active]:bg-violet-500">
                            <span
                                    class="text-gray-900 group-[.active]:text-white text-16 leading-[2.5] dark:text-gray-50">2</span>
                                        </div>
                                        <div class="grow ltr:ml-4 rtl:mr-4">
                                            <h5 class="fs-18 text-gray-900 group-[.active]:text-violet-500 dark:text-gray-50">
                                                İşinizi Buluun
                                            </h5>
                                            <p class="mt-1 mb-2 text-gray-500">
                                                Avaibookmark etiketinin pek çok varyasyonu bulunmakla birlikte, çoğunlukla bir şekilde değişiklik gösterir.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="w-full mb-[22px]">
                                <a href="javascript:void(0);" data-tw-toggle="tab"
                                   data-tw-target="v-pills-messages"
                                   class="relative inline-block w-full p-2 group" aria-current="page">
                                    <div class="flex">
                                        <div
                                                class="shrink-0 h-10 w-10 rounded-full text-center bg-gray-500/20 group-[.active]:bg-violet-500">
                            <span
                                    class="text-gray-900 group-[.active]:text-white text-16 leading-[2.5] dark:text-gray-50">3</span>
                                        </div>
                                        <div class="grow ltr:ml-4 rtl:mr-4">
                                            <h5 class="fs-18 text-gray-900 group-[.active]:text-violet-500 dark:text-gray-50">
                                                İş Başvurusu Yapın
                                            </h5>
                                            <p class="mt-1 mb-2 text-gray-500">
                                                Bir okurun bir sayfanın okunabilir içeriği tarafından dikkati dağıtılacak uzun bir süreç olduğu uzun bir gerçektir.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="col-span-12 lg:col-span-6">
                    <div class="tab-content">
                        <div class="block tab-pane" id="v-pills-home-tab">
                            <img src="/src/assets/images/process-01.png" alt="" class="max-w-full">
                        </div>
                        <div class="hidden tab-pane" id="v-pills-profile">
                            <img src="/src/assets/images/process-02.png" alt="" class="max-w-full">
                        </div>
                        <div class="hidden tab-pane" id="v-pills-messages">
                            <img src="/src/assets/images/process-03.png" alt="" class="max-w-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <!-- end process -->

    <!-- start blog -->
    <Section class="py-20 bg-gray-50 dark:bg-neutral-700">
        <div class="grid grid-cols-1 gap-5">
            <div class="mb-5 text-center">
                <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">
                    <strong>Keşfedin:</strong> Güncel Bloglar
                </h3>
                <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">
                    Web sitemizdeki en son blog yazılarına göz atın. Her biri özenle hazırlanmış içeriklerle dolu, kaçırmayın!
                </p>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-5">
            <Blog v-for="i in 3"/>
        </div>
    </Section>
    <!-- end blog -->

    <!-- start client -->
    <Section class="py-10 dark:bg-neutral-800">
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-2">
                <img src="/src/assets/images/logo/logo-01.png" alt=""
                     class="mx-auto cursor-pointer h-9 lg:h-6 xl:h-9"
                     data-tooltip-target="tooltip-default">
                <div id="tooltip-default" role="tooltip"
                     class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-2">
                <img src="/src/assets/images/logo/logo-02.png" alt=""
                     class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9">
            </div>
            <div class="col-span-12 lg:col-span-2">
                <img src="/src/assets/images/logo/logo-03.png" alt=""
                     class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9">
            </div>
            <div class="col-span-12 lg:col-span-2">
                <img src="/src/assets/images/logo/logo-04.png" alt=""
                     class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9">
            </div>
            <div class="col-span-12 lg:col-span-2">
                <img src="/src/assets/images/logo/logo-05.png" alt=""
                     class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9">
            </div>
            <div class="col-span-12 lg:col-span-2">
                <img src="/src/assets/images/logo/logo-06.png" alt=""
                     class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9">
            </div>
        </div>
    </Section>
    <!-- end client -->
</template>