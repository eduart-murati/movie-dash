import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3/discover/',
    headers: {   
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTVmOGE2ZDI5NWI4ZmVhZWQ4YWE1NmI5YzcwYWFlYyIsIm5iZiI6MTc1NzU5OTIyNy41OTYsInN1YiI6IjY4YzJkNWZiNGIwZTgxNzkyODhkMDcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5o2aGW5PH7pQ4I-adVqKY9YCiVyb0ZxMEsJr3ReJJgs' 
  },
})

// export default axios.create({
//     baseURL:'https://api.themoviedb.org/3/discover/',
//     headers: { 
//         Authorization: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' 
//   },
// })
