import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedMovieList: (movieList: string) => void;
  movieList: string;
  isDisabled?: boolean;
}

const MovieListSelector = ({
  onSelectedMovieList,
  movieList,
  isDisabled,
}: Props) => {
  const movieLists = [
    { value: "all", label: "All Movies" },
    { value: "popular", label: "Most Popular" },
    { value: "top_rated", label: "Top Rated" },
    { value: "upcoming", label: "Upcoming" },
    { value: "now_playing", label: "Now Playing" },
  ];

  const currentMovieList = movieLists.find((list) => list.value === movieList);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button as={Button} size="sm" disabled={isDisabled}>
          Movie Lists: {currentMovieList?.label || "All Movies"}{" "}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {movieLists.map((list) => (
              <Menu.Item
                onClick={() => onSelectedMovieList(list.value)}
                key={list.value}
                value={list.value}
                disabled={isDisabled}
              >
                {list.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default MovieListSelector;
