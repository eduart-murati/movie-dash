import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
}

const useMovies = (selectedGenre: Genre|null) => useData<Movie>('/discover/movie', selectedGenre  ? {params: {with_genres: selectedGenre?.id}} : {}, [selectedGenre?.id])

export default useMovies;