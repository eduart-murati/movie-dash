import useMovies from '@/hooks/useMovies'
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import MovieCard from './MovieCard';
import MovieCardSceleton from './MovieCardSkeleton';

const MovieGrid = () => {
  
  const {movies, error, isLoading} = useMovies(); 
  const skeletons = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
     { error && <Text>{error}</Text>}
        <SimpleGrid 
          columns={{sm: 1, md:2, lg:3, xl:5 }} 
          padding={5} 
          gap={10} 
        >
        {isLoading && skeletons.map(skeleton => <MovieCardSceleton key={skeleton}/>)}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </SimpleGrid>
    </>
  )
  
}

export default MovieGrid
