import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
// import Gallery from './pages/Gallery'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import BlogDetail from './pages/BlogDetail'
import PortfolioDetail from './pages/PortfolioDetail'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:id' element={<PortfolioDetail />} />
        {/* <Route path='/gallery' element={<Gallery />} /> */}
        <Route path='/stories' element={<Stories />} />
        <Route path='/stories/:id' element={<StoryDetail />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/contact-us' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App