import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Registro from './Registro'
import Login from './Login'
import { useSelector } from 'react-redux'
import Home from './Home'
import { Crud } from './Crud'

function App() {
  const { stats } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/Registro" element={<Registro/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={
        stats === "authenticated" ? <Home/> : <Navigate to="/Login"/>}></Route>
      <Route path="/" element={<Crud/>}></Route>
    </Routes>
  )
}

export default App
