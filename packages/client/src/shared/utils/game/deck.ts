import { Card } from './card'

interface DeckConfig {
  ctx: CanvasRenderingContext2D
  cards: Card[]
}

export class Deck {
  cards: Card[] = []
  ctx: CanvasRenderingContext2D

  constructor(config: DeckConfig) {
    this.ctx = config.ctx
    this.cards = config.cards
  }

  draw() {
    this.cards.forEach(card => card.draw(this.ctx))
  }
}
