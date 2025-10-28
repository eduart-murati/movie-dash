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
  // selectedGenre: Genre | null,
  // selectedMovieList: MovieList | null
) => {
  // logjikë për të përcaktuar endpoint
  let endpoint = '/discover/movie'; 

  if (movieQuery.movielist && movieQuery.movielist?.id !== 'all') {
    endpoint = `/movie/${movieQuery.movielist?.id}`; // p.sh. /movie/top_rated
  }

  // parametri me genre filter
  const params = movieQuery.genre ? { with_genres: movieQuery.genre.id } : {};

  return useData<Movie>(endpoint, { params }, [movieQuery]);
};

// const useMovies = (
//         selectedGenre: Genre | null, 
//         selectedMovieList: MovieList | null
//     ) => useData<Movie>('/discover/movie', selectedGenre  ? {
//     params: {
//         with_genres: selectedGenre?.id, 
//         movielist: selectedMovieList?.id}} : {}, [
//     selectedGenre?.id, selectedMovieList?.id])

export default useMovies;