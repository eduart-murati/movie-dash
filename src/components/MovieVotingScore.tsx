import { Badge } from '@chakra-ui/react';


interface Props{
    score: number;
}

const MovieVotingScore = ({score}: Props) => {
  let bgColor = score > 75 ? 'green.500' : score > 60 ? 'yellow.500' : 'red.400';
  let textColor = 'white';
  
  if (score > 60 && score <= 75) {
    textColor = 'gray.800';
  }

  return (
    <Badge bg={bgColor} color={textColor} fontSize='14px' paddingX={2} borderRadius='4px'> {score} </Badge>    
  )
}

export default MovieVotingScore