<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

let email = ref("");
let emailError = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let handleSubmit = () => {
  if (!email.value || !emailRegex.test(email.value)) {
    emailError.value = true;
  } else {
    console.log(emailRegex.test(email.value));
    Swal.fire({
      icon: "success",
      title: "Merci",
      text: `${email.value} a souscrit à notre newsletter!`,
    });
  }
};
</script>

<template>
  <!-- Newsletter Section Start -->
  <div id="subscribe" class="bg-theme-primary mt-10">
    <div class="container w-full lg:w-2/5 mx-auto px-5">
      <section class="py-16">
        <h4 class="text-sm tracking-widest uppercase text-center text-white font-theme-heading">
          35 000+ ONT DÉJÀ ADHÉRÉ
        </h4>
        <h2 class="text-3xl md:text-4xl font-medium text-center text-white mt-9 mb-10 font-theme-heading">
          Restez au courant de ce que nous faisons
        </h2>

        <form @submit.prevent="handleSubmit()">
          <div class="relative flex flex-col items-center lg:flex-row justify-center lg:space-x-3">
            <div class="relative w-full lg:mb-0 font-theme-content">
              <input v-model="email" @input="emailError = false"
                class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300"
                type="text" name="newsletter_email" placeholder="Email " />
              <div v-show="emailError">
                <img class="absolute right-3 top-3" src="/assets/images/icon-error.svg" alt="Error Icon" />
                <div class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">
                  Whosps, assurez-vous qu'il s'agit bien d'une adresse electronique
                </div>
              </div>
            </div>

            <Button type="submit" btn-type="secondary">
              S'abonner
            </Button>
          </div>
        </form>
      </section>
    </div>
  </div>
  <!-- Newsletter Section End -->
</template>
