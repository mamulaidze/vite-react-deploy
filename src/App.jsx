import React from 'react'
import Header from './components/Header'
import {Route,Routes} from 'react-router-dom'
import Writer from './pages/mwelebi/Writer'
import Poet from './pages/poetebi/Poet'
import Home from './pages/Home'
import ChavchNaw from './pages/mwelebi/Chavchavadze.jsx/ChavchNaw'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<Home />} />

  {/* Nested Writer Routes */}
  <Route path="mwerlebi" element={<Writer />}>
    <Route path="chavchavadzisnawarmoebebi" element={<ChavchNaw />} />
  </Route>

  {/* Poet Route */}
  <Route path="poetebi" element={<Poet />} />
</Routes>

    </>
  )
}

export default App
