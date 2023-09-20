import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>Contact Page</h1>
        <Link to='/'>
            <button>
                Home
            </button>
        </Link>
        <Link to='/about'>
            <button>
                About
            </button>
        </Link>
    </div>
  )
}

export default Contact