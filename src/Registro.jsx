import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAuth } from "./store/slices/registerAuth";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Registro.module.scss"; 

const Registro = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        email: 'joseligo14@gmail.com',
        password: 'JuanJose142006'
    });

    const log = () => {
        navigate("/Login");
    };

    const onInputChange = (evt) => {
        const { name, value } = evt.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        dispatch(registerAuth(formState.email, formState.password));
    };

    return (
        <div className={styles.container}> 
            <h1>Registro</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    value={formState.email}
                />
                <input
                    name="password"
                    type="password"
                    onChange={onInputChange}
                    value={formState.password}
                />
                <button type="submit">Registro</button>
            </form>
            <button onClick={log}>Ir al Login</button>
        </div>
    );
};

export default Registro;
