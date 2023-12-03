import { defineStore } from "pinia";
import api from "../../api.js";

export const hotelsDestinationStore = defineStore({
  id: "api",
  state: () => ({
    destinationInput: "",
    destinations: [],
    userDestination: "",
    showDropdown: false,
    selectedinDate: "",
    selectedoutDate: "",
    guests: "",
    rooms: "",
  }),
  actions: {
    async fetchDestinations() {
      try {
        const response = await api.get("/searchDestination", {
          params: {
            query: this.destinationInput,
          },
        });
        this.destinations = response.data.data.filter(
          (destination) => destination.search_type === "city"
        );
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    },

    handleInput() {
      this.showDropdown = true;
      this.fetchDestinations();
    },

    selectDestination(destination) {
      this.destinationInput = `${destination.city_name}, ${destination.country}`;
      this.showDropdown = false;
      this.userDestination = destination;
    },

    handleClickOutside(event) {
      if (!event.target.closest(".dropdown-container")) {
        this.showDropdown = false;
      }
    },
  },
});

export default hotelsDestinationStore;
