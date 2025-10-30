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
  const isPosterAvailable = !!movie.poster_path;
  const TMDB_NO_IMAGE_URL =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  // https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-4ee37443c461fff5bc221b43ae018a5dae317469c8e2479a87d562537dd45fdc.svg

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
    : TMDB_NO_IMAGE_URL;

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
        <Image
          src={imageUrl}
          alt={movie.title}
          objectFit={isPosterAvailable ? "cover" : "contain"}
          boxSize={isPosterAvailable ? "auto" : "50%"}
          p={isPosterAvailable ? 0 : 4}
        />
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
