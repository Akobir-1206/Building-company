import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Statistic from './Components/Statistic'
import Homes from './Components/Homes'
import Projects from './Components/Projects'
import News from './Components/News'
import Partners from './Components/Partners'
import About from './Components/About'
import Request from './Components/Request'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        <Header/>
        <Hero/>
        <Service/>
        <Statistic/>
        <Homes/>
        <Projects/>
        <News/>
        <Partners/>
        <About/>
        <Request/>
        <Footer/>
    </>
  )
}

export default App
