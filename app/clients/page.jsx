'use client'
import { useState } from "react";


const ClientPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-8xl font-bold p-4'>{count}</h1>
      <button className='btn btn-primary' onClick={()=>setCount(prev=>prev+1)}> 
      increase
       </button>
    </div>
  )
}

export default ClientPage;