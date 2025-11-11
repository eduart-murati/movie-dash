import useMovies from "@/hooks/useMovies";
import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import MovieCardSceleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import type { MovieQuery } from "@/App";

interface Props {
  movieQuery: MovieQuery;
  page: number;
  setPage: (page: number) => void;
}

const MovieGrid = ({ movieQuery, page, setPage }: Props) => {
  const { data, totalPages, error, isLoading } = useMovies(movieQuery, page);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={5} gap={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSceleton />
            </MovieCardContainer>
          ))}
        {data?.map((movie) => (
          <MovieCardContainer key={movie.id}>
            <MovieCard movie={movie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>

      {/* Pagination */}
      {totalPages > 1 && (
        <HStack justifyContent="center" gap={4} marginTop={5}>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </Button>
          <Text>
            Page {page} of {totalPages}
          </Text>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </HStack>
      )}
    </>
  );
};

export default MovieGrid;
