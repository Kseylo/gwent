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
  InputBase,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { Routes } from '../../shared/config/routes'
import { IMaskInput } from 'react-imask'
import { useForm } from '@mantine/form'
import { InputValidator } from '../../shared/utils/input-validator'

export default function SignUp() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: {
      first_name: '',
      second_name: '',
      email: '',
      phone: '',
      login: '',
      password: '',
    },
    validate: {
      first_name: InputValidator.validateName,
      second_name: InputValidator.validateName,
      email: InputValidator.validateEmail,
      phone: InputValidator.validatePhone,
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
            label={'Имя'}
            placeholder={'Введите имя'}
            withAsterisk
            key={form.key('first_name')}
            {...form.getInputProps('first_name')}
          />
          <TextInput
            label={'Фамилия'}
            placeholder={'Введите фамилию'}
            withAsterisk
            key={form.key('second_name')}
            {...form.getInputProps('second_name')}
          />
          <TextInput
            label={'Почта'}
            placeholder={'Введите почту'}
            type={'email'}
            withAsterisk
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <InputBase
            label="Телефон"
            component={IMaskInput}
            mask="+7 (000) 000-00-00"
            placeholder="Введите телефон"
            withAsterisk
            key={form.key('phone')}
            {...form.getInputProps('phone')}
          />
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
          <Anchor component={Link} to={Routes.SIGN_IN}>
            Уже есть аккаунт? Войти
          </Anchor>
          <Button type={'submit'}>Зарегистрироваться</Button>
        </Group>
      </form>
    </Paper>
  )
}
