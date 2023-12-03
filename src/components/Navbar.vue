<script setup>
import IconPlane from "./icons/IconPlane.vue";
import IconBell from "./icons/IconBell.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const showMenu = ref(false);
const isLoggedIn = ref(false);
const token = localStorage.getItem("token");

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

if (token) {
  isLoggedIn.value = true;
} else {
  isLoggedIn.value = false;
}

const handleLogOut = () => {
  localStorage.removeItem("token");
  isLoggedIn.value = false;
};
</script>

<template>
  <header>
    <nav class="flex justify-between items-center py-4 z-10">
      <div class="flex items-center space-x-2">
        <IconPlane />
        <span class="text-xl">my Dream Place</span>
      </div>

      <div class="md:hidden">
        <button @click="toggleMenu" class="text-xl">
          &#9776;
        </button>
      </div>

      <ul class="hidden md:flex space-x-8">
        <li>Home</li>
        <li>Discover</li>
        <li>Activities</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div class="hidden md:block">
        <div v-if="!isLoggedIn">
          <RouterLink
            to="/sign"
            class="bg-blue-500 rounded-md py-2 px-4 text-white"
            >Login</RouterLink
          >
        </div>
        <div v-else class="flex items-center space-x-1">
          <IconBell />
          <img
            src="../assets/img/dummyImg.jpg"
            alt="User Image"
            class="rounded-full h-8 w-8 cursor-pointer"
            @click="handleLogOut"
          />
        </div>
      </div>

      <ul
        v-show="showMenu"
        class="md:hidden flex flex-col items-center bg-white absolute top-16 right-0 p-4 shadow-md z-50"
      >
        <li>Home</li>
        <li>Discover</li>
        <li>Activities</li>
        <li>About</li>
        <li>Contact</li>
        <div>
          <RouterLink
            v-if="!isLoggedIn"
            to="/sign"
            class="bg-blue-500 rounded-md py-2 px-4 text-white"
            >Login</RouterLink
          >
          <div v-else class="flex items-center space-x-1">
            <img
              src="../assets/img/dummyImg.jpg"
              alt="User Image"
              class="rounded-full h-8 w-8 cursor-pointer"
              @click="handleLogOut"
            />
          </div>
        </div>
      </ul>
    </nav>
  </header>
</template>
