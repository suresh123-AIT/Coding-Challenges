import React from 'react'

export default function ColorChanger() {
  return (
    <div className='Wrapper'>
      <h1>Background Color changer</h1> 
      <input type='color' onChange={
        (e)=>{ 
            console.log(e.target.value)
            document.body.style.backgroundColor=e.target.value;
        }
      }/>
    </div>
  )
}
