import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Statistic from './Components/Statistic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        <Header/>
        <Hero/>
        <Service/>
        <Statistic/>
    </>
  )
}

export default App
