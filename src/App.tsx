import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import MovieListSelector from "./components/MovieListSelector";
import SortSelctor from "./components/SortSelctor";

//https://www.themoviedb.org/

export interface MovieQuery {
  genre: Genre | null;
  movieList: string;
  sortOrder: string;
  searchText: string;
}

function App() {
  const showAside = useBreakpointValue({ lg: true });
  const [searchText, setSearchText] = useState("");
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    genre: null,
    movieList: "",
    sortOrder: "",
    searchText: "",
  } as MovieQuery);

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
        <NavBar
          searchText={searchText}
          onSearchChange={(value: string) => setSearchText(value)}
          onSearchSubmit={(text) =>
            setMovieQuery({
              ...movieQuery,
              searchText: text,
              genre: null,
              movieList: "",
            })
          }
        />
      </GridItem>
      {showAside && (
        <GridItem area="aside" padding={5}>
          <GenreList
            selectedGenre={movieQuery.genre}
            onSelectGenre={(genre) =>
              setMovieQuery({ ...movieQuery, genre, searchText: "" })
            }
          />
        </GridItem>
      )}
      <GridItem area="main">
        <HStack gap={5} paddingLeft={5} marginBottom={5}>
          <MovieListSelector
            movieList={movieQuery.movieList}
            onSelectedMovieList={(movieList) =>
              setMovieQuery({ ...movieQuery, movieList })
            }
            isDisabled={!!searchText} // Çaktivizo kur ka kërkim
          />
          <SortSelctor
            sortOrder={movieQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setMovieQuery({ ...movieQuery, sortOrder })
            }
            // isDisabled={!!searchText} // Çaktivizo kur ka kërkim
          />
        </HStack>

        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
