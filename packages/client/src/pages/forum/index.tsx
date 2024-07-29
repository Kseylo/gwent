import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { dummyData } from '@/shared/config/forum'
import { Container, Title } from '@mantine/core'

export async function loader({ params }: LoaderFunctionArgs) {
  return dummyData.find(forum => forum.slug === params.slug)
}

export default function Forum() {
  const forum = useLoaderData() as typeof dummyData[0]
  return (
    <Container>
      <Title>{forum.title}</Title>
    </Container>
  )
}
