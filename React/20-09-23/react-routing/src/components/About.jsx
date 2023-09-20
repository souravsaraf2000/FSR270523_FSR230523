import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About Page</h1>
        <Link to='/contact'>
            <button>
                Contact
            </button>
        </Link>
        <Link to='/'>
            <button>
                Home
            </button>
        </Link>
    </div>
  )
}

export default About