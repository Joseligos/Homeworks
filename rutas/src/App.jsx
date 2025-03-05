import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Ingresar } from './Ingresar'
import Login from './Login'
import { Provider } from './Provider'

function App() {
    return (
        <Provider>
            <Routes>
                <Route path="/" element={<Ingresar/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>

                {/* RUTAS PRIVADS */}
            </Routes>
        </Provider>

    )
}

export default App
