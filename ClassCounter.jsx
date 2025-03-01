import React, { Component } from 'react'

export default class ClassCounter extends Component {
state={
    product:'realme 8 pro',
    price:20000
}
  render() {
    return (
      <div> 
        <h1>Product:{this.state.product}</h1> 
        <p>price:{this.state.price}</p>  

        <input id='price' type='text'/> 
        <button className='mx-2' onClick={()=>{
         let p=document.getElementById('price').value;
         console.log(p)
         this.setState({
            price:p
         })
        }}>change</button>
        
      </div>
    )
  }
}
