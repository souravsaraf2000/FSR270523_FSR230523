"use client"
import styles from './Counter.module.css'
import { useState } from 'react';

const CounterObj = () => {

    let [values, setValues] = useState({
        count: 0,
        message: ''
    });

    const inputChangeHandler = (e) => {
        setValues({...values, message: e.target.value})
    }

    console.log(values)

    return <div>
        <h1>Counter</h1>
        <button
            onClick={()=>setValues({...values, count: values.count - 1})}
        >-</button>
        <span>{values.count}</span>
        <button
            onClick={()=>setValues({...values, count: values.count + 1})}
        >+</button>

        <br/><br/>

        <input 
            type='text' 
            placeholder='Enter some text'
            onChange = {(e)=>inputChangeHandler(e)}
        />
        <h1>{values.message}</h1>
    </div>
}

export default CounterObj;