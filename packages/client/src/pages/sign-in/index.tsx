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
import {
  Link,
  useSubmit,
  ActionFunctionArgs,
  useNavigation,
  redirect,
} from 'react-router-dom'
import { Routes } from '@/shared/config/routes'
import { useForm } from '@mantine/form'
import { InputValidator } from '@/shared/utils/input-validator'
import { SignInValues } from '@/shared/api/auth/sign-in'
import { signIn } from '@/shared/api/auth/sign-in'
import { notifications } from '@mantine/notifications'

export async function action({ request }: ActionFunctionArgs) {
  const notificationId = notifications.show({
    title: 'Входим...',
    message: '',
    loading: true,
  })
  try {
    await signIn(await request.json())
  } catch (error) {
    notifications.update({
      id: notificationId,
      title: 'Ошибка',
      message: 'Неверный логин или пароль',
      color: 'red',
      loading: false,
    })
    return { ok: false }
  }
  notifications.update({
    id: notificationId,
    title: 'Вход выполнен',
    message: 'Добро пожаловать!',
    color: 'green',
    loading: false,
  })
  return redirect(Routes.HOME)
}

export default function SignIn() {
  const submit = useSubmit()
  const { state } = useNavigation()

  const form = useForm<SignInValues>({
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

  const handleSubmit = (values: SignInValues) => {
    submit(JSON.stringify(values), {
      method: 'post',
      action: Routes.SIGN_IN,
      encType: 'application/json',
    })
  }

  return (
    <Paper radius={'md'} p={'xl'} w={'30rem'} withBorder>
      <Text size={'lg'}>Добро пожаловать</Text>
      <Divider my={'lg'} />
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
          <Button type={'submit'} disabled={state === 'submitting'}>
            Войти
          </Button>
        </Group>
      </form>
    </Paper>
  )
}
