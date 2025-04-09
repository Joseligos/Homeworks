import React from "react"
import { useDispatch } from "react-redux"
import { registerAuth } from "./store/slices/registerAuth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registro = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        email: 'joseligo14@gmail.com',
        password: 'JuanJose142006'
    })

    const log = () =>{
        navigate("/Login")
    }

    const onInputChange = (evt) => {
        const {name, value} = evt.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(formState.email, formState.password))
    }

    return (
        <>
            <h1>Registro</h1>
            <hr/>
            <form onSubmit={(event) => onSubmit(event)}>
                <input name="email" type="email" onChange={(event) => onInputChange(event)} value={formState.email}></input>
                <input name="password" type="password" onChange={(event) => onInputChange(event)} value={formState.password}></input>
                <button type="submit">Registro</button>
            </form>
            <br/>
            <button onClick={log}>Ir al Login</button>
        </>
    )
}

export default Registro