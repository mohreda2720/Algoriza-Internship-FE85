<script setup>
import IconLocation from "./icons/IconLocation.vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconDownArrow from "./icons/IconDownArrow.vue";
import IconGuests from "./icons/IconGuests.vue";
import IconSingleBed from "./icons/IconSingleBed.vue";
import { useRouter } from "vue-router";
import { hotelsDestinationStore } from "../stores/hotelsDestinationStore.js";
import { storeToRefs } from "pinia";
import { hotelsStore } from "../stores/hotelsStore";

const router = useRouter();
const hotelsDesination = hotelsDestinationStore();
const hotelSearch = hotelsStore();
const minDate = new Date().toISOString().split("T")[0];

const {
  destinationInput,
  destinations,
  showDropdown,
  userDestination,
  selectedinDate,
  selectedoutDate,
  guests,
  rooms,
} = storeToRefs(hotelsDesination);
const {
  fetchDestinations,
  handleInput,
  selectDestination,
  handleClickOutside,
} = hotelsDesination;

const handleSearch = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const queryParams = {
      destId: userDestination.value.dest_id,
      searchType: userDestination.value.search_type,
      checkInDate: selectedinDate.value,
      checkOutDate: selectedoutDate.value,
      pageNum: "1",
    };

    await hotelSearch.searchHotels(queryParams);
    router.push({ name: "hotels", query: queryParams });
  } else {
    router.push("/sign");
  }
  console.log(userDestination.value);
};
</script>

<template>
  <div
    class="bg-white rounded-xl mt-[-35px] shadow-lg mx-10 md:h-16 flex items-center justify-center sticky"
  >
    <form
      class="md:grid grid-cols-7 gap-2 text-[#4F4F4F] text-xs w-full h-full md:w-auto"
      @submit.prevent="handleSearch"
    >

      <div
        class="bg-zinc-100 rounded flex items-center justify-center m-2 mr-0 md:col-span-2 md:w-5/5 px-5 relative dropdown-container"
      >
        <IconLocation />
        <input
          v-model="destinationInput"
          @change="handleInput"
          type="text"
          placeholder="Where are you going?"
          class="bg-zinc-100 focus:outline-none w-full text-center"
          required
        />
        <IconDownArrow />

        <ul
          v-if="showDropdown"
          class="absolute top-full left-0 bg-white border rounded-md shadow-md mt-1 py-1 px-3 z-10"
        >
          <li
            v-for="item in destinations"
            :key="item.value"
            @click="() => selectDestination(item)"
          >
            {{ item.city_name }},{{ item.country }}
            <hr />
          </li>
        </ul>
      </div>

      <div
        class="bg-zinc-100 rounded flex items-center justify-center m-2 md:w-full px-5"
      >
        <IconCalendar />
        <input
          type="text"
          :min="minDate"
          v-model="selectedinDate"
          placeholder="Check in date"
          class="bg-zinc-100 focus:outline-none w-full text-center"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          required
        />
      </div>

      <div
        class="bg-zinc-100 rounded flex items-center justify-center m-2 md:w-full px-5"
      >
        <IconCalendar />
        <input
          type="text"
          :min="selectedinDate"
          v-model="selectedoutDate"
          placeholder="Check out date"
          class="bg-zinc-100 focus:outline-none w-full text-center"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          required
        />
      </div>

      <div
        class="bg-zinc-100 rounded flex items-center justify-center m-2 md:w-full px-5"
      >
        <IconGuests />
        <input
          v-model="guests"
          type="number"
          placeholder="Guests"
          min="1"
          class="bg-zinc-100 focus:outline-none w-full text-center"
          required
        />
      </div>

      
      <div
        class="bg-zinc-100 rounded flex items-center justify-center m-2 md:w-full px-5"
      >
        <IconSingleBed />
        <input
          v-model="rooms"
          type="number"
          placeholder="Rooms"
          min="1"
          class="bg-zinc-100 focus:outline-none w-full text-center text-[#4F4F4F]"
          required
        />
      </div>

      <div class="flex items-center justify-center m-2 md:w-full">
        <button class="bg-blue-500 rounded-md text-white w-2/3 h-full py-2">
          Search
        </button>
      </div>
    </form>
  </div>
</template>


<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
</style>
