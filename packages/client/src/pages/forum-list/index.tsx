import { Group, Stack, Text, Paper } from '@mantine/core'
import styles from './forum-list.module.css'
import { Link } from 'react-router-dom'
import { Routes } from '@/shared/config/routes'
import { dummyData } from '@/shared/config/forum'

export default function ForumList() {
  return (
    <Stack>
      {dummyData.map(forum => (
        <Paper
          key={forum.id}
          className={styles.forum}
          withBorder
          component={Link}
          to={`${Routes.FORUM}/${forum.slug}`}>
          <Group key={forum.id} justify={'space-between'}>
            <Text className={styles.title}>{forum.title}</Text>
            <Group gap={'lg'}>
              <Stack gap={'sm'}>
                <Text className={styles.info}>{forum.threads}</Text>
                <Text className={styles.infoText}>Треды</Text>
              </Stack>
              <Stack gap={'sm'}>
                <Text className={styles.info}>{forum.messages}</Text>
                <Text className={styles.infoText}>Сообщения</Text>
              </Stack>
            </Group>
          </Group>
        </Paper>
      ))}
    </Stack>
  )
}
