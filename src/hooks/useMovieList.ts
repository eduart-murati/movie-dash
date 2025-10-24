import useData from "./useData";

export interface MovieList {
    id: string;
    name: string;
    slug: string;
}

const useMovieList = () => useData<MovieList>(window.location.origin + "/movieList.json");

export default useMovieList
