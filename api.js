import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://booking-com15.p.rapidapi.com/api/v1/hotels',
  headers: {
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
    'X-RapidAPI-Key': '6d6155a877msh91571c1e287f583p169899jsnd65ebd4aec47',
  },
});

export default instance;
