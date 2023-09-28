<template>
  <section class="form max-h-screen flex flex-1 justify-center items-center
   min-h-full flex-col">
    <login-form></login-form>
  </section>
</template>

<script>
import loginForm from '@/components/loginForm.vue'
export default {
  name: 'loginView',
  components: {
    loginForm
  }
}
</script>

<style></style>
