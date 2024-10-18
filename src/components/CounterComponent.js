import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions'

const CounterComponent = () => {
    const count = useSelector((state) => state.count);
    const dispactch = useDispatch();

    return (
        <div>
            <h3>Count:  {count}</h3>
            <hr />

            <button onClick={() => dispactch(increment())}>Increment</button>
            <button onClick={() => dispactch(decrement())}>Decrement</button>
        </div>
    )
}

export default CounterComponent;