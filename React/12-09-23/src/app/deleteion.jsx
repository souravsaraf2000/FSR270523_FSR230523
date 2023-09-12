import React, { useEffect } from 'react'

const Deleteion = () => {

    useEffect(()=>{
        console.log('Component Mounted')
    }, [])
    useEffect(()=>{
        return ()=>{
            console.log('Component Unmounted')
        }    
    })

  return (
    <div>
        <h1>Deletion Component</h1>
    </div>
  )
}

export default Deleteion