import { useEditor as useTipTapEditor, UseEditorOptions } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Editor } from '@tiptap/react/src/Editor'

const extensions = [StarterKit]

export function useEditor(options: UseEditorOptions): Editor | null {
  return useTipTapEditor({
    extensions,
    immediatelyRender: true,
    shouldRerenderOnTransaction: false,
    ...options,
  })
}
