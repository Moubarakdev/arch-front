<template>
      <NavBar />
      <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
            <SideBar />
            <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                  <main class=" min-h-screen">
                        <router-view></router-view>
                  </main>
                  <Footer />
            </div>
      </div>
</template>


<script>
import NavBar from './layouts/admin/NavBar.vue';
import Footer from './layouts/admin/Footer.vue';
import SideBar from './layouts/admin/SideBar.vue'
import './assets/js/index.js'
export default {
      computed() {
            return this.$store.state.token
      },

      created() {
            this.axios.defaults.headers.common["Authorization"] =
                  "Bearer " + this.$store.state.token;
      },
      components: {
            NavBar,
            Footer,
            SideBar
      },
};


</script>
  