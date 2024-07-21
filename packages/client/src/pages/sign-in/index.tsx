import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { Routes } from '../../shared/config/routes'

export default function SignIn() {
  return (
    <Container size={'xs'}>
      <Paper radius={'md'} p={'xl'} withBorder>
        <Text size={'lg'}>Добро пожаловать</Text>
        <Divider my={'lg'} />
        <form>
          <Stack>
            <TextInput label={'Логин'} placeholder={'Введите логин'} required />
            <PasswordInput
              label={'Пароль'}
              placeholder={'Введите пароль'}
              required
            />
          </Stack>
          <Group justify={'space-between'} mt={'xl'}>
            <Anchor component={Link} to={Routes.SIGN_UP}>
              Нет аккаунта? Зарегистрируйтесь
            </Anchor>
            <Button type={'submit'}>Войти</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
