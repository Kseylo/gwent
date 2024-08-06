import {
  GAME_FIELD_HEIGHT,
  GAME_FIELD_WIDTH,
  GAME_FIELD_LEFT_INDENT,
  ROW_HEIGHT,
  ROW_SPACING,
} from './config'

export class GameField {
  ctx: CanvasRenderingContext2D
  highlightedRow: number | null = null

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  draw() {
    const { ctx } = this

    // Отрисовка полей
    for (let i = 0; i < 4; i++) {
      const y = i * (ROW_HEIGHT + ROW_SPACING)
      if (this.highlightedRow === i) {
        ctx.fillStyle = '#fef9c3'
      } else {
        ctx.fillStyle = '#e0e0e0'
      }
      ctx.fillRect(GAME_FIELD_LEFT_INDENT, y, GAME_FIELD_WIDTH, ROW_HEIGHT)
    }

    // Обводка игрового поля
    ctx.strokeStyle = '#000'
    ctx.strokeRect(
      GAME_FIELD_LEFT_INDENT,
      0,
      GAME_FIELD_WIDTH,
      GAME_FIELD_HEIGHT
    )

    // Линия по середине поля
    ctx.beginPath()
    ctx.moveTo(GAME_FIELD_LEFT_INDENT, GAME_FIELD_HEIGHT / 2)
    ctx.lineTo(GAME_FIELD_WIDTH + GAME_FIELD_LEFT_INDENT, GAME_FIELD_HEIGHT / 2)
    ctx.stroke()
  }

  getRowIndex(y: number) {
    return Math.floor(y / (ROW_HEIGHT + ROW_SPACING))
  }
}
