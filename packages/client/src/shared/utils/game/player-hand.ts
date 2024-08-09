import {
  CARD_HEIGHT,
  DECK_HEIGHT,
  DECK_WIDTH,
} from '@/shared/utils/game/config'

export class PlayerHand {
  draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.fillStyle = '#e0e0e0'
    ctx.fillRect(0, canvas.height - CARD_HEIGHT, DECK_WIDTH, DECK_HEIGHT)
    ctx.strokeStyle = '#000'
    ctx.strokeRect(0, canvas.height - CARD_HEIGHT, DECK_WIDTH, DECK_HEIGHT)
  }
}
