"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [updateData, setUpdateData] = useState({
    id: 0,
    title: ''
  })
  const [deleteId, setDeleteId] = useState(0)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  } , [])
  
  const handleClick = () => {
    const data = {
      title: title,
      price: 250
    }
    axios.post('https://dummyjson.com/products/add', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  const handleUpdate = () => {
    const data = {
      title: updateData.title
    }
    axios.patch(`https://dummyjson.com/products/${updateData.id}`, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  const handleDelete = () => {
    axios.delete(`https://dummyjson.com/products/${deleteId}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return <div>
    <h1>
      Connecting To Backend
    </h1>
    {
        todos.map(todo => <h2>{todo.title}</h2>)
    }

    <h3>POST</h3>
    <input 
      type="text" 
      placeholder="Insert title"
      onChange={(e)=>setTitle(e.target.value)}
    />
    <button
      onClick={handleClick}
    >
      Create Product
    </button>

    <h3>PUT/PATCH</h3>
    <input 
      type="number" 
      placeholder="Enter Id (1-30)"
      onChange={(e)=>setUpdateData({...updateData, id: e.target.value})}
    />
    <input 
      type="text" 
      placeholder="Insert title"
      onChange={(e)=>setUpdateData({...updateData, title: e.target.value})}
    />
    <button
      onClick={handleUpdate}
    >
      Update Data
    </button>

    <h3>DELETE</h3>
    <input 
      type="number" 
      placeholder="Enter Id (1-30)"
      onChange={(e)=>setDeleteId(e.target.value)}
    />
    <button
      onClick={handleDelete}
    >Delete Data</button>
  </div>
}

export default Home;