

<template>
      <div class=""></div>
</template>

<script>
export default {
      created() {
            this.$store.dispatch('logout').then(res => {
                  this.$toast.success(res.message)
                  this.$router.push('/')
            }).catch(error => {
                  for (const [k, v] of Object.entries(error.response.data.errors)) {
                        this.$toast.error(`${v}`);
                  }

            })
      }
}
</script>