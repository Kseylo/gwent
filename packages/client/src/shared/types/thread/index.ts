import { JSONContent } from '@tiptap/react'

export interface IThread {
  id: number
  title: string
  date: string
  author: string
  authorAvatar: string
  commentsAmount: number
  content?: JSONContent
  comments?: IComment[]
}

export interface IComment {
  id: number
  date: string
  author: string
  authorAvatar: string
  content: JSONContent
}
