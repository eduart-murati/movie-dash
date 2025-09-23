import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const MovieCardSkeleton = () => {
  return (
    <Card.Root width='400px' borderRadius="lg" overflow="hidden">
        <Skeleton height ="600px">
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Skeleton>
    </Card.Root>
  )
}

export default MovieCardSkeleton