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

interface UseMoviesResult {
  data: Movie[];
  totalPages: number;
  error: any;
  isLoading: boolean;
}

const useMovies = (movieQuery: MovieQuery, page: number = 1): UseMoviesResult => {
  let endpoint = "/discover/movie"; // default

  // Nëse ka tekst kërkimi
  if (movieQuery.searchText?.trim() !== "") {
    endpoint = "/search/movie";
  }
  // Nëse është zgjedhur një listë e veçantë
  else if (movieQuery.movieList && movieQuery.movieList !== "all") {
    endpoint = `/movie/${movieQuery.movieList}`;
  }

  // Parametrat për API
  const params: { [key: string]: any } = {
    include_adult: false,
    language: "en-US",
    page,
  };

  if (movieQuery.searchText?.trim() !== "") params.query = movieQuery.searchText;
  if (movieQuery.genre) params.with_genres = movieQuery.genre.id;
  if (movieQuery.sortOrder) params.sort_by = movieQuery.sortOrder;

  // Thirrja e hook-ut të përgjithshëm useData
  const { data, error, isLoading } = useData<{
    results: Movie[];
    total_pages: number;
  }>(endpoint, { params }, [movieQuery, page]);

  // Kthimi me tip të saktë për MovieGrid dhe Pagination
  return {
    data: data?.results || [],
    totalPages: data?.total_pages || 1,
    error,
    isLoading,
  };
};

export default useMovies;
