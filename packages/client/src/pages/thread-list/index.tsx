import { Link, useLocation } from 'react-router-dom'
import { dummyThreadListData } from '@/shared/config/forum'
import { Avatar, Box, Button, Group, Paper, Stack, Text } from '@mantine/core'
import { IconMessageCircle } from '@tabler/icons-react'
import styles from './thread-list.module.css'

export default function ThreadList() {
  const location = useLocation()

  return (
    <Box>
      <Stack gap={'xl'}>
        <Button style={{ placeSelf: 'start' }}>Создать тред</Button>
        <Stack>
          {dummyThreadListData.map(thread => (
            <Paper
              key={thread.id}
              className={styles.thread}
              component={Link}
              to={`${location.pathname}/${thread.id}`}
              withBorder>
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
              <Box mt={'xs'} ml={'3rem'}>
                <Text className={styles.title} mb={'xs'}>
                  {thread.title}
                </Text>
                <Button
                  variant={'subtle'}
                  size={'compact-md'}
                  rightSection={<IconMessageCircle size={18} />}>
                  {thread.comments}
                </Button>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
