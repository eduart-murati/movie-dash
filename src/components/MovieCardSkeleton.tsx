import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const MovieCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height ="600px">
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Skeleton>
    </Card.Root>
  )
}

export default MovieCardSkeleton