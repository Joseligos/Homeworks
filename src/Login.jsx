import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { loginAuth } from "./store/slices/loginAuth"
import { useNavigate } from "react-router-dom"
import { googleAuth } from "./store/slices/googleAuth"
import styles from "./styles/Login.module.scss"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { stats, errorMessage } = useSelector((state) => state.auth)

    const onLogin = (event) => {
        event.preventDefault()
        dispatch(loginAuth({ email, password }))
    }

    const onGoogleLogin = (event) => {
        event.preventDefault()
        dispatch(googleAuth())
    }

    const goToRegister = () => {
        navigate("/")
    }

    useEffect(() => {
        if (stats === "authenticated") {
            navigate("/Home")
        }
    }, [stats, navigate])

    return (
        <div className={styles.loginContainer}>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={onLogin}>
            <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            </form>

            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

            <div className={styles.extraButtons}>
            <button onClick={onGoogleLogin}>Iniciar con Google</button>
            <button onClick={goToRegister}>Volver al Registro</button>
            </div>
        </div>
    );
}

export default Login
