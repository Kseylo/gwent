import { Group, Stack, Text, Paper } from '@mantine/core'
import styles from './forum-list.module.css'
import { Link } from 'react-router-dom'
import { Routes } from '@/shared/config/routes'

const forums = [
  {
    id: 1,
    title: 'Новые игры',
    threads: 222,
    messages: 345,
    slug: 'new-games',
  },
  {
    id: 2,
    title: 'Геймдизайнеры',
    threads: 5,
    messages: 14,
    slug: 'game-designers',
  },
  {
    id: 3,
    title: 'Технологии',
    threads: 590,
    messages: 895,
    slug: 'tech',
  },
]

export default function ForumList() {
  return (
    <Stack>
      {forums.map(forum => (
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
