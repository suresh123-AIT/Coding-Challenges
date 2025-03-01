import React,{useState,useEffect} from 'react'

export default function DynamicFakeStoreProducts() { 
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const asyncfetchdata = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            
            setProducts(data)
            
        }
        asyncfetchdata();
    },[])
  return (
    <div className='container d-flex flex-wrap gap-2 my-4'>
        {
            products.map((item)=>{  
                console.log(item)
                
                
                return(
                    <div className='card  p-2  flex-grow-1 align-items-center align-content-center' style={{width:'180px',height:'300px'}}key={item.id}>
                        <img src={item.image} alt={item.title}  height='100px' style={{objectFit:'cover',borderRadius:'5px',padding:'2px'}}/>
                        <h4>{item.category}</h4> 
                        <p>price:{item.price}</p>
                        <button className='btn btn-primary w-100'>Add to cart</button>
                    </div>
                )
            })
        }
      
    </div>
  )
}
