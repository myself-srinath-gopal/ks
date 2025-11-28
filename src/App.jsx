import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Logo from './components/Logo'

const App = () => {
  return (
    <>
      <Logo />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App