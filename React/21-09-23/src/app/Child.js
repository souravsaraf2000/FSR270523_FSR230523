"use client"

import PropTypes from 'prop-types'
function Child(props) {

    const {name, email, mobile, age} = props
    console.log(props)
  return (
    <div>
        <h1>Child Component</h1>
    </div>
  )
}

Child.propTypes = {
    name : PropTypes.string.isRequired,
    email: PropTypes.string,
    mobile: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    age: PropTypes.number
}

export default Child