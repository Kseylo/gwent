import {
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { Routes } from '@/shared/config/routes'
import { useForm } from '@mantine/form'
import { InputValidator } from '@/shared/utils/input-validator'

export default function SignIn() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: {
      login: '',
      password: '',
    },
    validate: {
      login: InputValidator.validateLogin,
      password: InputValidator.validatePassword,
    },
  })

  return (
    <Paper radius={'md'} p={'xl'} w={'30rem'} withBorder>
      <Text size={'lg'}>Добро пожаловать</Text>
      <Divider my={'lg'} />
      <form onSubmit={form.onSubmit(values => console.log(values))}>
        <Stack>
          <TextInput
            label={'Логин'}
            placeholder={'Введите логин'}
            withAsterisk
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <PasswordInput
            label={'Пароль'}
            placeholder={'Введите пароль'}
            withAsterisk
            key={form.key('password')}
            {...form.getInputProps('password')}
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
  )
}
