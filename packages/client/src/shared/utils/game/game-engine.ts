import { Card } from './card'
import { CARD_HEIGHT, CARD_WIDTH, DECK_HEIGHT, DECK_WIDTH } from './config'
import { GameField } from './game-field'

export class GameEngine {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  deck: Card[] = []
  gameField: GameField

  constructor(config: {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
  }) {
    this.canvas = config.canvas
    this.ctx = config.ctx

    this.gameField = new GameField(this.ctx)

    this.deck = [
      new Card({
        x: 10,
        y: this.canvas.height - CARD_HEIGHT,
        strength: 5,
      }),
      new Card({
        x: CARD_WIDTH + 20,
        y: this.canvas.height - CARD_HEIGHT,
        strength: 3,
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
      this.gameField.draw()
      this.drawHandField()
      this.deck.forEach(card => card.draw(this.ctx))

      requestAnimationFrame(step)
    }
    step()
  }

  drawHandField() {
    const { ctx, canvas } = this

    ctx.fillStyle = '#e0e0e0'
    ctx.fillRect(0, canvas.height - CARD_HEIGHT, DECK_WIDTH, DECK_HEIGHT)
    ctx.strokeStyle = '#000'
    ctx.strokeRect(0, canvas.height - CARD_HEIGHT, DECK_WIDTH, DECK_HEIGHT)
  }

  handleClick(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    this.deck.forEach(card => {
      if (card.isClicked(x, y)) {
        card.color = 'green'
      }
    })
  }
}
