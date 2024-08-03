import { RootState } from '@/store'
import { Paper, Skeleton } from '@mantine/core'
import { useSelector } from 'react-redux'
import { Image } from '@mantine/core'
import { getResourceByPath } from '@/shared/api/resource'

export function ProfileAvatar() {
  const { user } = useSelector((state: RootState) => state.UserReducer)
  // TODO: Добавить предварительную загрузку
  return (
    <Paper
      w={100}
      h={100}
      radius="50%"
      withBorder
      mx="auto"
      style={{ overflow: 'hidden' }}>
      {user?.avatar ? (
        <Image
          src={getResourceByPath(user.avatar)}
          alt="profile image"
          fit="cover"
          h="100%"
          w="100%"
        />
      ) : (
        // TODO: Добавить моковую картинку
        <Skeleton width="100%" height="100%" animate={false} />
      )}
    </Paper>
  )
}
