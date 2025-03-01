
import React,{useState} from 'react'

export default function UseStateFC() { 

   let product={
    name:'real me 8 pro',
    price:15000
   }
    let [product1,updateProduct]=useState(product)
    // let[price1,updatePrice]=useState(price)

  return (
    <div> 
        <h1>Model:{product1.name}</h1> 
        <h3>price:{product1.price}</h3> 
        <h3>product:{JSON.stringify(product1)}</h3>
        <input id='input'/> <br/> 
        
        <button className='my-2 btn btn-primary' onClick={()=>{
            let pname=document.getElementById('input').value;
            updateProduct({ 
                ...product,
                name:pname
               
            })
                
                

            
            

        }}>UpdateName</button> <br/>
        {/* <input id='price'/> <br/> 
        <button className='my-2 btn btn-success' onClick={()=>{
            let mprice=document.getElementById('price').value;
            updatePrice(mprice);

        }}>Updateprice</button> */}
      
    </div>
  )
}

