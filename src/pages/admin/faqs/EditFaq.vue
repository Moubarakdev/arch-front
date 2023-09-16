<template>
    <!-- Add feature Modal -->
    <div class="block items-center justify-center overflow-x-hidden overflow-y-auto py-6 md:inset-0 h-modal sm:h-full">
        <div class="mx-auto w-full h-full max-w-2xl px-4 md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                    <h3 class="text-xl font-semibold dark:text-white">
                        Edit faq
                    </h3>

                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <form @submit.prevent="updateFaq()">
                        <div class="grid grid-cols-6 gap-6">

                            <div class="col-span-6 sm:col-span-3">
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" id="title" v-model="faq.title"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Green" :required="true" :minlength="4">
                            </div>

                            <div class="col-span-6">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="4" v-model="faq.description"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="👨‍💻Full-stack web developer. Open-source contributor." :required="true"
                                    :minlength="10" :maxlength="255"></textarea>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="items-center py-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="submit">Edit faq</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            faq: {}
        }
    },
    created() {
        this.axios
            .get(`http://localhost:8000/api/v1/faq/${this.$route.params.id}`)
            .then((res) => {
                this.faq = res.data.data;
                console.log(this.faq)
            })
            .catch(error => {
                for (const [k, v] of Object.entries(error.response.data.errors)) {
                    this.$toast.error(`${v}`);
                }
            })
    },
    methods: {
        updateFaq() {
            this.axios
                .patch(`http://localhost:8000/api/v1/faq/${this.$route.params.id}`, this.faq)
                .then(response => {
                    this.$toast.success(response.data.message)
                    this.$router.push({ name: 'Faqs' });
                }).catch(error => {
                    for (const [k, v] of Object.entries(error.response.data.errors)) {
                        this.$toast.error(`${v}`);
                    }

                })
                .finally(() => this.loading = false)
        },

    }
}

</script>
