import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
}

interface FetchMovieResponse {
    vote_count: number;
    results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);  
  const [error, setError] = useState('');

  useEffect( () => {
    const controller = new AbortController;

    apiClient.get<FetchMovieResponse>('/movie', {signal: controller.signal })
    .then ((res) => setMovies(res.data.results))
    .catch((err) => {
        if (err instanceof CanceledError ) return;
        setError(err.message)})

    return() => controller.abort();

  }, []);

  return {movies, error};
}

export default useMovies;