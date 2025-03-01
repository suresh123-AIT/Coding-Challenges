import React from 'react'

export default function ItemCard(props) { 
    // console.log(props)
  return (
    <div className='container d-flex flex-wrap gap-2'> 
    {
        props.productData.map((item)=>{
            return(
                <div className='card  p-2  flex-grow-1 align-items-center' style={{width:'180px'}}key={item.id}>
                    <img src='https://images.pexels.com/photos/1883384/pexels-photo-1883384.jpeg?auto=compress&cs=tinysrgb&w=600' alt='iphone' height='150px' style={{objectFit:'cover',borderRadius:'5px',padding:'2px'}}/> 
                    <h2>{item.name}</h2> 
                    <p>Price:{item.price}</p> 
                    <p>category:{item.category}</p>
                    <button className='btn btn-success w-100'>Add to Cart</button>
                </div>
            )
        })
    }
      
    </div>
  )
}
