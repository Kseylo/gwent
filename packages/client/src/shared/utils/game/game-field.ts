import {
  GAME_FIELD_HEIGHT,
  GAME_FIELD_WIDTH,
  GAME_FIELD_LEFT_INDENT,
  ROW_HEIGHT,
  ROW_SPACING,
} from './config'
import { Card } from '@/shared/utils/game/card'

export class GameField {
  ctx: CanvasRenderingContext2D
  highlightedRow: number | null = null
  rows: Card[][] = [[], [], [], []]

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  draw() {
    this._drawRows()
    this._drawFieldBorder()
    this._drawMiddleLine()
  }

  private _drawRows() {
    for (let i = 0; i < 4; i++) {
      const y = i * (ROW_HEIGHT + ROW_SPACING)
      this._drawRow(i, y)
      this._drawRowStrength(i, y)
    }
  }

  private _drawRow(rowIndex: number, y: number) {
    const { ctx } = this
    ctx.fillStyle = this.highlightedRow === rowIndex ? '#fef9c3' : '#e0e0e0'
    ctx.fillRect(GAME_FIELD_LEFT_INDENT, y, GAME_FIELD_WIDTH, ROW_HEIGHT)
  }

  private _drawRowStrength(rowIndex: number, y: number) {
    const rowStrength = this._calculateRowStrength(rowIndex)
    const { ctx } = this
    ctx.fillStyle = '#000'
    ctx.fillText(
      rowStrength.toString(),
      GAME_FIELD_LEFT_INDENT - 20,
      y + ROW_HEIGHT / 2
    )
  }

  private _calculateRowStrength(rowIndex: number) {
    return this.rows[rowIndex].reduce((sum, card) => sum + card.strength, 0)
  }

  private _drawFieldBorder() {
    const { ctx } = this
    ctx.strokeStyle = '#000'
    ctx.strokeRect(
      GAME_FIELD_LEFT_INDENT,
      0,
      GAME_FIELD_WIDTH,
      GAME_FIELD_HEIGHT
    )
  }

  private _drawMiddleLine() {
    const { ctx } = this
    ctx.beginPath()
    ctx.moveTo(GAME_FIELD_LEFT_INDENT, GAME_FIELD_HEIGHT / 2)
    ctx.lineTo(GAME_FIELD_WIDTH + GAME_FIELD_LEFT_INDENT, GAME_FIELD_HEIGHT / 2)
    ctx.stroke()
  }

  getRowIndex(y: number) {
    return Math.floor(y / (ROW_HEIGHT + ROW_SPACING))
  }

  addCardToRow(card: Card, rowIndex: number) {
    this.rows[rowIndex].push(card)
  }
}
