import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import MovieListSelector from "./components/MovieListSelector";
import type { MovieList } from "./hooks/useMovieList";

//https://www.themoviedb.org/

function App() {
  const showAside = useBreakpointValue({ lg: true });

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedMovieList, setSelectedMovieList] = useState<MovieList | null>(
    null
  );

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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      )}
      <GridItem area="main">
        <MovieListSelector
          onSelectedMovieList={(movielist) => setSelectedMovieList(movielist)}
        />
        <MovieGrid
          selectedMovieList={selectedMovieList}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
