import { defineStore } from "pinia";
import api from "../../api.js";

export const sortStore = defineStore("sortBy", {
  state: () => ({
    sortByOptions: [],
  }),
  actions: {
    async searchOptions({ destId, searchType, checkInDate, checkOutDate }) {
      try {
        const response = await api.get("/getSortBy", {
          params: {
            dest_id: destId,
            search_type: searchType,
            arrival_date: checkInDate,
            departure_date: checkOutDate,
          },
        });
        this.sortByOptions = response.data.data;
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    },
  },
});
