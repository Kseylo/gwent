import { IComment } from '@/shared/types/thread'
import { Avatar, Group, Paper, Text } from '@mantine/core'
import styles from './comment.module.css'
import { useEditor } from '@/shared/utils/use-editor'
import { EditorContent } from '@tiptap/react'

export default function Comment({ comment }: { comment: IComment }) {
  const editor = useEditor({
    content: comment.content,
    editable: false,
  })
  return (
    <Paper withBorder p={'md'}>
      <Group wrap={'nowrap'} gap={'xs'}>
        <Avatar
          size={'sm'}
          src={
            'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
        <Text className={styles.author}>{comment.author}</Text>
        <Text size="xs" c="dimmed">
          •
        </Text>
        <Text size="xs" c="dimmed">
          {comment.date}
        </Text>
      </Group>
      <EditorContent editor={editor} />
    </Paper>
  )
}
