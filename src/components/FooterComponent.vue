<script setup>
import IconCopyRights from "./icons/IconCopyRights.vue";
import IconPlane from "./icons/IconPlane.vue";
</script>

<template>
  <footer class="mx-[-9.5%]">
    <section class="grid grid-cols-1 md:grid-cols-5 gap-4 m-[8%] line-height-8">
      <!-- First Div -->
      <div>
        <div class="flex">
          <IconPlane />
          <span class="text-black text-base font-medium">my Dream Place</span>
        </div>

        <div class="text-neutral-600 text-sm font-normal">
          Your next goto companion for <br />
          travel
        </div>
      </div>

      <!-- Second Div -->
      <div>
        <div class="text-black text-base font-medium">Company</div>
        <ul class="text-neutral-600 text-sm font-normal">
          <li>About</li>
          <li>Jobs</li>
          <li>Newsroom</li>
          <li>Advertising</li>
          <li>Contact us</li>
        </ul>
      </div>

      <!-- Third -->
      <div>
        <div class="text-black text-base font-medium">Explore</div>
        <ul class="text-neutral-600 text-sm font-normal">
          <li>Australia</li>
          <li>New Zealand</li>
          <li>United States America (USA)</li>
          <li>Greece</li>
          <li>Maldives</li>
          <li>Singapore</li>
          <li>
            <a href="#" class="text-blue-500 hover:underline">See more</a>
          </li>
        </ul>
      </div>

      <!-- Fourth -->
      <div>
        <div class="text-black text-base font-medium">Terms and Policies</div>
        <ul class="text-neutral-600 text-sm font-normal">
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Acessibility</li>
          <li>Reward system policy</li>
        </ul>
      </div>

      <!-- Fifth -->
      <div>
        <div class="text-black text-base font-medium">Help</div>
        <ul class="text-neutral-600 text-sm font-normal">
          <li>Support</li>
          <li>Cancel your bookings</li>
          <li>Use Coupon</li>
          <li>Refund Policies</li>
          <li>International Travel Documents</li>
        </ul>
      </div>
    </section>
    <div class="flex items-center justify-end pr-[15%] h-10 bg-gray-200">
      <IconCopyRights />my Dream Place 2022
    </div>
  </footer>
</template>