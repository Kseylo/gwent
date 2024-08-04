export interface CardConfig {
  x?: number
  y?: number
  color?: string
}

export class Card {
  x: number
  y: number
  color: string
  width = 100
  height = 200

  constructor(config: CardConfig) {
    this.x = config.x || 0
    this.y = config.y || 0
    this.color = config.color || '#000'
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
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
