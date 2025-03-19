import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Songs from './Songs'
import Pages from './Pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Songs/>}></Route>
      <Route path="/Pages" element={<Pages/>}></Route>
    </Routes>
  )
}

export default App
