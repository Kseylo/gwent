import { getResourceByPath } from '@/shared/api/resource'
import {
  ChangePasswordArgs,
  ChangeProfileArgs,
  changeAvatar,
  changePassword,
  changeProfile,
} from '@/shared/api/user'
import { InputValidator } from '@/shared/utils/input-validator'
import { RootState } from '@/store'
import {
  Stack,
  Button,
  Paper,
  Image,
  InputBase,
  FileButton,
  PasswordInput,
  Skeleton,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { useSelector } from 'react-redux'

interface ChangePasswordFormProps {
  // TODO: Удалить any
  onSubmit: (data: any) => void
  onCancel: VoidFunction
}

function ChangePasswordForm({ onSubmit, onCancel }: ChangePasswordFormProps) {
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
          key={form.key('oldPassword')}
          {...form.getInputProps('oldPassword')}
        />
        <PasswordInput
          label="Новый пароль"
          placeholder="Новый пароль"
          withAsterisk
          key={form.key('newPassword')}
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
interface ProfileInfoProps {
  isEdit: boolean
  onSubmit: (data: any) => void
  onCancelEdit: VoidFunction
}
function ProfileInfo({ isEdit, onSubmit, onCancelEdit }: ProfileInfoProps) {
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
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <InputBase
          label="Логин"
          placeholder="test_1234"
          readOnly={!isEdit}
          withAsterisk
          key={form.key('login')}
          {...form.getInputProps('login')}
        />
        <InputBase
          label="Имя"
          placeholder="Иван"
          readOnly={!isEdit}
          withAsterisk
          key={form.key('first_name')}
          {...form.getInputProps('first_name')}
        />
        <InputBase
          label="Фамилия"
          placeholder="Иванов"
          readOnly={!isEdit}
          withAsterisk
          key={form.key('second_name')}
          {...form.getInputProps('second_name')}
        />
        <InputBase
          label="Имя в игре"
          placeholder="ivanivanov"
          readOnly={!isEdit}
          withAsterisk
          key={form.key('display_name')}
          {...form.getInputProps('display_name')}
        />
        <InputBase
          label="Телефон"
          placeholder="+7 (999) 999-99-99"
          component={IMaskInput}
          mask="+7 (000) 000-00-00"
          readOnly={!isEdit}
          withAsterisk
          key={form.key('phone')}
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

export default function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false)
  const [isChangePassword, setIsChangePassword] = useState(false)

  const onSubmitChangePasswordForm = async (data: ChangePasswordArgs) => {
    const response = await changePassword(data)
    console.log(response, 'response')
  }

  const onSubmitChangeProfileForm = async (data: ChangeProfileArgs) => {
    const response = await changeProfile(data)
    console.log(response)
  }

  return (
    <Stack w="100%" maw={460} mx="auto" p={20}>
      <ProfileAvatar />
      <Stack>
        {isChangePassword ? (
          <ChangePasswordForm
            onSubmit={onSubmitChangePasswordForm}
            onCancel={() => {
              setIsChangePassword(false)
            }}
          />
        ) : (
          <ProfileInfo
            isEdit={isEdit}
            onSubmit={onSubmitChangeProfileForm}
            onCancelEdit={() => setIsEdit(false)}
          />
        )}
      </Stack>
      {!isChangePassword && !isEdit ? (
        <Stack>
          <Button onClick={() => setIsEdit(true)}>Редактировать</Button>
          <Button onClick={() => setIsChangePassword(true)}>
            Изменить пароль
          </Button>
          <FileButton
            onChange={file => {
              if (file) {
                const data = new FormData()
                data.append('avatar', file)
                changeAvatar(data)
              }
            }}
            accept="image/png,image/jpeg">
            {props => <Button {...props}>Изменить аватар</Button>}
          </FileButton>
        </Stack>
      ) : null}
    </Stack>
  )
}

function ProfileAvatar() {
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
