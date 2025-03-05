import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Ingresar = () => {

    const {logged} = useContext(UserContext)
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/Login")
    }
    
    console.log(logged)

    return (
        <>
            <div>
                <button onClick={goToLogin}>Ingresar</button>
            </div>
        </>
    )
}

export default Ingresar