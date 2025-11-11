import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {   
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` 
  },    
})

// export default axios.create({
//     baseURL:'https://api.themoviedb.org/3/discover/',
//     headers: { 
//         Authorization: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' 
//   },
// })
