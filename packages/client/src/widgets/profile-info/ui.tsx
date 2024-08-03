import { InputValidator } from '@/shared/utils/input-validator'
import { RootState } from '@/store'
import { Stack, InputBase, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IMaskInput } from 'react-imask'
import { useSelector } from 'react-redux'

interface ProfileInfoProps {
  isEdit: boolean
  onSubmit: (data: any) => void
  onCancelEdit: VoidFunction
}

export function ProfileInfo({
  isEdit,
  onSubmit,
  onCancelEdit,
}: ProfileInfoProps) {
  const { user } = useSelector((state: RootState) => state.UserReducer)

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: {
      email: user?.email ?? '',
      login: user?.login ?? '',
      first_name: user?.first_name ?? '',
      second_name: user?.second_name ?? '',
      display_name: user?.display_name ?? '',
      phone: user?.phone ?? '',
    },
    validate: {
      email: InputValidator.validateEmail,
      login: InputValidator.validateLogin,
      first_name: InputValidator.validateName,
      second_name: InputValidator.validateName,
      display_name: InputValidator.validateName,
      phone: InputValidator.validatePhone,
    },
  })

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <InputBase
          label="Почта"
          placeholder="example@email.ru"
          readOnly={!isEdit}
          withAsterisk
          {...form.getInputProps('email')}
        />
        <InputBase
          label="Логин"
          placeholder="test_1234"
          readOnly={!isEdit}
          withAsterisk
          {...form.getInputProps('login')}
        />
        <InputBase
          label="Имя"
          placeholder="Иван"
          readOnly={!isEdit}
          withAsterisk
          {...form.getInputProps('first_name')}
        />
        <InputBase
          label="Фамилия"
          placeholder="Иванов"
          readOnly={!isEdit}
          {...form.getInputProps('second_name')}
        />
        <InputBase
          label="Имя в игре"
          placeholder="ivanivanov"
          readOnly={!isEdit}
          withAsterisk
          {...form.getInputProps('display_name')}
        />
        <InputBase
          label="Телефон"
          placeholder="+7 (999) 999-99-99"
          component={IMaskInput}
          mask="+7 (000) 000-00-00"
          readOnly={!isEdit}
          withAsterisk
          {...form.getInputProps('phone')}
        />
        {isEdit ? (
          <>
            <Button color="red" onClick={onCancelEdit}>
              Отменить
            </Button>
            <Button type="submit">Сохранить</Button>
          </>
        ) : null}
      </Stack>
    </form>
  )
}
