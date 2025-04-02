import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy, decrementBy } from "./store/slices/counterSlice";
import { useState } from "react";
import { push, pop } from "./store/slices/stackSlice";

export const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const stack = useSelector((state) => state.stack.numbers);
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubstract = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    const num = parseInt(value);
    if (!isNaN(num)) {
      dispatch(incrementBy(num));
    }
  };

  const handleDecrementBy = () => {
    const num = parseInt(value);
    if (!isNaN(num)) {
      dispatch(decrementBy(num));
    }
  };

  const handlePush = () => {
    if (input.trim() !== "") {
      dispatch(push(input));
      setInput("");
    }
  };

  const handlePop = () => {
    dispatch(pop());
  };

  return (
    <>
      <div>
        <p>Counter is: {count}</p>

        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleSubstract}>Decrement</button>
        <br />
        <br />
        <input
          placeholder="Type a number to increment by"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <br />
        <button onClick={handleIncrementBy}>IncrementBy</button>
        <button onClick={handleDecrementBy}>DecrementBy</button>
      </div>
      <br />
      <div>
        <input
          placeholder="Type a number to add in the stack"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <br />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
