// https://api.themoviedb.org/3/movie/now_playing?api_key=91c0d7ad5a1a147ce0f2cb3772f265f2

// Base url: https://api.themoviedb.org/3/

// URL API: movie/now_playing?api_key=91c0d7ad5a1a147ce0f2cb3772f265f2

import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;