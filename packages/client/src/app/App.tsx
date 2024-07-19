import './App.css'
import { createTheme, MantineProvider, Button } from '@mantine/core'

const theme = createTheme({})

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme={'dark'}>
      <main>
        <Button>Тестовая кнопка</Button>
      </main>
    </MantineProvider>
  )
}

export default App
