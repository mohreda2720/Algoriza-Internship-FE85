import { defineStore } from "pinia";
import api from "../../api.js";

export const hotelsStore = defineStore("hotelSearch", {
  state: () => ({
    hotels: [],
    minRating: null,
  }),
  actions: {
    async searchHotels({
      destId,
      searchType,
      checkInDate,
      checkOutDate,
      pageNum,
      sortOption,
    }) {
      try {
        const response = await api.get("/searchHotels", {
          params: {
            dest_id: destId,
            search_type: searchType,
            arrival_date: checkInDate,
            departure_date: checkOutDate,
            page_number: pageNum,
            sort_by: sortOption,
          },
        });
        this.hotels = response.data.data;
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    },
    setMinRating(rating) {
      this.minRating = rating;
    },
  },
});
