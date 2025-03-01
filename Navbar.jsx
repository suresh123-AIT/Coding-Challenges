import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src="data:image/jpeg;base64,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" alt="bird logo"/>
      </div> 
      <div className='nav-link'>
        <ul> 
          {
            props.navData.map((item,index)=>{
              return <li key={index}><a href={item.link}>{item.name}</a></li>
            })
          }
           
        </ul>
      </div>
    </div>
  )
}
