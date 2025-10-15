import useData from "./useData";

export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
}

const useMovies = () => useData<Movie>('/discover/movie')

export default useMovies;