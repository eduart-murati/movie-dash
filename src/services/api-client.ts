import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: import.meta.env.VITE_TMDB_TOKEN,
  },
});

export default apiClient;