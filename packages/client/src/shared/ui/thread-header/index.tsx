import { Avatar, Group, Stack, Text } from '@mantine/core'
import styles from '@/pages/thread-list/thread-list.module.css'
import type { IThread } from '@/shared/types/thread'

export default function ThreadHeader({ thread }: { thread: IThread }) {
  return (
    <Group wrap={'nowrap'} gap={'xs'}>
      <Avatar
        size={'md'}
        src={
          'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <Stack gap={'0'}>
        <Text className={styles.author}>{thread.author}</Text>
        <Text size="xs" c="dimmed">
          {thread.date}
        </Text>
      </Stack>
    </Group>
  )
}
