import { Container } from '@mantine/core'
import { useEffect, useRef } from 'react'
import { GameEngine } from '@/shared/utils/game'

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      throw new Error('Canvas is not defined')
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('Canvas context is not defined')
    }
    const gameEngine = new GameEngine({
      canvas,
      ctx,
    })
    gameEngine.init()
  }, [])

  return (
    <Container>
      <canvas
        ref={canvasRef}
        width="480"
        height="320"
        style={{ border: '1px solid black' }}
      />
    </Container>
  )
}
