import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Shopping from './pages/Shopping/Shopping'
import Basket from './pages/Basket/Basket'
import Login from './pages/Login/Login'

import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shopping' element={<Shopping/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App