
import { Grid, GridItem, useBreakpointValue  } from "@chakra-ui/react"

import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";

//https://www.themoviedb.org/

function App() {

  const showAside = useBreakpointValue({ lg: true });
  
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"` 
  }}>
  <GridItem area='nav'>
    <NavBar/>
  </GridItem>
  {showAside && (
      <GridItem area="aside" >  
        Aside
      </GridItem>
  )}
  <GridItem area='main' >
    <MovieGrid/>
  </GridItem> 
</Grid>
}

export default App
