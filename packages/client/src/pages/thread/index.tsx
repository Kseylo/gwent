import { Container, Divider, Paper, Title } from '@mantine/core'
import { dummyThreadListData } from '@/shared/config/thread'
import ThreadHeader from '@/shared/ui/thread-header'
import { EditorContent } from '@tiptap/react'
import Comment from '@/shared/ui/comment'
import { useEditor } from '@/shared/utils/use-editor'

export default function Thread() {
  const thread = dummyThreadListData[0]
  const editor = useEditor({
    content: thread.content,
  })

  return (
    <Container>
      <Paper p={'md'} withBorder>
        <ThreadHeader thread={thread} />
        <Title mt={'md'}>{thread.title}</Title>
        <EditorContent editor={editor} />
        <Divider mt={'xl'} mb={'md'} />
        <Title order={2} mb={'sm'}>
          Комментарии
        </Title>
        {thread.comments?.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Paper>
    </Container>
  )
}
