import React, { useEffect, useState } from 'react' 


export default function DynamicItemcards() { 
    const[products,setProducts]=useState([]) 
    
    useEffect(()=>{
        const asyncfetchdata = async ()=>{
            const response = await fetch('https://dummyjson.com/products') 
            const data = await  response.json();
            console.log(data)
            setProducts(data.products)
        }
        asyncfetchdata();
    },[])
  return (
    <div className='container d-flex flex-wrap gap-2 my-4'> 
        {
            products.map((item)=>{
                return(
                    <div className='card  p-2  flex-grow-1 align-items-center align-content-center' style={{width:'180px'}}key={item.id}> 
                        <img src={item.images[0]}  alt={item.name} height='150px' style={{objectFit:'cover',borderRadius:'5px',padding:'2px'}}/>
                        <h5 className='text-center'>{item.title}</h5> 
                        <p>price:{item.price}</p>
                        <p style={{fontWeight:'bold'}}>Category:{item.category}</p> 
                        <button className='btn btn-primary w-100'>Add to cart</button>
                    </div>
                )
               })
        }
      
    </div>
  )
}
