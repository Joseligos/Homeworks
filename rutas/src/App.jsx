import './App.css'
import {Routes, Route} from "react-router-dom"
import { Ingresar } from './Ingresar'
import Login from './Login'
import { Provider } from './Provider'
import Home from './Home'
import Privado from './Privado'

function App() {
    return (
        <Provider>
            
            <Routes>
                <Route path="/" element={<Ingresar/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                

                {/* RUTAS PRIVADAS */}
                <Route path="/Home" element={
                    <Privado>
                        <Home />
                    </Privado>
                } />
            </Routes>
        </Provider>

    )
}

export default App
