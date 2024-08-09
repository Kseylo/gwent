import { Card } from '@/shared/utils/game/card'

export class GameBoard {
  rows: Card[][] = [[], [], [], []]
  playerStrength = 0
  opponentStrength = 0

  addCardToRow(card: Card, rowIndex: number) {
    this.rows[rowIndex].push(card)
    this.updateStrength()
  }

  getRowIndex(y: number, rowHeight: number, rowSpacing: number) {
    return Math.floor(y / (rowHeight + rowSpacing))
  }

  private updateStrength() {
    this.opponentStrength = this.calculateTotalStrength(this.rows.slice(0, 2))
    this.playerStrength = this.calculateTotalStrength(this.rows.slice(2))
  }

  private calculateTotalStrength(rows: Card[][]) {
    return rows.reduce(
      (sum, row) =>
        sum + row.reduce((rowSum, card) => rowSum + card.strength, 0),
      0
    )
  }

  calculateRowStrength(rowIndex: number) {
    return this.rows[rowIndex].reduce((sum, card) => sum + card.strength, 0)
  }
}
