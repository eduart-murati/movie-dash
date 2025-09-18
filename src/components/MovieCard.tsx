import type { Movie } from '../hooks/useMovies'
import { Card, CardBody, CardFooter, Heading, Image } from '@chakra-ui/react'

interface Props{
    movie: Movie
}

const MovieCard = ({movie}: Props) => {
    if (!movie.poster_path) {
        return null; // Ose një placeholder
    }

    const imageUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
  
    return (
    <Card.Root borderRadius={10} >
        <CardBody>
            <Image src={imageUrl} />
        </CardBody>
        <CardFooter>
            <Heading fontSize='2xl'>{movie.title}</Heading>
      </CardFooter>
    </Card.Root>
  )
}

export default MovieCard