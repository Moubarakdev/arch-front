<template>
    <div>
        <main>
            <section class="absolute w-full h-full">
                <div class="absolute w-full h-full bg-bg-login bg-white"
                    style="background-size: 100%; background-repeat: no-repeat"></div>
                <div class="container mx-auto px-4 h-full">
                    <div class="flex content-center items-center justify-center h-full">
                        <div class="w-full lg:w-4/12 px-4">


                            <div
                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-zinc-100">
                                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div class="text-gray-500 text-center mb-3 font-bold py-4">
                                        <h6 class="uppercase text-gray-600 text-sm font-bold">
                                            Créer un compte
                                        </h6>
                                    </div>
                                    <form>

                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Nom</label>
                                            <input type="text" v-model="user.name"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-theme-secondary w-full"
                                                placeholder="Name" style="
                                                    transition: all 0.15s ease
                                                        0s;
                                                " />
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Email</label>
                                            <input type="email" v-model="user.email"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-theme-secondary w-full"
                                                placeholder="Email" style="
                                                    transition: all 0.15s ease
                                                        0s;
                                                " />
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">mot de passe</label><input type="password"
                                                v-model="user.password"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-theme-secondary focus:ring w-full"
                                                placeholder="mot de passe" style="
                                                    transition: all 0.15s ease
                                                        0s;
                                                " />
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">
                                                Confirmer mot de passe</label><input type="password"
                                                v-model="user.password_confirmation"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-theme-secondary focus:ring w-full"
                                                placeholder="mot de passe" style="
                                                    transition: all 0.15s ease
                                                        0s;
                                                " />
                                        </div>
                                        <div class="text-center mt-6">
                                            <button
                                                class="bg-theme-secondary hover:bg-white hover:text-theme-secondary hover:border hover:border-theme-secondary text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="button" style="
                                                    transition: all 0.15s ease
                                                        0s;
                                                " @click="register()">
                                                valider
                                            </button>
                                        </div>
                                    </form>
                                    <div class="flex flex-wrap mt-6 text-gary-900">
                                        <div class="w-1/2">
                                            <a href="#pablo" class="hover:text-theme-secondary"><small>mot de passe oublié
                                                    ?</small></a>
                                        </div>
                                        <div class="w-1/2 text-right">
                                            <router-link to="/login" class="hover:text-theme-secondary"><small>Se
                                                    connecter</small></router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>



export default {

    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
        };
    },

    methods: {
        register() {
            this.$store.dispatch('register', this.user).then(res => {
                this.$toast.success(res.message);
                this.$router.push('/login')
            }).catch(error => {
                for (const [k, v] of Object.entries(error.response.data.errors)) {
                    this.$toast.error(`${v}`);
                }

            })
        },
    },

    components: {

    },
};
</script>
