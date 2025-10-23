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

  function formatReleaseDate(dateString?: string) {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Unknown date"
      : new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(date);
  }

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
          fontSize="xl"
          fontWeight="bold"
          _hover={{ color: "blue.300", cursor: "pointer" }}
        >
          {movie.title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {formatReleaseDate(movie.release_date)}
        </Text>
      </VStack>
    </Card.Root>
  );
};

export default MovieCard;
