<template>
  <nav class="bg-slate-800 p-3 text-white fixed w-full z-50">
    <div class="flex justify-between items-center mx-auto container">
      <!-- You can uncomment this if you have a logo image -->
      <!-- <img
        src="/newlogo2.png"
        alt="Logo"
        class="h-35 w-35 bg-transparent -my-4"
      /> -->
      <h1 class="text-2xl font-bold">LOGO/BRAND</h1>

      <!-- Hamburger Icon for Mobile -->
      <button
        class="md:hidden flex flex-col justify-center items-center p-2"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span
          :class="[
            'block h-1 w-6 bg-white mb-1 transition-all duration-300',
            { 'rotate-45 translate-y-2': menuOpen },
          ]"
        ></span>
        <span
          :class="[
            'block h-1 w-6 bg-white mb-1 transition-all duration-300',
            { 'opacity-0': menuOpen },
          ]"
        ></span>
        <span
          :class="[
            'block h-1 w-6 bg-white transition-all duration-300',
            { '-rotate-45 -translate-y-2': menuOpen },
          ]"
        ></span>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-6">
        <!-- Using router-link for internal navigation -->
        <router-link to="/" class="hover:text-slate-300 transition text-lg"
          >Home</router-link
        >
      </div>

      <!-- Mobile Menu (Conditional Rendering) -->
      <div
        v-if="menuOpen"
        class="absolute top-full left-0 w-full bg-slate-800 flex flex-col items-center md:hidden shadow-lg"
      >
        <router-link
          to="/"
          class="py-3 w-full text-center hover:bg-slate-700 transition text-lg"
          @click="closeMenu"
          >Home</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter for programmatic navigation if needed, though router-link is sufficient here

// State to control the mobile menu's open/close status
const menuOpen = ref(false);

// Function to close the mobile menu
const closeMenu = () => {
  menuOpen.value = false;
};

// You can use useRouter if you need to navigate programmatically
const router = useRouter();
</script>

<style scoped>
/* Scoped styles for this component, if any */
</style>
