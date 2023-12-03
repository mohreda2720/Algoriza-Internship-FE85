<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { detailsStore } from "../stores/DetailsStore";
import { storeToRefs } from "pinia";
import Navbar from "../components/Navbar.vue";
import AlertBar from "../components/AlertBar.vue";
import FooterComponent from "../components/FooterComponent.vue";
import IconLocation from "../components/icons/IconLocation.vue";
import IconLike from "../components/icons/IconLike.vue";
import IconMap from "../components/icons/IconMap.vue";
import IconPlane from "../components/icons/IconPlane.vue";
import IconBag from "../components/icons/IconBag.vue";
import IconLife from "../components/icons/IconLife.vue";
import IconLikeT from "../components/icons/IconLikeT.vue";

const route = useRoute();
const hotelDetails = detailsStore();
const { details } = storeToRefs(hotelDetails);
const hotelId = ref(route.params.id);
const checkInDate = ref(route.query.arrivalDate);
const checkOutDate = ref(route.query.departureDate);

const overviewSection = ref(null);
const roomSection = ref(null);

const scrollToSection = (sectionRef) => {
  const section =
    sectionRef === "overviewSection" ? overviewSection : roomSection;
  if (section.value) {
    section.value.scrollIntoView({
      behavior: "smooth",
    });
  }
};

onMounted(async () => {
  await hotelDetails.hotelDetails({
    hotelId: hotelId.value,
    checkInDate: checkInDate.value,
    checkOutDate: checkOutDate.value,
  });
});
console.log(details);
</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="mx-[-9.5%] bg-gradient-to-b from-zinc-100 to-white">
      <div class="md:flex gap-x-4 px-[8%] py-8 justify-center">
        <div>
          <img
            src="../assets/img/room2.webp"
            alt=""
            class="rounded w-[820px] h-[452px]"
          />
        </div>
        <div>
          <img
            src="../assets/img/room1.webp"
            alt=""
            class="rounded w-[400px] h-[218px] mb-4"
          />
          <img
            src="../assets/img/room3.webp"
            alt=""
            class="rounded w-[400px] h-[218px]"
          />
        </div>

        <div></div>
      </div>
      <div class="px-[8%] py-4">
        <ul
          class="flex text-zinc-800 text-base font-normal gap-10 cursor-pointer"
        >
          <li @click="scrollToSection('overviewSection')"><a>Overview</a></li>
          <li @click="scrollToSection('roomSection')"><a>Rooms</a></li>
        </ul>
      </div>
    </div>

    <div class="bg-zinc-100 mx-[-9.5%]">
      <div class="md:flex justify-between px-[8%] py-4">
        <div>
          <div class="text-zinc-900 text-3xl font-semibold">
            {{ details.hotel_name }}
          </div>
          <div class="text-[#F2994A] text-sm font-normal">
            &#9733;&#9733;&#9733;&#9733;
            <span class="text-neutral-600">4 (1200 Reviews)</span>
          </div>
          <div class="flex text-zinc-800 text-sm font-normal mb-2">
            <IconLocation class="mr-2" />{{ details.address }},
            {{ details.city }}, {{ details.country_trans }}
          </div>

          <div class="bg-white p-6 w-[80%] grid grid-cols-1 divide-y">
            <div class="pb-8" ref="overviewSection">
              <div class="text-neutral-900 text-lg font-medium">Overview</div>
              <div class="text-neutral-600 text-base font-normal">
                {{
                  details.sustainability?.sustainability_page.level_details
                    ? details.sustainability?.sustainability_page.level_details
                    : "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.Each room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property.Couples in particular like the location – they rated it 9.2 for a two-person trip."
                }}
              </div>
            </div>
            <div class="text-neutral-900 text-lg font-medium">
              <div class="my-4">Top facilities</div>
              <div class="flex flex-wrap -mx-2">
                <div
                  v-for="facility in details.facilities_block?.facilities"
                  :key="facility.value"
                  class="flex w-1/2 px-2 mb-2 text-neutral-600 text-base font-normal"
                >
                  <IconLike />{{ facility.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            :src="`https://maps.google.com/maps?q=${details.latitude},${details.longitude}&z=15&output=embed`"
            class="w-[400px] h-[240px] rounded-lg"
          ></iframe>

          <div>
            <div class="text-neutral-900 text-lg font-medium py-6">
              Explore the area
            </div>
            <div
              class="flex justify-between text-neutral-600 text-sm font-normal leading-8"
            >
              <ul>
                <li class="flex items-center">
                  <IconMap class="mr-2" />Hotel Penselvenyia
                </li>
                <li class="flex items-center">
                  <IconMap class="mr-2" />Travis Bakery store house
                </li>
                <li class="flex items-center">
                  <IconMap class="mr-2" />Olivia Johnson Garden
                </li>
                <li class="flex items-center">
                  <IconMap class="mr-2" />Norman Opera Circus
                </li>
                <li class="flex items-center">
                  <IconMap class="mr-2" />Rockdeset hotel
                </li>
              </ul>

              <ul>
                <li>2 min drive</li>
                <li>10 min drive</li>
                <li>15 min drive</li>
                <li>18 min drive</li>
                <li>32 min drive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="px-[8%] text-neutral-900 text-2xl font-semibold pb-8">
        Available Rooms
      </div>
      <div class="md:flex px-[8%] gap-4 justify-center" ref="roomSection">
        <div>
          <div
            class="flex bg-gradient-to-b from-blue-500 to-blue-700 rounded-md w-full"
          >
            <div class="py-10 pl-8">
              <div class="text-white flex mb-6">
                <IconPlane stroke="#ffffff" />my Dream Place
              </div>
              <div class="pr-0 mr-0">
                <span class="text-white text-2xl font-bold"
                  >20% off<br />Use Promotional <br />
                  Coupon Code:<br /></span
                ><span class="text-yellow-400 text-2xl font-bold">Orlando</span>
              </div>
            </div>
            <img
              src="../assets/img/Frame.png"
              class="mt-10 h-[60%] pl-0 ml-0 md:block hidden"
            />
          </div>
        </div>

        <div>
          <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              class="rounded-t-lg w-full h-[200px]"
              src="../assets/img/twinRoom.webp"
              alt=""
            />

            <div class="p-5">
              <h5 class="mb-2 text-zinc-900 text-lg font-medium">
                Standard twin ben, Multiple beds
              </h5>

              <ul>
                <li class="flex pb-2"><IconBag />300 sq ft</li>
                <li class="flex pb-2"><IconLife />Sleeps 3</li>
                <li class="flex pb-2">
                  <IconLikeT />1 double bed and 1 twin bed
                </li>
              </ul>
              <button
                class="w-full px-4 py-3 bg-blue-500 rounded-md justify-center items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-white text-base font-medium font-['SF Pro Display'] leading-tight tracking-tight"
                >
                  Reserve suite
                </div>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              class="rounded-t-lg w-full h-[200px]"
              src="../assets/img/queenRoom.webp"
              alt=""
            />

            <div class="p-5">
              <h5 class="mb-2 text-zinc-900 text-lg font-medium">
                Standard twin ben, 1 Queen bed
              </h5>

              <ul>
                <li class="flex pb-2"><IconBag />300 sq ft</li>
                <li class="flex pb-2"><IconLife />Sleeps 3</li>
                <li class="flex pb-2">
                  <IconLikeT />1 double bed and 1 twin bed
                </li>
              </ul>
              <button
                class="w-full px-4 py-3 bg-blue-500 rounded-md justify-center items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-white text-base font-medium font-['SF Pro Display'] leading-tight tracking-tight"
                >
                  Reserve suite
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="px-[8%]">
        <AlertBar />
        <FooterComponent />
      </div>
    </div>
  </main>
</template>

<style scoped>
a {
  position: relative;
  text-decoration: none;
  color: #333; /* Set your default text color */
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px; /* Set the height of the underline */
  bottom: 0;
  left: 0;
  background-color: #3498db; /* Set your desired underline color */
  transform: scaleX(0); /* Initially set the underline width to 0 */
  transform-origin: bottom right;
  transition: transform 0.3s ease; /* Add a smooth transition effect */
}

a:hover::before,
a:focus::before {
  transform: scaleX(1); /* Expand the underline on hover or focus */
  transform-origin: bottom left;
}
</style>

