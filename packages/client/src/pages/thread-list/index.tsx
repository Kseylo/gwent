import { Link } from 'react-router-dom'
import { dummyThreadListData } from '@/shared/config/thread'
import { Box, Button, Paper, Stack, Text } from '@mantine/core'
import { IconMessageCircle } from '@tabler/icons-react'
import styles from './thread-list.module.css'
import { Routes } from '@/shared/config/routes'
import { ThreadHeader } from '@/shared/ui/thread-header'

export default function ThreadList() {
  return (
    <Box>
      <Stack gap={'xl'}>
        <Button
          style={{ placeSelf: 'start' }}
          component={Link}
          to={`${Routes.THREADS}/new`}>
          Создать тред
        </Button>
        <Stack>
          {dummyThreadListData.map(thread => (
            <Paper
              key={thread.id}
              className={styles.thread}
              component={Link}
              to={`${Routes.THREADS}/${thread.id}`}
              withBorder>
              <ThreadHeader thread={thread} />
              <Box mt={'xs'} ml={'3rem'}>
                <Text className={styles.title} mb={'xs'}>
                  {thread.title}
                </Text>
                <Button
                  variant={'subtle'}
                  size={'compact-md'}
                  rightSection={<IconMessageCircle size={18} />}>
                  {thread.commentsAmount}
                </Button>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
