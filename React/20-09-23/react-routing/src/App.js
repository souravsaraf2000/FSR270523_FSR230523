import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Error404 from './components/Error404'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [showHeadFoot, setShowHeadFoot] = useState(true)
  return (
    <div>
      {showHeadFoot && <h1>Header</h1>}
      <button
        onClick={()=>setIsLogin(!isLogin)}
      >
        Login
      </button>
      <h2>Status: {JSON.stringify(isLogin)}</h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={isLogin ? <Contact/> : <Navigate to='/'/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Error404 hideContent = {setShowHeadFoot}/>}/>
      </Routes>
      {showHeadFoot && <h1>Footer</h1>}
    </div>
  )
}

export default App