import { useEffect, useState } from 'react'
import apiClient from '@/services/api-client';
import { Text } from '@chakra-ui/react'

interface Movie{
    id: number;
    title: string;
}

interface FetchMovieResponse {
    vote_count: number;
    results: Movie[]
}

const MovieGrid = () => {
  
  const [movies, setMovies] = useState<Movie[]>([]);  
  const [error, setError] = useState('');

  useEffect( () => {
    apiClient.get<FetchMovieResponse>('/movie')
    .then (res => setMovies(res.data.results))
    .catch(err => setError(err.message))

  }, [])

  return (
    <>
     { error && <Text>{error}</Text>}
      <ul>
        {movies.map( movie => <li key={movie.id}> {movie.title} </li>)}
    </ul>
    </>
  )
  
}

export default MovieGrid
