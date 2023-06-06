import { useState } from 'react'
import './App.css'
import Feedback from './components/Feedback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Feedback/>
    </>
  )
}

export default App
