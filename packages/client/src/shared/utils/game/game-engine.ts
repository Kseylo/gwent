import { Card } from './card'
import {
  CARD_HEIGHT,
  CARD_TYPE,
  CARD_WIDTH,
  DECK_HEIGHT,
  DECK_WIDTH,
  GAME_FIELD_LEFT_INDENT,
  ROW_HEIGHT,
  ROW_SPACING,
} from './config'
import { GameField } from './game-field'

export class GameEngine {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  deck: Card[] = []
  gameField: GameField
  selectedCard: Card | null = null

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
        type: CARD_TYPE.MELEE,
      }),
      new Card({
        x: CARD_WIDTH + 20,
        y: this.canvas.height - CARD_HEIGHT,
        strength: 3,
        type: CARD_TYPE.RANGED,
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
      this.drawPlayerHand()
      this.deck.forEach(card => card.draw(this.ctx))

      requestAnimationFrame(step)
    }
    step()
  }

  drawPlayerHand() {
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

    if (this.selectedCard) {
      const rowIndex = this.gameField.getRowIndex(y)
      const isCorrectRow =
        (this.selectedCard.type === CARD_TYPE.MELEE && rowIndex === 2) ||
        (this.selectedCard.type === CARD_TYPE.RANGED && rowIndex === 3)

      if (isCorrectRow) {
        this.selectedCard.x = GAME_FIELD_LEFT_INDENT + 10
        this.selectedCard.y = rowIndex * (ROW_HEIGHT + ROW_SPACING)
        this.selectedCard.selected = false
        this.selectedCard.isInField = true
        this.selectedCard = null
        this.gameField.highlightedRow = null
        return
      }
    }

    this.deck.forEach(card => {
      if (!card.isInField && card.isClicked(x, y)) {
        card.selected = !card.selected
        this.selectedCard = card.selected ? card : null
        if (this.selectedCard) {
          this.gameField.highlightedRow =
            this.selectedCard.type === CARD_TYPE.MELEE ? 2 : 3
        } else {
          this.gameField.highlightedRow = null
        }
      } else {
        card.selected = false
      }
    })
  }
}
