import { InputValidator } from '@/shared/utils/input-validator'
import { Stack, PasswordInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

interface ChangePasswordFormProps {
  // TODO: Удалить any
  onSubmit: (data: any) => void
  onCancel: VoidFunction
}

export function ChangePasswordForm({
  onSubmit,
  onCancel,
}: ChangePasswordFormProps) {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    validate: {
      oldPassword: InputValidator.validatePassword,
      newPassword: InputValidator.validatePassword,
    },
  })

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <PasswordInput
          label="Старый пароль"
          placeholder="Старый пароль"
          withAsterisk
          autoComplete="current-password"
          {...form.getInputProps('oldPassword')}
        />
        <PasswordInput
          label="Новый пароль"
          placeholder="Новый пароль"
          withAsterisk
          autoComplete="new-password"
          {...form.getInputProps('newPassword')}
        />
        <Button color="red" onClick={onCancel}>
          Отменить
        </Button>
        <Button type="submit">Сохранить</Button>
      </Stack>
    </form>
  )
}
