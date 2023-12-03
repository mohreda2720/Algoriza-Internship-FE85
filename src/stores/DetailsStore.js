import { defineStore } from "pinia";
import api from "../../api.js";

export const detailsStore = defineStore("details", {
  state: () => ({
    details: [],
  }),
  actions: {
    async hotelDetails({ hotelId, checkInDate, checkOutDate }) {
      try {
        const response = await api.get("/getHotelDetails", {
          params: {
            hotel_id: hotelId,
            arrival_date: checkInDate,
            departure_date: checkOutDate,
          },
        });
        this.details = response.data.data;
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    },
  },
});
