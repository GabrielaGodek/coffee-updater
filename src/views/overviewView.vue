<template>
    <section class="">
      <h1 class="text-center text-2xl font-bold tracking-widest text-gray-900">Dashboard</h1>
      <h2 class="text-xl font-bold tracking-widest text-gray-900 pt-10 pb-5">Actions for coffees</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 content-center">
          <action-tile linkTo="/coffee" actionType="View all coffees" :iconSrc="this.icon"></action-tile>
          <action-tile actionType="Add new coffee" :iconSrc="this.icon"></action-tile>
          <action-tile actionType="Update coffee" :iconSrc="this.icon"></action-tile>
          <action-tile actionType="Delete coffee" :iconSrc="this.icon"></action-tile>
        </div>
        
        <h2 class="text-xl font-bold tracking-widest text-gray-900 pt-10 pb-5">Actions for users</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 content-center">
            <action-tile actionType="See all users" :iconSrc="this.icon"></action-tile>
            <action-tile actionType="Delete user" :iconSrc="this.icon"></action-tile>
            <action-tile actionType="Add user" :iconSrc="this.icon"></action-tile>
        </div>
  </section>
</template>

<script>
import actionTile from "@/components/actionTile.vue"
export default {
    name: "overviewView",
    components: {
        actionTile
    },
    data(){
        return {
            icon: 'https://raw.githubusercontent.com/GabrielaGodek/CoffeeShop-Database/3857a0bfefe77a005f618fd9a2bf9d2f131a0130/public/Latte.svg'
        }
    }

}
</script>

<style>

</style>