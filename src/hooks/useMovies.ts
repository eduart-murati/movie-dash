import useData from "./useData";
import type { Genre } from "./useGenres";
import type { MovieList } from "./useMovieList";

export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
}

const useMovies = (
  selectedGenre: Genre | null,
  selectedMovieList: MovieList | null
) => {
  // logjikë për të përcaktuar endpoint
  let endpoint = '/discover/movie'; 

  if (selectedMovieList && selectedMovieList.id !== 'all') {
    endpoint = `/movie/${selectedMovieList.id}`; // p.sh. /movie/top_rated
  }

  // parametri me genre filter
  const params = selectedGenre ? { with_genres: selectedGenre.id } : {};

  return useData<Movie>(endpoint, { params }, [
    selectedGenre?.id,
    selectedMovieList?.id
  ]);
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