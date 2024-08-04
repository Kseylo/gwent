import { ChangePasswordForm } from '@/features/change-password'
import { ProfileAvatar } from '@/features/profile-avatar'
import {
  ChangePasswordArgs,
  ChangeProfileArgs,
  changeAvatar,
  changePassword,
  changeProfile,
} from '@/shared/api/user'
import { ProfileInfo } from '@/widgets/profile-info'
import { Stack, Button, FileButton } from '@mantine/core'
import { useState } from 'react'

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
