import { useEditor } from '@/shared/utils/use-editor'
import { RichTextEditor } from '@mantine/tiptap'
import { Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

export function AddComment() {
  const [isContentEmpty, setIsContentEmpty] = useState(true)
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      content: '',
    },
  })

  const editor = useEditor({
    placeholder: 'Оставьте комментарий',
    content: form.values.content,
    onUpdate: ({ editor }) => {
      const text = editor.getText()
      setIsContentEmpty(text.length === 0)
      const content = editor.getJSON()
      form.getInputProps('content').onChange(content)
    },
  })

  return (
    <form
      onSubmit={form.onSubmit(values => {
        console.log(values)
      })}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Content />
      </RichTextEditor>
      <Button type={'submit'} mt={'md'} disabled={isContentEmpty}>
        Отправить
      </Button>
    </form>
  )
}
