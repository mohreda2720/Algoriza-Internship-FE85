<script setup>
import IconStar from "../components/icons/IconStar.vue";
import IconHalfStar from "../components/icons/IconHalfStar.vue";
import Navbar from "../components/Navbar.vue";
import SearchProperitiesBar from "../components/SearchProperitiesBar.vue";
import AlertBar from "../components/AlertBar.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { hotelsStore } from "../stores/hotelsStore";
import { hotelsDestinationStore } from "../stores/hotelsDestinationStore.js";
import { sortStore } from "../stores/SortByStore.js";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const hotelSearch = hotelsStore();
const hotelsDesination = hotelsDestinationStore();
const sortBy = sortStore();
const currentPage = ref(1);
const router = useRouter();

const { hotels } = storeToRefs(hotelSearch);
const { userDestination, selectedinDate, selectedoutDate } =
  storeToRefs(hotelsDesination);
const { sortByOptions } = storeToRefs(sortBy);

const searchTerm = ref("");
const filteredHotels = computed(() => {
  return hotels.value.hotels.filter((hotel) =>
    hotel.property.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const getStarRating = (reviewScore) => {
  const fullStars = Math.floor(reviewScore / 2);
  const hasHalfStar = reviewScore % 2 !== 0;

  return [...Array(fullStars).fill(1), hasHalfStar ? 0.5 : null].filter(
    (star) => star !== null
  );
};
if (currentPage.value < 0) {
  currentPage.value = 1;
}
const nextPage = async (page) => {
  if (currentPage.value >= 1) {
    await hotelSearch.searchHotels({
      destId: userDestination.value.dest_id,
      searchType: userDestination.value.search_type,
      checkInDate: selectedinDate.value,
      checkOutDate: selectedoutDate.value,
      pageNum: page.toString(),
    });
  } else {
    currentPage.value = 1;
  }
};

onMounted(() => {
  sortBy.searchOptions({
    destId: userDestination.value.dest_id,
    searchType: userDestination.value.search_type,
    checkInDate: selectedinDate.value,
    checkOutDate: selectedoutDate.value,
  });
});

const handleSortOptionChange = (selectedOption) => {
  hotelSearch.searchHotels({
    destId: userDestination.value.dest_id,
    searchType: userDestination.value.search_type,
    checkInDate: selectedinDate.value,
    checkOutDate: selectedoutDate.value,
    pageNum: currentPage.value.toString(),
    sortOption: selectedOption,
  });
};

const showHotelDesc = (hotelId) => {
  router.push({
    name: "details",
    params: {
      id: hotelId,
    },
    query: {
      arrivalDate: selectedinDate.value,
      departureDate: selectedoutDate.value,
    },
  });
};
</script>

<template>
  <section
    class="mx-[-9.5%] h-48 bg-gradient-to-b from-blue-700 to-blue-800 text-white"
  >
    <div class="px-[8%]">
      <Navbar />
    </div>
  </section>
  <SearchProperitiesBar />

  <main>
    <section
      class="md:grid grid-cols-4 gap-10 mt-16 text-black justify-between"
    >
      <div class="col-span-1">
        <div class="bg-zinc-100 rounded-md mb-6">
          <div class="p-4">
            <div class="text-neutral-900 text-base font-bold mb-4">
              Search by property name
            </div>
            <div>
              <input
                type="text"
                class="focus:outline-none w-full h-10"
                placeholder="&#x1F50D; eg. Beach westpalm"
                v-model="searchTerm"
              />
            </div>
          </div>
        </div>

        <div class="text-neutral-900 text-base font-bold mb-4 pl-4">
          filter by
        </div>
        <div class="bg-white rounded-md border border-neutral-200">
          <div
            class="w-full rounded-tl-md rounded-tr-md border border-neutral-200"
          >
            <div class="text-neutral-900 p-4 bg-zinc-100 text-base font-bold">
              Your budget per day
            </div>
            <div class="pl-4 tracking-wider">
              <div class="py-2">
                <input
                  type="checkbox"
                  id="budget0-200"
                  name="budget"
                  value="0-200"
                  @change="handleBudgetChange"
                />
                <label for="budget0-200">0$ - 200$</label>
              </div>

              <div class="pb-2">
                <input
                  type="checkbox"
                  id="budget201-500"
                  name="budget"
                  value="201-500"
                  @change="handleBudgetChange"
                />
                <label for="budget201-500">201$ - 500$</label>
              </div>

              <div class="pb-2">
                <input
                  type="checkbox"
                  id="budget501-1000"
                  name="budget"
                  value="501-1000"
                  @change="handleBudgetChange"
                />
                <label for="budget501-1000">501$ - 1000$</label>
              </div>

              <div class="pb-2">
                <input
                  type="checkbox"
                  id="budget1001-2000"
                  name="budget"
                  value="1001-2000"
                  @change="handleBudgetChange"
                />
                <label for="budget1001-2000">1001$ - 2000$</label>
              </div>

              <div class="pb-2">
                <input
                  type="checkbox"
                  id="budget2000-5000"
                  name="budget"
                  value="2000-5000"
                  @change="handleBudgetChange"
                />
                <label for="budget2000-5000">2000$ - 5000$</label>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-md border border-neutral-200 mt-4">
          <div
            class="w-full rounded-tl-md rounded-tr-md border border-neutral-200"
          >
            <div class="text-neutral-900 p-4 bg-zinc-100 text-base font-bold">
              Rating
            </div>

            <div class="tracking-wider p-4">
              <div class="pb-2 text-neutral-600 text-sm font-normal">
                Show only ratings more than
              </div>
              <div class="flex">
                <div
                  v-for="rating in [1, 2, 3, 4, 5]"
                  :key="rating"
                  class="flex border border-gray-200 p-1 text-center items-center cursor-pointer"
                  @click="handleRatingChange(rating)"
                >
                  <div>{{ rating }}</div>
                  <div><IconStar /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3">
        <div class="flex justify-between">
          <div class="text-2xl font-semibold mb-10">
            {{ userDestination.city_name }}:
            {{
              hotels && hotels.meta && hotels.meta[0]
                ? hotels.meta[0].title
                : "No Information"
            }}
          </div>

          <div class="border rounded h-[50%] p-2">
            <div class="text-zinc-500 text-xs font-medium px-1">Sort by</div>
            <select
              name=""
              id=""
              @change="handleSortOptionChange($event.target.value)"
              class="focus:outline-none"
            >
              <option value="" selected>Recommended</option>
              <option
                v-for="option in sortByOptions"
                :key="option.value"
                :value="option.id"
              >
                {{ option.title }}
              </option>
            </select>
          </div>
        </div>

        <div
          v-for="hotel in filteredHotels"
          :key="hotel.value"
          class="w-full md:h-60 bg-white rounded border border-neutral-200 flex mb-6 p-4"
        >
          <img class="w-72 h-50 rounded" :src="hotel.property.photoUrls[0]" />
          <div>
            <div class="text-xl px-5">
              {{ hotel.property.name }}

              <div class="flex items-center mt-2">
                <div
                  v-for="star in getStarRating(hotel.property.reviewScore)"
                  :key="star"
                  class="text-xl"
                >
                  <span v-if="star % 1 === 0"><IconStar /></span>
                  <span v-else><IconHalfStar /></span>
                </div>
                <span class="text-neutral-600 text-sm font-normal pl-2">
                  {{
                    getStarRating(hotel.property.reviewScore).reduce(
                      (acc, current) => acc + current,
                      0
                    )
                  }}
                  ({{ hotel.property.reviewCount }} Review)</span
                >
              </div>
              <div class="text-neutral-600 text-xs font-medium mt-2 leading-6">
                <div>Live a little and celbrate with champagne</div>
                <div>
                  Reats include a glass of French champagne, parking and a late
                  checkout. Gym included. Flexible cancellation applies
                </div>
              </div>

              <div>
                <button
                  class="bg-blue-500 rounded-md py-2 px-4 text-white text-base font-medium"
                  @click="showHotelDesc(hotel.property.id)"
                >
                  See availability
                </button>
              </div>
            </div>
          </div>

          <div class="grid md:grid-rows-3 text-right">
            <div>
              <div
                class="w-48 h-6 px-2 py-1 bg-rose-500 rounded-md justify-center items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-white text-xs font-medium font-['SF Pro Display'] leading-none tracking-tight"
                >
                  Book now and receive 15% off
                </div>
              </div>
            </div>

            <div>
              <div
                v-if="hotel.property.priceBreakdown.strikethroughPrice?.value"
                class="w-14 h-6 py-1 bg-green-600 rounded-md justify-center items-center gap-2.5 inline-flex"
              >
                <div class="text-white text-xs font-medium">
                  {{
                    Math.round(
                      ((Number(
                        hotel.property.priceBreakdown.strikethroughPrice?.value
                      ) -
                        Number(
                          hotel.property.priceBreakdown.grossPrice.value
                        )) /
                        Number(
                          hotel.property.priceBreakdown.strikethroughPrice
                            ?.value
                        )) *
                        100
                    )
                  }}% off
                </div>
              </div>
            </div>
            <div class="font-semibold">
              <s
                v-if="hotel.property.priceBreakdown.strikethroughPrice?.value"
                class="text-rose-500 pr-2"
              >
                ${{
                  Math.ceil(
                    hotel.property.priceBreakdown.strikethroughPrice?.value
                  )
                }}</s
              >

              ${{ Math.ceil(hotel.property.priceBreakdown.grossPrice.value) }}
              <div class="text-neutral-600 text-xs font-medium mt-2">
                Includes taxes and fees
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <nav aria-label="Page navigation example" class="grid justify-items-center">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
            @click="nextPage(--currentPage)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >{{ currentPage }}</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="nextPage(++currentPage)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <AlertBar />
  </main>
  <FooterComponent />
</template>