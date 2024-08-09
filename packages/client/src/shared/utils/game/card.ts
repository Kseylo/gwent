import { CARD_HEIGHT, CARD_TYPE, CARD_WIDTH } from './config'

export interface CardConfig {
  x?: number
  y?: number
  color?: string
  strength?: number
  type: CARD_TYPE
}

export class Card {
  x: number
  y: number
  color: string
  width = CARD_WIDTH
  height = CARD_HEIGHT
  strength: number
  type: CARD_TYPE
  selected = false
  isInField = false

  constructor(config: CardConfig) {
    this.x = config.x || 0
    this.y = config.y || 0
    this.color = config.color || '#000'
    this.strength = config.strength || 1
    this.type = config.type
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = '#fff'
    ctx.font = '20px sans-serif'
    ctx.fillText(
      this.strength.toString(),
      this.x + this.width / 2,
      this.y + this.height / 2
    )
  }

  isClicked(x: number, y: number) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    )
  }
}
