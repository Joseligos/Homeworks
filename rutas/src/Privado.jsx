import { useContext } from "react"
import { UserContext } from "./UserContext"
import { useNavigate,  } from "react-router-dom"

const Privado = ({children}) =>{
    const navigate = useNavigate()
    const back = () =>{
        navigate("/", {
            replace: true
        })
    }
    const {logged} = useContext(UserContext)
    return logged ? children : <>Error 403 - Por favor inicia sesión<br/> <button onClick={back}>Volver al Inicio</button></> 
}

export default Privado