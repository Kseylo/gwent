import { Button, Container, Stack } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'

const enum GameState {
  START = 'START',
  RUNNING = 'RUNNING',
  END = 'END',
}

export default function Game() {
  const [gameState, setGameState] = useState<GameState>(GameState.START)

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
  }, [])

  return (
    <Container>
      <Stack>
        <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
        <Button size={'xl'}>
          {gameState === GameState.START ? 'Начать игру' : 'Сыграть еще раз'}
        </Button>
      </Stack>
    </Container>
  )
}
