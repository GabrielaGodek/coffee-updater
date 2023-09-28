<template>
    <section class="form max-h-screen flex flex-1 justify-center items-center
     min-h-full flex-col">
      <coffee-form></coffee-form>
    </section>
  </template>
  
  <script>
  import coffeeForm from '@/components/coffeeForm.vue'
  export default {
    name: 'addView',
    components: {
      coffeeForm
    }
  }
  </script>
  
  <style></style>
  