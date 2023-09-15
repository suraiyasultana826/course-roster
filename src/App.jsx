import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    <Cart></Cart>
    </>
  )
}

export default App
