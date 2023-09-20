import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
  return (
    <div>
        <h1>Home Page</h1>
            <button
                onClick={()=>navigate('/contact')}
            >
                Contact
            </button>
        <Link to='/about'>
            <button>
                About
            </button>
        </Link>
    </div>
  )
}

export default Home