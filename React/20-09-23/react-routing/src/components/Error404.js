import React, { useEffect } from 'react'

function Error404(props) {
    const {hideContent} = props
    useEffect(()=>{
        hideContent(false)
    },[])
  return (
    <div>
        <h1>Sorry! 404 Page not found !!</h1>
    </div>
  )
}

export default Error404