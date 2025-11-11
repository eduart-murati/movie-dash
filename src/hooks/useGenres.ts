import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useData<{ genres: Genre[] }>("/genre/movie/list");

  return {
    data: data?.genres || [], // gjithmonë array
    error,
    isLoading,
  };
};

export default useGenres;
