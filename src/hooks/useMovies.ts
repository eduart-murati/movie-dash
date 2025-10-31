import type { MovieQuery } from "@/App";
import useData from "./useData";

export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
}

const useMovies = (
  movieQuery: MovieQuery
) => {
  // përcaktimi i endpoint
  let endpoint = '/discover/movie'; 

  if (movieQuery.searchText && movieQuery.searchText.trim() !== "") {
    endpoint = "/search/movie";
  } else if (movieQuery.movielist && movieQuery.movielist.id !== "all") {
    endpoint = `/movie/${movieQuery.movielist.id}`; // p.sh. /movie/top_rated
  }

  const params:{[key: string]: any}={
    include_adult: false,
    language: "en-US",
    page: 2,
  };

  if (movieQuery.searchText && movieQuery.searchText.trim() !== "") {
    params.query = movieQuery.searchText; // shto query për kërkim
  }

  if (movieQuery.genre) {
    params.with_genres = movieQuery.genre.id;
  }

  if (movieQuery.sortOrder){
    params.sort_by = movieQuery.sortOrder;
  }

  return useData<Movie>(endpoint, { params }, [movieQuery]);
};

export default useMovies;