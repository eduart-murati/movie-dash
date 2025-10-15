import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";

//https://www.themoviedb.org/

function App() {
  const showAside = useBreakpointValue({ lg: true });

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
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
