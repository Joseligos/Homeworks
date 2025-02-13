import "./App.css"
import PropTypes from 'prop-types';
import { useState } from "react";

const FirstApp = (props) =>{
    const  [counter, setCounter] = useState(props.value)

    const handleAdd = () => {
        setCounter(counter+1)
    }
    const handleSub = () => {
        setCounter(counter-1)
    }
    const handleReset = () => {
        setCounter(props.value)
    }
    return (
        <>
            <h1>Counter</h1>
            <span>{counter}</span>
            <br></br>
            <button onClick={() => handleAdd()}>+1</button>
            <button onClick={() => handleSub()}>-1</button>
            <button onClick={() => handleReset()}>Reset</button>
        </>
    )
}
export default FirstApp