import type { Movie } from "../hooks/useMovies";
import {
  AspectRatio,
  Card,
  CardBody,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import MovieStarRating from "./MovieStarRating";
import MovieVotingScore from "./MovieVotingScore";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  if (!movie.poster_path) {
    return null; // Ose një placeholder
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
    : "https://via.placeholder.com/342x513.png?text=No+Image";

  const formattedReleaseDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(movie.release_date));

  return (
    <Card.Root>
      {" "}
      {/* maxW="400px" */}
      <AspectRatio ratio={2 / 3}>
        <Image src={imageUrl} alt={movie.title} objectFit="cover" />
      </AspectRatio>
      <CardBody>
        <HStack justifyContent="space-between">
          <MovieStarRating rating={movie.vote_average} />
          <MovieVotingScore score={movie.vote_count} />
        </HStack>
      </CardBody>
      <VStack
        align="flex-start"
        h="100%"
        justifyContent="flex-start"
        gap={0}
        px={4}
      >
        <Text
          lineClamp={2}
          fontSize="2xl"
          fontWeight="bold"
          _hover={{ color: "blue.300", cursor: "pointer" }}
        >
          {movie.title}
        </Text>
        <Text fontSize="lg" color="gray.500">
          {formattedReleaseDate}
        </Text>
      </VStack>
    </Card.Root>
  );
};

export default MovieCard;
