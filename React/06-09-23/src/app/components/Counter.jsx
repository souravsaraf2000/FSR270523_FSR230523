"use client"
import styles from './Counter.module.css'
import { useState } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    let [message, setMessage] = useState('');
    const inputChangeHandler = (e) => {
        setMessage(e.target.value);
    }
    
    return <div>
        <h1>Counter</h1>
        <button
            onClick={()=>setCount(count - 1)}
        >-</button>
        <span>{count}</span>
        <button
            onClick={()=>setCount(count + 1)}
        >+</button>

        <br/><br/>

        <input 
            type='text' 
            placeholder='Enter some text'
            onChange = {(e)=>inputChangeHandler(e)}
        />
        <h1>{message}</h1>
    </div>
}

export default Counter;