import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {   
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` 
  },    
})

// const apiClient = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   headers: {
//     // Edited
//     Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
//   },
// });

// export default apiClient;



// export default axios.create({
//     baseURL:'https://api.themoviedb.org/3/discover/',
//     headers: { 
//         Authorization: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' 
//   },
// })
