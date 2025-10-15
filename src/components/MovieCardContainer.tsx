import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box width="400px" borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default MovieCardContainer;
