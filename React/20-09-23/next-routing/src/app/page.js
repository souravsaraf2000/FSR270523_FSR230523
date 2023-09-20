"use client"

import { useRouter } from "next/navigation"

function Home() {

  let {push} = useRouter()

  return (
    <div>
      <h1>
        Home Component
        <button
          onClick={()=>push('/about')}
        >
          About Page
        </button>
      </h1>
    </div>
  )
}

export default Home