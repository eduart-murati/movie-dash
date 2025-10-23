import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  rating: number;
}

const MovieStarRating = ({ rating }: Props) => {
  const maxRating = 10;
  const numStars = 5;
  const normalizedRating = (rating / maxRating) * numStars;
  const stars = [];

  const starSize = "25px";

  for (let i = 1; i <= numStars; i++) {
    if (i <= normalizedRating) {
      // Full star
      stars.push(<Icon as={FaStar} color="gold" boxSize={starSize} key={i} />);
    } else if (i - 0.5 <= normalizedRating) {
      // Half star
      stars.push(
        <Icon as={FaStarHalfAlt} color="gold" boxSize={starSize} key={i} />
      );
    } else {
      // Empty star
      stars.push(
        <Icon as={FaStar} color="gray.300" boxSize={starSize} key={i} />
      );
    }
  }

  return <HStack gap={5}>{stars}</HStack>;
};

export default MovieStarRating;
