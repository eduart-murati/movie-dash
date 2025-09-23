import type { Movie } from '../hooks/useMovies'
import { AspectRatio, Card, CardBody, CardFooter, Heading, HStack, Image } from '@chakra-ui/react'
import MovieStarRating from './MovieStarRating';
import MovieVotingScore from './MovieVotingScore';

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
        <CardBody > 
            <HStack textJustify="space-between">
                <MovieStarRating rating={movie.vote_average} />
                <MovieVotingScore score={movie.vote_count} />
            </HStack>           
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