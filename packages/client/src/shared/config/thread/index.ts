import type { IThread } from '@/shared/types/thread'

export const dummyThreadListData: IThread[] = [
  {
    id: 1,
    title: 'Новая технология в облачных вычислениях',
    date: '2024-07-01',
    author: 'Иван Иванов',
    authorAvatar: 'https://example.com/avatar1.jpg',
    commentsAmount: 120,
    comments: [
      {
        id: 1,
        date: '2024-07-01',
        author: 'Иван Иванов',
        authorAvatar: 'https://example.com/avatar1.jpg',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Most of these one-liners will be one declaration inside the CSS rule. In some cases, the selector will be more than just a simple element; in others, I will add extra declarations as recommendations for a better experience, thus making them more than a one-liner —my apologies in advance for those cases.',
                },
              ],
            },
          ],
        },
      },
    ],
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Most of these one-liners will be one declaration inside the CSS rule. In some cases, the selector will be more than just a simple element; in others, I will add extra declarations as recommendations for a better experience, thus making them more than a one-liner —my apologies in advance for those cases.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: "Some of these one-liners are more of a personal choice and won't apply to all websites (not everyone uses tables or forms). I will briefly describe each of them, what they do (with sample images), and why I like using them. Notice that the sample images may build on top of previous examples.",
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: "Here's a summary of what the one-liners do:",
            },
          ],
        },
        {
          type: 'bulletList',
          content: [
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Limit the content width within the viewport',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Increase the body text size',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Increase the line between rows of text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Limit the width of images',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Limit the width of text within the content',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Wrap headings in a more balanced way',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Form control colors to match page styles',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Easy-to-follow table rows',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Spacing in table cells and headings',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Reduce animations and movement',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 2,
          },
          content: [
            {
              type: 'text',
              text: 'Limit the content width in the viewport',
            },
          ],
        },
        {
          type: 'codeBlock',
          attrs: {
            language: null,
          },
          content: [
            {
              type: 'text',
              text: 'body {\n  max-width: clamp(320px, 90%, 1000px);\n  /* additional recommendation */\n  margin: auto;\n}',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Adding this one-liner will reduce the content size to occupy 90% of the viewport, limiting its width between 320 and 1000 pixels (feel free to update the minimum and maximum values).',
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Последние достижения в области ИИ',
    date: '2024-06-28',
    author: 'Анна Петрова',
    authorAvatar: 'https://example.com/avatar2.jpg',
    commentsAmount: 98,
  },
  {
    id: 3,
    title: 'Будущее квантовых вычислений',
    date: '2024-07-05',
    author: 'Сергей Сидоров',
    authorAvatar: 'https://example.com/avatar3.jpg',
    commentsAmount: 76,
  },
  {
    id: 4,
    title: 'Роль больших данных в современной науке',
    date: '2024-07-10',
    author: 'Мария Смирнова',
    authorAvatar: 'https://example.com/avatar4.jpg',
    commentsAmount: 54,
  },
  {
    id: 5,
    title: 'Разработка новых методов машинного обучения',
    date: '2024-07-12',
    author: 'Дмитрий Кузнецов',
    authorAvatar: 'https://example.com/avatar5.jpg',
    commentsAmount: 87,
  },
  {
    id: 6,
    title: 'Эволюция интернет технологий',
    date: '2024-07-14',
    author: 'Ольга Иванова',
    authorAvatar: 'https://example.com/avatar6.jpg',
    commentsAmount: 65,
  },
]
