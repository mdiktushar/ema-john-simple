import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}

export default App
