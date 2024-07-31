import { RichTextEditor } from '@mantine/tiptap'
import { JSONContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { TextInput, Divider, Button, Container } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import styles from './new-thread.module.css'

interface NewThreadValues {
  title: string
  content: JSONContent
}

export default function NewThread() {
  const form = useForm<NewThreadValues>({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: {
      title: '',
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '##',
              },
            ],
          },
        ],
      },
    },
    validate: {
      title: isNotEmpty(),
    },
  })

  const editor = useEditor({
    extensions: [StarterKit],
    content: form.values.content,
    onUpdate: ({ editor }) => {
      const content = editor.getJSON()
      form.getInputProps('content').onChange(content)
    },
  })

  return (
    <Container>
      <form
        onSubmit={form.onSubmit(values => {
          console.log('values', values)
        })}>
        <RichTextEditor editor={editor}>
          <TextInput
            placeholder={'Заголовок треда'}
            variant={'unstyled'}
            size={'xl'}
            key={form.key('title')}
            autoFocus
            classNames={{
              input: styles.input,
            }}
            {...form.getInputProps('title')}
          />
          <Divider />
          <RichTextEditor.Toolbar>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>
          <RichTextEditor.Content />
        </RichTextEditor>
        <Button mt={'md'} type={'submit'}>
          Опубликовать
        </Button>
      </form>
    </Container>
  )
}
