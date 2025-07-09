<template>
  <NavBar />
  <div class="py-16">
    <router-view />
  </div>
</template>
<script setup>
import NavBar from "./layout/NavBar.vue";
</script>
