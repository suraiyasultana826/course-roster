/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Cart from './components/Cart/Cart'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    {/* <Cart></Cart> */}
    <ToastContainer />
    </>
  )
}

export default App
