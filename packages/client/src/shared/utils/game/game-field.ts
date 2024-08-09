import {
  GAME_FIELD_HEIGHT,
  GAME_FIELD_WIDTH,
  GAME_FIELD_LEFT_INDENT,
  ROW_HEIGHT,
  ROW_SPACING,
} from './config'
import { GameBoard } from './game-board'

export class GameField {
  ctx: CanvasRenderingContext2D
  highlightedRow: number | null = null
  gameBoard: GameBoard

  constructor(ctx: CanvasRenderingContext2D, gameBoard: GameBoard) {
    this.ctx = ctx
    this.gameBoard = gameBoard
  }

  draw() {
    this.drawRows()
    this.drawFieldBorder()
    this.drawMiddleLine()
    this.drawPlayerStrength()
  }

  private drawRows() {
    for (let i = 0; i < 4; i++) {
      const y = i * (ROW_HEIGHT + ROW_SPACING)
      this.drawRow(i, y)
      this.drawRowStrength(i, y)
    }
  }

  private drawRow(rowIndex: number, y: number) {
    const { ctx } = this
    ctx.fillStyle = this.highlightedRow === rowIndex ? '#fef9c3' : '#e0e0e0'
    ctx.fillRect(GAME_FIELD_LEFT_INDENT, y, GAME_FIELD_WIDTH, ROW_HEIGHT)
  }

  private drawRowStrength(rowIndex: number, y: number) {
    const rowStrength = this.gameBoard.calculateRowStrength(rowIndex)
    const { ctx } = this
    ctx.fillStyle = '#000'
    ctx.fillText(
      rowStrength.toString(),
      GAME_FIELD_LEFT_INDENT - 20,
      y + ROW_HEIGHT / 2
    )
  }

  private drawPlayerStrength() {
    const { ctx } = this
    ctx.fillStyle = '#000'
    ctx.fillText(
      this.gameBoard.playerStrength.toString(),
      GAME_FIELD_LEFT_INDENT / 2,
      GAME_FIELD_HEIGHT - 50
    )
  }

  private drawFieldBorder() {
    const { ctx } = this
    ctx.strokeStyle = '#000'
    ctx.strokeRect(
      GAME_FIELD_LEFT_INDENT,
      0,
      GAME_FIELD_WIDTH,
      GAME_FIELD_HEIGHT
    )
  }

  private drawMiddleLine() {
    const { ctx } = this
    ctx.beginPath()
    ctx.moveTo(GAME_FIELD_LEFT_INDENT, GAME_FIELD_HEIGHT / 2)
    ctx.lineTo(GAME_FIELD_WIDTH + GAME_FIELD_LEFT_INDENT, GAME_FIELD_HEIGHT / 2)
    ctx.stroke()
  }
}
