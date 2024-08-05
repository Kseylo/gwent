import { Center } from '@mantine/core'
import { useEffect, useRef } from 'react'
import { GameEngine } from '@/shared/utils/game'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@/shared/utils/game/config'

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
    <Center>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ border: '1px solid black' }}
      />
    </Center>
  )
}
