import type { MovieQuery } from "@/App";
import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  vote_count: number;
}

const useMovies = (movieQuery: MovieQuery, page: number = 1) => {
  let endpoint = "/discover/movie"; // default

  // nëse ka tekst kërkimi, përdor endpoint search
  if (movieQuery.searchText && movieQuery.searchText.trim() !== "") {
    endpoint = "/search/movie";
  } 
  // nëse është zgjedhur një listë e veçantë (p.sh. top rated)
  else if (movieQuery.movielist && movieQuery.movielist.id !== "all") {
    endpoint = `/movie/${movieQuery.movielist.id}`;
  }

  // parametrat që dërgohen tek API
  const params: { [key: string]: any } = {
    include_adult: false,
    language: "en-US",
    page, // marrim page nga hook
  };

  // query për kërkim tekstual
  if (movieQuery.searchText && movieQuery.searchText.trim() !== "") {
    params.query = movieQuery.searchText;
  }

  // filtër për genre
  if (movieQuery.genre) {
    params.with_genres = movieQuery.genre.id;
  }

  // sortim
  if (movieQuery.sortOrder) {
    params.sort_by = movieQuery.sortOrder;
  }

  // Kthe hook-un e të dhënave
  return useData<Movie>(endpoint, { params }, [movieQuery, page]);
};

export default useMovies;
