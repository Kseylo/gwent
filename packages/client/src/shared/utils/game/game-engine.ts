import { Card } from './card'
import {
  CARD_HEIGHT,
  CARD_TYPE,
  CARD_WIDTH,
  GAME_FIELD_LEFT_INDENT,
  ROW_HEIGHT,
  ROW_SPACING,
} from './config'
import { GameField } from './game-field'
import { Deck } from './deck'
import { PlayerHand } from './player-hand'

export class GameEngine {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  deck: Deck
  gameField: GameField
  playerHand: PlayerHand
  selectedCard: Card | null = null

  constructor(config: {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
  }) {
    this.canvas = config.canvas
    this.ctx = config.ctx

    this.gameField = new GameField(this.ctx)
    this.playerHand = new PlayerHand()
    this.deck = new Deck({
      ctx: this.ctx,
      cards: [
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
      ],
    })
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
      this.playerHand.draw(this.ctx, this.canvas)
      this.deck.draw()

      requestAnimationFrame(step)
    }
    step()
  }

  handleClick(e: MouseEvent) {
    const { x, y } = this._getClickCoordinates(e)

    if (this.selectedCard) {
      if (this.selectedCard.isClicked(x, y)) {
        this._deselectCard()
      } else {
        this._handleCardPlacement(y)
      }
    } else {
      this._handleCardSelection(x, y)
    }
  }

  private _getClickCoordinates(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  private _handleCardPlacement(y: number) {
    if (!this.selectedCard) return

    const rowIndex = this.gameField.getRowIndex(y)
    const isCorrectRow =
      (this.selectedCard.type === CARD_TYPE.MELEE && rowIndex === 2) ||
      (this.selectedCard.type === CARD_TYPE.RANGED && rowIndex === 3)

    if (isCorrectRow) {
      this._placeCard(rowIndex)
    }
  }

  private _placeCard(rowIndex: number) {
    if (!this.selectedCard) return

    this.selectedCard.x = GAME_FIELD_LEFT_INDENT + 10
    this.selectedCard.y = rowIndex * (ROW_HEIGHT + ROW_SPACING)
    this.selectedCard.isInField = true
    this.gameField.addCardToRow(this.selectedCard, rowIndex)
    this._deselectCard()
  }

  private _handleCardSelection(x: number, y: number) {
    this.deck.cards.forEach(card => {
      if (!card.isInField && card.isClicked(x, y)) {
        this._selectCard(card)
      }
    })
  }

  private _selectCard(card: Card) {
    card.selected = true
    this.selectedCard = card
    this._highlightRowBasedOnCardType(this.selectedCard)
  }

  private _highlightRowBasedOnCardType(card: Card | null) {
    if (card) {
      this.gameField.highlightedRow = card.type === CARD_TYPE.MELEE ? 2 : 3
    } else {
      this.gameField.highlightedRow = null
    }
  }

  private _deselectCard() {
    if (!this.selectedCard) return

    this.selectedCard.selected = false
    this.selectedCard = null
    this.gameField.highlightedRow = null
  }
}
