import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { loginAuth } from "./store/slices/loginAuth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { stats, errorMessage } = useSelector((state) => state.auth);


    const onLogin = (event) => {
        event.preventDefault()
        dispatch(loginAuth({email, password}))
    }

    useEffect(() => {
        if (stats === "authenticated") {
          navigate("/Home");
        }
      }, [stats, navigate]);
    return (
        <>
            <div>
                <form onSubmit={onLogin}>
                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                    <br/>
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                    <br/>
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
        </>
    )
}

export default Login