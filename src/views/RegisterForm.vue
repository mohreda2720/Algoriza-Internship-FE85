<script setup>
import IconPlane from "../components/icons/IconPlane.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();
const emailError = ref("");
const passwordError = ref("");
const confirmPasswordError = ref("");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value)
    ? ""
    : "Invalid email address";
};

const validatePassword = () => {
  passwordError.value =
    password.value.length >= 8 ? "" : "Password must be at least 8 characters";
};

const validateConfirmPassword = () => {
  confirmPasswordError.value =
    confirmPassword.value === password.value ? "" : "Passwords do not match";
};

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Please Check Your Data");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/users", {
      email: email.value,
      password: password.value,
    });

    if (response.status === 201) {
      router.push("/sign");
    } else {
      console.error("Registration failed");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
</script>

<template>
  <header>
    <RouterLink to="/">
      <div class="flex items-center space-x-2 py-6">
        <IconPlane />
        <span class="text-xl">my Dream Place</span>
      </div>
    </RouterLink>
  </header>

  <main>
    <div class="flex items-center justify-center py-14">
      <div class="rounded-md w-96">
        <h1 class="text-2xl font-semibold mb-6 text-center">Register</h1>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              @input="validateEmail"
              class="mt-1 p-2 block w-full border-none focus:outline-none bg-gray-200 rounded-lg"
              required
            />
            <span v-if="emailError" class="text-red-500 text-sm">{{
              emailError
            }}</span>
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
              @input="validatePassword"
              class="mt-1 p-2 block w-full border-none focus:outline-none bg-gray-200 rounded-lg"
              required
            />
            <span v-if="passwordError" class="text-red-500 text-sm">{{
              passwordError
            }}</span>
          </div>
          <div class="mb-4">
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-600"
              >Confirm Password</label
            >
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              @input="validateConfirmPassword"
              class="mt-1 p-2 mb-10 block w-full border-none focus:outline-none bg-gray-200 rounded-lg"
              required
            />
            <span v-if="confirmPasswordError" class="text-red-500 text-sm">{{
              confirmPasswordError
            }}</span>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-md w-full focus:outline-none hover:bg-blue-600 focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
        <div class="mt-4 text-center">
          <span class="text-gray-600">Already have an account?</span>
          <RouterLink to="/sign"
            ><a href="#" class="text-blue-500 ml-1">Sign in</a></RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>