import React from 'react'
import Header from './components/Header'
import {Route,Routes} from 'react-router-dom'
import Writer from './pages/mwelebi/Writer'
import Poet from './pages/poetebi/Poet'
import Home from './pages/Home'
import Foooter from './components/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        {/*//!  home page */}
        <Route path='/' element={<Home/>}/>
        {/*//! mwerlebi */}
        <Route path='mwerlebi' element={<Writer/>}/>
        {/*//! poetebi */}
        <Route path='poetebi' element={<Poet/>}/>
      </Routes>
      <Foooter/>
    </>
  )
}

export default App
