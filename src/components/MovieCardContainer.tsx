import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default MovieCardContainer;
