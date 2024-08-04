import { Card } from './card'

export class GameEngine {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  cards: Card[]

  constructor(config: {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
  }) {
    this.canvas = config.canvas
    this.ctx = config.ctx

    this.cards = [
      new Card({ x: 10, y: 10 }),
      new Card({
        x: 200,
        y: 10,
      }),
    ]
  }

  init() {
    this.canvas.addEventListener('click', this.handleClick.bind(this))
    this.startGame()
  }

  startGame() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.fillStyle = '#fff'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.cards.forEach(card => card.draw(this.ctx))

      requestAnimationFrame(step)
    }
    step()
  }

  handleClick(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    this.cards.forEach(card => {
      if (card.isClicked(x, y)) {
        card.color = 'green'
      }
    })
  }
}
