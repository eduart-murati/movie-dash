import {
  AspectRatio,
  Card,
  CardBody,
  HStack,
  Image,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import MovieStarRating from "./MovieStarRating";
import MovieVotingScore from "./MovieVotingScore";
import useMovieTrailer from "../hooks/useMovieTrailer"; // Importoni hook-un për trailer
import type { Movie } from "@/hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const isPosterAvailable = !!movie.poster_path;
  const TMDB_NO_IMAGE_URL =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
    : TMDB_NO_IMAGE_URL;

  const { trailer, loading, error } = useMovieTrailer({ movieId: movie.id });

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

        <HStack gap={5} justifyContent="space-between" w="100%">
          <Text fontSize="sm" color="gray.500">
            {formatReleaseDate(movie.release_date)}
          </Text>
          {/* Butoni për të hapur trailerin */}
          <Button
            height={5}
            onClick={() => {
              if (trailer) {
                // Parametrat për dritaren popup
                const PADDING_BUFFER = 34;
                const width = 900 + PADDING_BUFFER;
                const height = 550 + PADDING_BUFFER;
                const left = (window.innerWidth - width) / 2;
                const top = (window.innerHeight - height) / 2;

                // Hap dritaren popup për trailerin
                window.open(
                  `https://www.youtube.com/watch?v=${trailer.key}`,
                  "_blank",
                  `width=${width},height=${height},top=${top},left=${left},resizable=yes`
                );
              }
            }}
            colorScheme="blue"
            disabled={!trailer}
          >
            Watch Trailer
          </Button>
        </HStack>
      </VStack>
    </Card.Root>
  );
};

export default MovieCard;
