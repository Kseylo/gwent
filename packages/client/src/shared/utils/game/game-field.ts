import {
  GAME_FIELD_HEIGHT,
  GAME_FIELD_WIDTH,
  GAME_FIELD_LEFT_INDENT,
  ROW_HEIGHT,
  ROW_SPACING,
} from './config'

export class GameField {
  ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  draw() {
    const { ctx } = this

    ctx.fillStyle = '#e0e0e0'

    // Отрисовка полей
    for (let i = 0; i < 4; i++) {
      const y = i * (ROW_HEIGHT + ROW_SPACING)
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
}
