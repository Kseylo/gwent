import { Container, Paper, Title } from '@mantine/core'
import { dummyThreadListData } from '@/shared/config/thread'
import ThreadHeader from '@/shared/ui/thread-header'

export default function Thread() {
  const thread = dummyThreadListData[0]

  return (
    <Container>
      <Paper p={'md'} withBorder>
        <ThreadHeader thread={thread} />
        <Title mt={'md'}>{thread.title}</Title>
      </Paper>
    </Container>
  )
}
