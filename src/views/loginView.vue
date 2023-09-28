<template>
  <section class="form max-h-screen flex flex-1 justify-center items-center
   min-h-full flex-col">
    <form-item></form-item>
  </section>
</template>

<script>
import formItem from '@/components/formItem.vue'
export default {
  name: 'loginView',
  components: {
    formItem
  }
}
</script>

<style></style>
