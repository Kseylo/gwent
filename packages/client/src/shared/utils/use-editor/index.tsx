import { useEditor as useTipTapEditor, UseEditorOptions } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Editor } from '@tiptap/react/src/Editor'
import { Placeholder } from '@tiptap/extension-placeholder'

interface EditorOptions extends Omit<UseEditorOptions, 'extensions'> {
  placeholder?: string
}

export function useEditor(options: EditorOptions): Editor | null {
  return useTipTapEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: options.placeholder }),
    ],
    immediatelyRender: true,
    shouldRerenderOnTransaction: false,
    ...options,
  })
}
