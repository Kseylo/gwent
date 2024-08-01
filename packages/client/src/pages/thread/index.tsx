import { Container, Divider, Paper, Stack, Title } from '@mantine/core'
import { DUMMY_THREAD_LIST_DATA } from '@/shared/config/thread'
import { ThreadHeader } from '@/shared/ui/thread-header'
import { EditorContent } from '@tiptap/react'
import Comment from '@/shared/ui/comment'
import { useEditor } from '@/shared/utils/use-editor'
import { AddComment } from '@/widgets/add-comment'

export default function Thread() {
  const thread = DUMMY_THREAD_LIST_DATA[0]
  const editor = useEditor({
    content: thread.content,
    editable: false,
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
        <Stack>
          <AddComment />
          {thread.comments?.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Stack>
      </Paper>
    </Container>
  )
}
