import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import MovieListSelector from "./components/MovieListSelector";
import type { MovieList } from "./hooks/useMovieList";

//https://www.themoviedb.org/

export interface MovieQuery {
  genre: Genre | null;
  movielist: MovieList | null;
}

function App() {
  const showAside = useBreakpointValue({ lg: true });

  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedMovieList, setSelectedMovieList] = useState<MovieList | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" padding={5}>
        <NavBar />
      </GridItem>
      {showAside && (
        <GridItem area="aside" padding={5}>
          <GenreList
            selectedGenre={movieQuery.genre}
            onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
          />
        </GridItem>
      )}
      <GridItem area="main">
        <MovieListSelector
          onSelectedMovieList={(movielist) =>
            setMovieQuery({ ...movieQuery, movielist })
          }
        />
        <MovieGrid
          movieQuery={movieQuery}
          // selectedMovieList={movieQuery.movielist}
          // selectedGenre={movieQuery.genre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
