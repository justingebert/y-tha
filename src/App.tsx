import './App.css'
import { CounterProvider } from './contexts/CounterContext'
import Counter from './components/Counter'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </ChakraProvider>
  )
}

export default App
