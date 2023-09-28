<template>
  <div class="flex basis-3/5 justify-center flex-col-reverse min-h-screen md:flex-row w-full">
    <div
      class="flex flex-col md:flex-1 md:basis-1/2 md:justify-center justify-start px-6 py-12 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-center text-2xl font-bold tracking-widest text-gray-900">Add Coffee</h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <vee-form class="space-y-6" :validation-schema="schema" @submit="onSubmit">
          <div>
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
              <vee-field
                id="name"
                name="name"
                type="text"
                placeholder="Ice Latte"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              ></vee-field>
              <error-message class="text-error" name="name" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900"
                >Description</label
              >
            </div>
            <div class="mt-2">
              <vee-field
                id="description"
                name="description"
                type="text"
                placeholder="lorem ipsum"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              ></vee-field>
              <error-message class="text-error" name="description" />
            </div>
          </div>
          <div class="flex justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <label for="price" class="block text-sm font-medium leading-6 text-gray-900"
                    >Price</label
                  >
                </div>
                <div class="mt-2">
                  <vee-field
                    id="price"
                    name="price"
                    type="number"
                    placeholder="15"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
                  ></vee-field>
                  <error-message class="text-error" name="price" />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label for="sale_price" class="block text-sm font-medium leading-6 text-gray-900"
                    >Sale price</label
                  >
                </div>
                <div class="mt-2">
                  <vee-field
                    id="sale_price"
                    name="sale_price"
                    type="number"
                    placeholder="10"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
                  ></vee-field>
                  <error-message class="text-error" name="sale_price" />
                </div>
              </div>
          </div>
          <div>
            <label for="image" class="block text-sm font-medium leading-6 text-gray-900">Link to image</label>
            <div class="mt-2">
              <vee-field
                id="image"
                name="image"
                type="text"
                placeholder="https://"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              ></vee-field>
              <error-message class="text-error" name="image" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-cta px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cta-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-600"
            >
              Submit
            </button>
          </div>
        </vee-form>
      </div>
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
        name: 'required|min:5|max:100|email',
        description: 'required|min:1|max:1000',
        price: 'required|decimal',
        sale_price: 'decimal',
        image: 'required|url'
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
