<script setup>
import HeroSection from "../sections/HeroSection.vue";
import FeatureSection from "../sections/FeatureSection.vue";
import DownloadSection from "../sections/DownloadSection.vue";
import FaqSection from "../sections/FaqSection.vue";
import SubscribeSection from "../sections/SubscribeSection.vue";
import Footer from "./Footer.vue";
import Header from "./header.vue";
</script>

<template>
    <div class="overflow-x-hidden relative">
        <Header />

        <HeroSection />

        <FeatureSection />

        <!-- <DownloadSection /> -->

        <FaqSection />

        <SubscribeSection />

        <Footer />
    </div>
</template>
