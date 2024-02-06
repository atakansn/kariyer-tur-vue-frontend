<script setup>
import {onMounted} from "vue";
import Swiper from "swiper";
import 'swiper/css';

onMounted(() => {

    new Swiper(".home-slider", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    });
})
</script>

<template>
    <div class="swiper home-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="text-center home-slide-box">
                    <img src="/src/assets/images/home/img-02.png" alt=""
                         class="max-w-full rounded-3">
                    <div class="bg-overlay"></div>
                    <div class="absolute bottom-0 p-4">
                        <h2 class="text-white font-secound fw-normal">" It looks perfect on
                            all major browsers,
                            tablets,
                            and mobile devices."</h2>
                        <h6 class="text-white">- MichaeL Drake</h6>
                    </div>
                </div>
            </div><!--swiper-slide-->

            <div class="swiper-slide">
                <div class="text-center home-slide-box">
                    <img src="/src/assets/images/home/img-03.png" alt=""
                         class="max-w-full rounded-3">
                    <div class="bg-overlay"></div>
                    <div class="absolute bottom-0 p-4">
                        <h2 class="text-white font-secound fw-normal">" This template is
                            well organized and very easy
                            to
                            customize. "</h2>
                        <h6 class="text-white">- Charles Dickens</h6>
                    </div>
                </div>
            </div><!--swiper-slide-->

            <div class="swiper-slide">
                <div class="text-center home-slide-box">
                    <img src="/src/assets/images/home/img-04.png" alt=""
                         class="max-w-full rounded-3">
                    <div class="bg-overlay"></div>
                    <div class="absolute bottom-0 p-4">
                        <h2 class="text-white font-secound fw-normal">" All your client
                            websites if you are an agency
                            or
                            freelancer. "</h2>
                        <h6 class="text-white">- Rebecca Swartz</h6>
                    </div>
                </div>
            </div><!--swiper-slide-->

        </div><!--end sw-->
    </div>
</template>

<style scoped>

</style>