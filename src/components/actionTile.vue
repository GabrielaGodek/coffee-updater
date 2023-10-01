<template>
<div class="flex flex-column place-content-center border-solid border-2 ring-1 ring-inset ring-gray-300 rounded-md py-8 cursor-pointer">
    <router-link to="linkTo" :title="actionType" class="text-center" >
        <img :src="iconSrc" :alt="actionType" class="my-0 mx-auto">
        <h3 class="ź py-1.5">{{ actionType }}</h3>
    </router-link>
</div>
  </template>

<script>
export default {
    name: 'actionTile', 
    props: {
        actionType: String,
        iconSrc: String,
        linkTo: String
    }

}
</script>

<style>

</style>