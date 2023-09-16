
<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto p-5 overflow-x-hidden lg:overflow-x-visible">
        <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
            <router-link :to="{ name: 'editHero', params: { id: hero.id } }" type="button"
                class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                    </path>
                    <path fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"></path>
                </svg>
                Edit hero section
            </router-link>
        </div>
        <div class=" border border-1 my-4">
            <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center m-3">
                <div class="lg:w-5/6 order-2 lg:order-none">
                    <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">
                        {{ hero.h1 }}
                    </h1>
                    <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">
                        {{ hero.paragraph }}
                    </p>
                </div>
                <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                    <img class="z-10 w-full" :src="hero.image" />
                    <div
                        class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8">
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- Hero Section End -->
</template>
<script>
export default {
    data() {
        return {
            hero: {}
        }
    },
    created() {
        this.axios.get(`http://localhost:8000/api/v1/hero/${this.$route.params.id}`)
            .then(response => {
                this.hero = response.data.data;
            }).catch(error => {
                for (const [k, v] of Object.entries(error.response.data.errors)) {
                    this.$toast.error(`${v}`);
                }

            })
            .finally(() => this.loading = false);
    },
    methods: {

    },
}
</script>
