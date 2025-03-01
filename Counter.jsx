import React,{useState}from 'react'

export default function Counter() { 
    let [counter,updateCounter]=useState(0)
    
  return (
    <div> 
        <h1>Counter:{counter}</h1>
        <button onClick={()=>{updateCounter(++counter)}}>change</button>
      
    </div>
  )
}

