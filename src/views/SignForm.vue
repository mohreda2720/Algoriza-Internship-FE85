<script setup>
import { RouterLink, useRouter } from "vue-router";
import IconPlane from "../components/icons/IconPlane.vue";
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users?email=${email.value}`
    );
    const userData = response.data;

    if (userData.length === 0 || password.value !== userData[0].password) {
      alert("Check your Email or Password");
      return;
    }

    const token = generateToken(userData[0].id);

    localStorage.setItem("token", token);
    router.push("/");

  } catch (error) {
    console.error("An error occurred during authentication:", error);
  }
};

const generateToken = (userId) => {
  const payload = {
    sub: userId,
    exp: Math.floor(Date.now() / 1000) + 3600,
  };

  setTimeout(() => {
    localStorage.removeItem("token");
  }, payload.exp * 1000 - Date.now());
  return btoa(JSON.stringify(payload));
};
</script>
<template>
  <header>
    <RouterLink to="/"
      ><div class="flex items-center space-x-2 py-6">
        <IconPlane />
        <span class="text-xl">my Dream Place</span>
      </div>
    </RouterLink>
  </header>

  <main>
    <div class="flex items-center justify-center py-20">
      <div class="rounded-md w-96">
        <h1 class="text-2xl font-semibold mb-6 text-center">Sign In</h1>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              class="mt-1 p-2 block w-full border-none focus:outline-none bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-600"
              >Password</label
            >
            <input
              type="password"
              id="password"
              v-model="password"
              class="mt-1 p-2 mb-10 block w-full border-none focus:outline-none bg-gray-200 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-md w-full focus:outline-none hover:bg-blue-600 focus:ring focus:border-blue-300"
          >
            Sign In
          </button>
        </form>
        <div class="mt-4 text-center">
          <span class="text-gray-600">Don't have an account?</span>
          <RouterLink to="/register"
            ><a href="#" class="text-blue-500 ml-1">Register</a></RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
