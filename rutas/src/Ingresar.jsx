import { useNavigate } from "react-router-dom";

export const Ingresar = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/Login")
    }

    return (
        <>
            <div>
                <button onClick={goToLogin}>Ingresar</button>
            </div>
        </>
    )
}

export default Ingresar