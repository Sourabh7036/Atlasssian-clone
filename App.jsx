import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Example from './Example.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
