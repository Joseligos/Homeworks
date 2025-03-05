import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    


    const navigate = useNavigate()
    const log = () => {
        navigate("/Home", {
            replace: true
        })
    }
 
    return (
        <>
            <div>
                <input placeholder="Ingresa tu Usuario" onChange={(e) => setUserValue(e.target.value)}/>
                <button onClick={log}>Inicia Sesión</button>
            </div>
            
        </>
    )
}

export default Login