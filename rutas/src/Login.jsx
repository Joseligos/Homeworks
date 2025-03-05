import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const Login = () => {
    
    const {setUserValue, setLogged} = useContext(UserContext)

    const [input, setInput] = useState("")

    const navigate = useNavigate()
    const log = () => {
        setUserValue(input)
        setLogged(true)
        navigate("/Home", {
            replace: true
        })
    }
 
    return (
        <>
            <div>
                <input placeholder="Ingresa tu Usuario" onChange={(e) => setInput(e.target.value)}/>
                <br/>
                <br/>
                <button onClick={log} disabled={input.trim() === ""}>Inicia Sesión</button>
            </div>
            
        </>
    )
}

export default Login