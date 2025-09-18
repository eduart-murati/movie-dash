import type { Movie } from '../hooks/useMovies'
import { AspectRatio, Card, CardBody, CardFooter, Heading, Image } from '@chakra-ui/react'
import MovieStarRating from './MovieStarRating';

interface Props{
    movie: Movie
}

const MovieCard = ({movie}: Props) => {
    if (!movie.poster_path) {
        return null; // Ose një placeholder
    }

    const imageUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;

    const formattedReleaseDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(movie.release_date));
  
    return (
    <Card.Root borderRadius={10} >
        <AspectRatio ratio={2 / 3}>
            <Image src={imageUrl} alt={movie.title} objectFit="cover" />
        </AspectRatio>
        <CardBody>            
            <MovieStarRating rating={movie.vote_average} />
        </CardBody>
        <CardFooter>
            <Heading fontSize='1xl'>{movie.title}</Heading>
        </CardFooter>
        <CardFooter>
            <Heading fontSize='sm'>{formattedReleaseDate}</Heading>
        </CardFooter>
    </Card.Root>
  )
}

export default MovieCard