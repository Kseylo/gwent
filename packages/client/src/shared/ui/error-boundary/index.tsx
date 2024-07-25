import { Button, Container, Group, Text, Title } from '@mantine/core'
import styles from './error-boundary.module.css'

interface ErrorBoundaryProps {
  status?: string | number
  sorry?: string
  description?: string
  buttonText?: string
  onRetry?: () => void
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const {
    status = 'Упс!',
    sorry = 'Простите, что-то пошло не так...',
    description = 'Попробуйте обновить страницу или повторите позже',
    buttonText = 'Обновить страницу',
    onRetry,
  } = props

  return (
    <Container className={styles.container}>
      <div className={styles.status}>{status}</div>
      <Title className={styles.sorry}>{sorry}</Title>
      <Text className={styles.description}>{description}</Text>
      <Group justify={'center'}>
        <Button variant={'subtle'} size={'md'} onClick={onRetry}>
          {buttonText}
        </Button>
      </Group>
    </Container>
  )
}
