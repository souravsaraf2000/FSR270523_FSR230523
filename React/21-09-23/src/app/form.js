"use client"

import { useEffect, useRef } from "react"

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus()
        inputRef.current.style.width = '400px'
    },[])
    const handleClick = () => {
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' ref={inputRef} placeholder="Enter username" name="username" required/>
            <input type="password" placeholder="Enter password" name="pwd"/>
            <button
                onClick={handleClick}
            >Login</button>
        </form>
    </div>
  )
}

export default Form