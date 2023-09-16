<template>
    <!-- Add feature Modal -->
    <div class="items-center justify-center overflow-x-hidden overflow-y-auto py-6 md:inset-0 h-modal sm:h-full">
        <div class="mx-auto w-full h-full max-w-2xl px-4 md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                    <h3 class="text-xl font-semibold dark:text-white">
                        Add new feature
                    </h3>

                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <form @submit.prevent="addFeature">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" v-model="feature.name"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Bonnie" :required="true">
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" id="title" v-model="feature.title"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Green" :required="true">
                            </div>

                            <div class="col-span-6">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="4" v-model="feature.description"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="👨‍💻Full-stack web developer. Open-source contributor."
                                    :required="true"></textarea>
                            </div>
                            <div class="col-span-6">
                                <label for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                class="font-semibold">Click to upload image</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" @change="onFileChange"
                                        :required="true" />
                                </label>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="items-center py-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="submit">Add feature</button>
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
            feature: {}
        }
    },
    methods: {
        addFeature() {
            let formData = new FormData();
            formData.append('name', this.feature.name);
            formData.append('title', this.feature.title);
            formData.append('description', this.feature.description);
            formData.append('image', this.feature.image);
            this.axios
                .post('http://localhost:8000/api/v1/feature', formData)
                .then(response => {
                    this.$toast.success(response.data.message)
                    this.$router.push({ name: 'Features' })
                }).catch(error => {
                    for (const [k, v] of Object.entries(error.response.data.errors)) {
                        this.$toast.error(`${v}`);
                    }

                })
                .finally(() => this.loading = false)
        },
        onFileChange(event) {
            this.feature.image = event.target.files[0]; // Prenez le premier fichier sélectionné
        }
    }
}

</script>
