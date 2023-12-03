<script setup>
import AlertBar from "../components/AlertBar.vue";
import Navbar from "../components/Navbar.vue";
import SearchProperitiesBar from "../components/SearchProperitiesBar.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template >
  <Navbar />

  <main>
    <section class="relative text-center text-white">
      <img
        src="../assets/img/sydney.webp"
        alt="Sydney View"
        class="brightness-75 w-full h-[500px] rounded-lg object-cover"
      />

      <div
        class="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center"
      >
        <div class="text-2xl font-bold pb-5">Enjoy Your Dream Vacation</div>

        <div class="text-m font-normal">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information, and inspiration from us
        </div>
      </div>
      <SearchProperitiesBar />
    </section>

    <!-- COVID-19 Alert Bar -->
    <AlertBar />

    <!-- Properities Section -->
    <section>
      <div>
        <div class="text-2xl font-bold pb-3">Enjoy Your Dream Vacation</div>
        <div class="text-m font-normal pb-5">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and <br />
          inspiration from us
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="w-full flex flex-col">
          <img
            src="../assets/img/austrailia.webp"
            alt=""
            class="rounded-lg h-48 object-cover"
          />
          <div class="text-lg font-bold pt-5">Australia</div>
          <div>2246 properties</div>
        </div>

        <div class="w-full flex flex-col">
          <img
            src="../assets/img/japan.webp"
            alt=""
            class="rounded-lg h-48 object-cover"
          />
          <div class="text-lg font-bold pt-5">Japan</div>
          <div>1278 properties</div>
        </div>

        <div class="w-full flex flex-col">
          <img
            src="../assets/img/newzealand.webp"
            alt=""
            class="rounded-lg h-48 object-cover"
          />
          <div class="text-lg font-bold pt-5">New Zealand</div>
          <div>480 properties</div>
        </div>

        <div class="w-full flex flex-col">
          <img
            src="../assets/img/greece.webp"
            alt=""
            class="rounded-lg h-48 object-cover"
          />
          <div class="text-lg font-bold pt-5">Greece</div>
          <div>320 properties</div>
        </div>
      </div>
    </section>

    <!-- Inspiration Section -->
    <section>
      <div class="text-2xl font-bold pt-10 pb-3">
        Get inspiration for your next trip
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="w-full flex flex-col relative">
          <img
            src="../assets/img/sydney.webp"
            alt=""
            class="rounded-lg h-60 brightness-75 object-cover"
          />
          <div class="absolute bottom-2 left-2 text-white">
            <div class="text-lg font-bold pt-5">
              Sydeny’s 10 most fashionable 5 star hotels
            </div>
            <div>
              Browse the fastest growing tourism sector in the heart of
              Australia tourism capital ....
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col relative">
          <img
            src="../assets/img/cafe.webp"
            alt=""
            class="rounded-lg h-60 brightness-75 object-cover"
          />
          <div class="absolute bottom-2 left-2 text-white">
            <div class="text-lg font-bold pt-5">
              Top cities for Vegan Travellers
            </div>
            <div>
              Top sites where you do not have to worry about being a vegan. Our
              tourist guide is here...
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col relative">
          <img
            src="../assets/img/nature.webp"
            alt=""
            class="rounded-lg h-60 brightness-75 object-cover"
          />
          <div class="absolute bottom-2 left-2 text-white">
            <div class="text-lg font-bold pt-5">
              World’s top destinations during and post covid timeline
            </div>
            <div>
              Pandemic is still intact and will be here for a longer time.
              Here’s where your next destination...
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Hotels Section -->
    <section>
      <div class="text-2xl font-bold pt-10 pb-3">Popular hotels</div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="w-full flex flex-col">
          <img
            src="../assets/img/lascadeHotel.webp"
            alt=""
            class="rounded-lg h-60 object-cover"
          />
          <div class="text-lg font-bold pt-5">Lakeside Motel Warefront</div>
          <div>2246 properties</div>
        </div>

        <div class="w-full flex flex-col">
          <img
            src="../assets/img/recceHotel.webp"
            alt=""
            class="rounded-lg h-60 object-cover"
          />
          <div class="text-xl font-bold pt-5">Recce Graham resort</div>
          <div>1278 properties</div>
        </div>

        <div class="w-full flex flex-col">
          <img
            src="../assets/img/firesideHotel.webp"
            alt=""
            class="rounded-lg h-60 object-cover"
          />
          <div class="text-xl font-bold pt-5">Fireside Dinners</div>
          <div>480 properties</div>
        </div>

        <div class="w-full flex flex-col">
          <img
            src="../assets/img/oculousHotel.webp"
            alt=""
            class="rounded-lg h-60 object-cover"
          />
          <div class="text-xl font-bold pt-5">Oculous Inn Stay</div>
          <div>320 properties</div>
        </div>
      </div>
    </section>

    <section>
      <div class="relative w-full h-[280px] overflow-hidden mt-12">
        <!-- First Image -->
        <img
          src="../assets/img/island.webp"
          alt=""
          class="w-full h-full object-cover brightness-75 transform scale-x-[-1] scale-y-[-1] rounded-lg"
        />
        <div
          class="absolute top-[50%] left-0 transform -translate-y-1/2 text-white mx-[80px]"
        >
          <div class="text-2xl">
            Download the mobile application for bonus <br />
            coupons and travel codes
          </div>
          <button class="bg-blue-500 rounded-md py-2 px-4 text-white mt-4">
            Download mobile app
          </button>
        </div>
        <!-- Second Image -->
        <img
          src="../assets/img/mobile.webp"
          alt=""
          class="hidden md:block absolute top-5 right-5 origin-top-left rotate-[-15deg] w-[720px] h-[515]"
        />
      </div>
    </section>

    <section>
      <div class="text-center text-neutral-900 text-3xl font-semibold mt-20">
        Explore the world with My Dream place
      </div>
      <div class="text-center text-blue-500 text-base font-normal mt-3">
        Discover new places and experiences
      </div>
    </section>
  </main>

  <!-- footer -->
  <FooterComponent />
</template>