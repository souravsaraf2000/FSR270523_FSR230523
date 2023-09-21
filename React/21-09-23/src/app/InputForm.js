"use client"

import { useState } from "react"

function InputForm() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleClick = () => {
        console.log(userName, password)
        setUserName('')
        setPassword('')
    }
    return ( 
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input 
                    type='text' 
                    placeholder="Enter username" 
                    name="username" 
                    value = {userName}
                    onChange = {(e)=>setUserName(e.target.value)}
                    // required
                />
                <input 
                    type="password" 
                    placeholder="Enter password" 
                    value={password}
                    name="pwd"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                    onClick={handleClick}
                >Login</button>
            </form>
        </div>
    );
}

export default InputForm;