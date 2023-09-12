"use client"

import { useState, useEffect } from "react";
import Deleteion from "./deleteion";
import DisplayProds from "./DisplayProds";

const Home = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [showDeletion, setShowDeletion] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleDeletion = () => {
    setShowDeletion(!showDeletion)
  }
  
  const handleIncrement1 = () => {
    setCount1(count1 + 1)
  }

  const handleDecrement1 = () => {
    setCount1(count1 - 1)
  }

  useEffect(()=>{
    console.log('Component Did Mount Called!')
  }, [])

  useEffect(()=>{
    console.log('Component Did Update Called! ---- 1')
  }, [count])

  useEffect(()=>{
    console.log('Component Did Update Called! ---- 2')
  }, [count1])

  return <div>
    <button
      onClick = {handleDecrement}
    >
      Decrement
    </button>
    <span>{count}</span>
    <button
      onClick={handleIncrement}
    >
      Increment
    </button>
    <br/> <br/>
    <button
      onClick = {handleDecrement1}
    >
      Decrement
    </button>
    <span>{count1}</span>
    <button
      onClick={handleIncrement1}
    >
      Increment
    </button>

    <button
      onClick={handleDeletion}
    >{showDeletion?'Hide':'Show'}</button>
    {showDeletion ? <Deleteion/> : ''}
    <DisplayProds/>
  </div>
}

export default Home;