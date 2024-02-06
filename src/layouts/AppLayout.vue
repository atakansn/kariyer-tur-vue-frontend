<script setup>
import NavbarTop from "@/components/NavbarTop.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Subscribe from "@/components/Subscribe.vue";
import {onMounted} from "vue";

onMounted(() => {
    //Window scroll sticky class add
    function windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("shadow", "nav-sticky");
        } else {
            navbar.classList.remove("shadow", "nav-sticky");
        }
    }

    window.addEventListener('scroll', (ev) => {
        ev.preventDefault();
        windowScroll();
    })
})
</script>

<template>
    <NavbarTop/>

    <Navbar/>

    <div class="main-content">
        <div class="page-content">
            <slot/>
        </div>
    </div>

    <Subscribe/>

    <Footer/>
</template>

<style scoped>

</style>