import { RootState } from '@/app/store'
import { getResourceByPath } from '@/shared/api/resource'
import {
  ChangePasswordArgs,
  ChangeProfileArgs,
  User,
  changeAvatar,
  changePassword,
  changeProfile,
} from '@/shared/api/user'
import {
  Stack,
  Button,
  Paper,
  Image,
  InputBase,
  FileButton,
  PasswordInput,
} from '@mantine/core'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'

interface ChangePasswordFormProps {
  // TODO: Удалить any
  onSubmit: (data: any) => void
  onCancel: VoidFunction
}

function ChangePasswordForm({ onSubmit, onCancel }: ChangePasswordFormProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          name="oldPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              type="password"
              label="Старый пароль"
              placeholder="Старый пароль"
              {...field}
            />
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              type="password"
              label="Новый пароль"
              placeholder="Новый пароль"
              {...field}
            />
          )}
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
  const { user } = useSelector((state: RootState) => state.auth)

  const { handleSubmit, control } = useForm<User>({
    defaultValues: {
      email: user?.email ?? '',
      login: user?.login ?? '',
      first_name: user?.first_name ?? '',
      second_name: user?.second_name ?? '',
      display_name: user?.display_name ?? '',
      phone: user?.phone ?? '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputBase
              label="Почта"
              placeholder="example@email.ru"
              readOnly={!isEdit}
              {...field}
            />
          )}
        />
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <InputBase
              label="Логин"
              placeholder="test_1234"
              readOnly={!isEdit}
              {...field}
            />
          )}
        />
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <InputBase
              label="Имя"
              placeholder="Иван"
              readOnly={!isEdit}
              {...field}
            />
          )}
        />
        <Controller
          name="second_name"
          control={control}
          render={({ field }) => (
            <InputBase
              label="Фамилия"
              placeholder="Иванов"
              readOnly={!isEdit}
              {...field}
            />
          )}
        />
        <Controller
          name="display_name"
          control={control}
          render={({ field }) => (
            <InputBase
              label="Имя в игре"
              placeholder="ivanivanov"
              readOnly={!isEdit}
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputBase
              label="Телефон"
              placeholder="79999999999"
              readOnly={!isEdit}
              {...field}
            />
          )}
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
    <Stack maw={460} p={20} mx="auto">
      <ProfileAvatar path="/test-path" />
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

interface ProfileAvatar {
  path: string
}
function ProfileAvatar({ path }: ProfileAvatar) {
  // TODO: Добавить скелетон + обработку ошибок
  return (
    <Paper w={100} h={100} radius="50%" withBorder mx="auto">
      <Image
        src={getResourceByPath(path)}
        alt="profile image"
        fit="cover"
        h="100%"
        w="100%"
      />
    </Paper>
  )
}
