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
  InputBase,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { Routes } from '../../shared/config/routes'
import { IMaskInput } from 'react-imask'

export default function SignUp() {
  return (
    <Container size={'xs'}>
      <Paper radius={'md'} p={'xl'} withBorder>
        <Text size={'lg'}>Добро пожаловать</Text>
        <Divider my={'lg'} />
        <form>
          <Stack>
            <TextInput
              label={'Имя'}
              placeholder={'Введите имя'}
              name={'first_name'}
              withAsterisk
            />
            <TextInput
              label={'Фамилия'}
              placeholder={'Введите фамилию'}
              name={'second_name'}
              withAsterisk
            />
            <TextInput
              label={'Почта'}
              placeholder={'Введите почту'}
              name={'email'}
              type={'email'}
              withAsterisk
            />
            <InputBase
              label="Телефон"
              component={IMaskInput}
              mask="+7 (000) 000-00-00"
              placeholder="Введите телефон"
              withAsterisk
            />
            <TextInput
              label={'Логин'}
              placeholder={'Введите логин'}
              name={'login'}
              withAsterisk
            />
            <PasswordInput
              label={'Пароль'}
              placeholder={'Введите пароль'}
              name={'password'}
              withAsterisk
            />
          </Stack>
          <Group justify={'space-between'} mt={'xl'}>
            <Anchor component={Link} to={Routes.SIGN_IN}>
              Уже есть аккаунт? Войти
            </Anchor>
            <Button type={'submit'}>Зарегистрироваться</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
