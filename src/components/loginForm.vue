<template>
  <div class="flex basis-3/5  justify-center flex-col-reverse min-h-screen md:flex-row w-full">
    <div class="flex flex-col md:flex-1 md:basis-1/2 md:justify-center justify-start px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-center text-2xl font-bold tracking-widest text-gray-900">
          Register
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <vee-form class="space-y-6" :validation-schema="schema" @submit="onSubmit">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <vee-field
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="example@example.com"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              ></vee-field>
              <error-message class="text-error" name="email" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <vee-field
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              ></vee-field>
              <error-message class="text-error" name="password" />
            </div>
          </div>
          <!-- <vee-field type="password" name="confirm_password" id="confirm_password"></vee-field>
            <error-message class="text-error" name="confirm_password" /> -->
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-cta px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cta-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-600"
            >
              Sign in
            </button>
          </div>
        </vee-form>
      </div>
    </div>
    <div class="flex basis-2/5 md:flex-1 md:basis-1/2 min-h-full flex-col justify-center lg:px-8 py-3 bg-bg">
      <img class="mx-auto h-fit w-auto max-h-40 md:max-h-96" src="../../logo_startpage.svg" alt="Your Company" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'formItem',

  data() {
    return {
      recognized: ref(true),
      schema: {
        email: 'required|min:5|max:100|email',
        password: 'required|min:1|max:100',
        confirm_password: 'required|min:1|max:100|confirmed:@password'
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log(values)
    }
  }
}
</script>
