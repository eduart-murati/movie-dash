import useMovieList from "@/hooks/useMovieList";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const MovieListSelector = () => {
  const { data, error, isLoading } = useMovieList();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button as={Button} size="sm">
          Open <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((movielist) => (
              <Menu.Item key={movielist.id} value={movielist.name}>
                {movielist.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default MovieListSelector;
