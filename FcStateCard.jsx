
import React, {useState} from 'react'

export default function FcStateCard() { 
    const [count,setCount]=useState(0) 
    const increment=()=>{
        setCount((prestate)=>{ 
            return prestate+1

        }) 

        setCount((prestate)=>{ 
            return prestate+1

        }) 
        setCount((prestate)=>{ 
            return prestate+1

        })
    }
    const decrement=()=>{
        setCount((prestate)=>{ 
            return prestate-1

        }) 
        setCount((prestate)=>{ 
            return prestate-1

        }) 
        setCount((prestate)=>{ 
            return prestate-1

        })
    }
  return (
    <div> 
        <div className='card w-25'>
            <button className='btn btn-primary' onClick={increment}>+</button> 
            <h2 className='text-center'>{count}</h2> 
            <button className='btn btn-primary' onClick={decrement}>-</button>
        </div>
      
    </div>
  )
}
