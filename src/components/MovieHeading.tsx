import type { MovieQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  const movieLists = [
    { value: "all", label: "All" },
    { value: "popular", label: "Most Popular" },
    { value: "top_rated", label: "Top Rated" },
    { value: "upcoming", label: "Upcoming" },
    { value: "now_playing", label: "Now Playing" },
  ];

  // 1. Gjej objektin e listës së filmave duke përdorur vlerën aktuale (movieQuery.movieList)
  const currentMovieList = movieLists.find(
    (list) => list.value === movieQuery.movieList
  );

  const movieListLabel = currentMovieList?.label || "All";

  const heading = ` ${movieListLabel || ""} ${
    movieQuery.genre?.name || ""
  } Movies`;

  return (
    <Heading as="h1" marginY={5} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
