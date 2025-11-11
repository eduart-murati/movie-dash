import useGenres, { type Genre } from "@/hooks/useGenres";
import {
  Box,
  VStack,
  HStack,
  Icon,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

import {
  FaTheaterMasks,
  FaRocket,
  FaCampground,
  FaSmileBeam,
  FaCar,
  FaFileAlt,
  FaHeart,
  FaHistory,
  FaGhost,
  FaMusic,
  FaQuestion,
  FaStar,
  FaCrosshairs,
  FaBomb,
  FaHandPeace,
  FaHatCowboy,
  FaBookOpen,
  FaGlassMartini,
  FaPaw,
} from "react-icons/fa";
import type { IconType } from "react-icons/lib";

const genreIconMap: { [key: number]: IconType } = {
  // lista e objekteve të ikonave
  28: FaRocket,
  12: FaCampground,
  16: FaPaw,
  35: FaSmileBeam,
  80: FaCar,
  99: FaFileAlt,
  18: FaTheaterMasks,
  10751: FaHeart,
  14: FaBookOpen,
  36: FaHistory,
  27: FaGhost,
  10402: FaMusic,
  9648: FaQuestion,
  10749: FaGlassMartini,
  878: FaCrosshairs,
  10770: FaStar,
  53: FaBomb,
  10752: FaHandPeace,
  37: FaHatCowboy,
};

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data = [], isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    // Përdorim VStack si zëvendësues për List
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <VStack as="ul" align="stretch">
        {data.map((genre) => {
          const isSelected = genre.id === selectedGenre?.id;
          return (
            // Përdorim Box si zëvendësues për ListItem, me 'as="li"'
            <Box as="li" key={genre.id} paddingY="1px">
              <HStack>
                <Icon
                  as={genreIconMap[genre.id]}
                  color={isSelected ? "blue.400" : "gray.500"}
                  boxSize="32px"
                  borderRadius={8}
                  transition="color 0.2s ease"
                />
                <Button
                  whiteSpace={"normal"}
                  fontWeight={isSelected ? "bold" : "normal"}
                  color={isSelected ? "blue.400" : "gray.500"}
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="ghost"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </Box>
          );
        })}
      </VStack>
    </>
  );
};

export default GenreList;
