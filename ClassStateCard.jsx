import React, { Component } from 'react'

export default class ClassStateCard extends Component {

    constructor(){
        super() 
        this.state={
         products : [
                {
                  id: 1,
                  name: "Smartphone A1",
                  price: 599.99,
                  category: "Electronics",
                  brand: "BrandX",
                  ratings: 4.5,
                  image: "https://via.placeholder.com/150?text=Smartphone+A1",
                },
                {
                  id: 2,
                  name: "Laptop Pro",
                  price: 999.99,
                  category: "Electronics",
                  brand: "BrandY",
                  ratings: 4.7,
                  image: "https://via.placeholder.com/150?text=Laptop+Pro",
                },
                {
                  id: 3,
                  name: "Gaming Console Z",
                  price: 299.99,
                  category: "Gaming",
                  brand: "BrandZ",
                  ratings: 4.8,
                  image: "https://via.placeholder.com/150?text=Gaming+Console+Z",
                },
                {
                  id: 4,
                  name: "Headphones H1",
                  price: 49.99,
                  category: "Accessories",
                  brand: "BrandA",
                  ratings: 4.4,
                  image: "https://via.placeholder.com/150?text=Headphones+H1",
                },
                {
                  id: 5,
                  name: "Smart TV X",
                  price: 799.99,
                  category: "Electronics",
                  brand: "BrandB",
                  ratings: 4.6,
                  image: "https://via.placeholder.com/150?text=Smart+TV+X",
                },
                {
                  id: 6,
                  name: "Bluetooth Speaker",
                  price: 89.99,
                  category: "Audio",
                  brand: "BrandC",
                  ratings: 4.3,
                  image: "https://via.placeholder.com/150?text=Bluetooth+Speaker",
                },
                {
                  id: 7,
                  name: "Fitness Tracker",
                  price: 129.99,
                  category: "Wearables",
                  brand: "BrandD",
                  ratings: 4.2,
                  image: "https://via.placeholder.com/150?text=Fitness+Tracker",
                },
                {
                  id: 8,
                  name: "Wireless Earbuds",
                  price: 69.99,
                  category: "Audio",
                  brand: "BrandE",
                  ratings: 4.1,
                  image: "https://via.placeholder.com/150?text=Wireless+Earbuds",
                },
                {
                  id: 9,
                  name: "Smartwatch Pro",
                  price: 199.99,
                  category: "Wearables",
                  brand: "BrandF",
                  ratings: 4.5,
                  image: "https://via.placeholder.com/150?text=Smartwatch+Pro",
                },
                {
                  id: 10,
                  name: "Tablet T1",
                  price: 399.99,
                  category: "Electronics",
                  brand: "BrandG",
                  ratings: 4.4,
                  image: "https://via.placeholder.com/150?text=Tablet+T1",
                },
                {
                  id: 11,
                  name: "Digital Camera",
                  price: 499.99,
                  category: "Photography",
                  brand: "BrandH",
                  ratings: 4.6,
                  image: "https://via.placeholder.com/150?text=Digital+Camera",
                },
                {
                  id: 12,
                  name: "Air Purifier",
                  price: 159.99,
                  category: "Home",
                  brand: "BrandI",
                  ratings: 4.2,
                  image: "https://via.placeholder.com/150?text=Air+Purifier",
                },
                {
                  id: 13,
                  name: "Robot Vacuum",
                  price: 249.99,
                  category: "Home",
                  brand: "BrandJ",
                  ratings: 4.5,
                  image: "https://via.placeholder.com/150?text=Robot+Vacuum",
                },
                {
                  id: 14,
                  name: "Blender Pro",
                  price: 99.99,
                  category: "Kitchen",
                  brand: "BrandK",
                  ratings: 4.7,
                  image: "https://via.placeholder.com/150?text=Blender+Pro",
                },
                {
                  id: 15,
                  name: "Gaming Chair",
                  price: 199.99,
                  category: "Gaming",
                  brand: "BrandL",
                  ratings: 4.6,
                  image: "https://via.placeholder.com/150?text=Gaming+Chair",
                },
                {
                  id: 16,
                  name: "Electric Kettle",
                  price: 29.99,
                  category: "Kitchen",
                  brand: "BrandM",
                  ratings: 4.3,
                  image: "https://via.placeholder.com/150?text=Electric+Kettle",
                },
                {
                  id: 17,
                  name: "Smart Doorbell",
                  price: 149.99,
                  category: "Home",
                  brand: "BrandN",
                  ratings: 4.4,
                  image: "https://via.placeholder.com/150?text=Smart+Doorbell",
                },
                {
                  id: 18,
                  name: "Mechanical Keyboard",
                  price: 89.99,
                  category: "Accessories",
                  brand: "BrandO",
                  ratings: 4.5,
                  image: "https://via.placeholder.com/150?text=Mechanical+Keyboard",
                },
                {
                  id: 19,
                  name: "Monitor HD",
                  price: 249.99,
                  category: "Electronics",
                  brand: "BrandP",
                  ratings: 4.6,
                  image: "https://via.placeholder.com/150?text=Monitor+HD",
                },
                {
                  id: 20,
                  name: "Power Bank",
                  price: 39.99,
                  category: "Accessories",
                  brand: "BrandQ",
                  ratings: 4.3,
                  image: "https://via.placeholder.com/150?text=Power+Bank",
                },
                {
                  id: 21,
                  name: "Electric Scooter",
                  price: 499.99,
                  category: "Outdoor",
                  brand: "BrandR",
                  ratings: 4.5,
                  image: "https://via.placeholder.com/150?text=Electric+Scooter",
                },
                {
                  id: 22,
                  name: "Backpack X",
                  price: 79.99,
                  category: "Accessories",
                  brand: "BrandS",
                  ratings: 4.4,
                  image: "https://via.placeholder.com/150?text=Backpack+X",
                },
                {
                  id: 23,
                  name: "Portable Projector",
                  price: 299.99,
                  category: "Electronics",
                  brand: "BrandT",
                  ratings: 4.5,
                  image: "https://via.placeholder.com/150?text=Portable+Projector",
                },
                {
                  id: 24,
                  name: "Noise Cancelling Headphones",
                  price: 199.99,
                  category: "Audio",
                  brand: "BrandU",
                  ratings: 4.8,
                  image: "https://via.placeholder.com/150?text=Noise+Cancelling+Headphones",
                },
                {
                  id: 25,
                  name: "Gaming Mouse",
                  price: 49.99,
                  category: "Accessories",
                  brand: "BrandV",
                  ratings: 4.6,
                  image: "https://via.placeholder.com/150?text=Gaming+Mouse",
                },
              ]
        }
    }
  render() { 
   
    return (
      <div className='container d-flex flex-wrap gap-2 my-4'> 
      {
       this.state.products.map((item)=>{
        return(
            <div className='card  p-2  flex-grow-1 align-items-center' style={{width:'180px'}}key={item.id}> 
                <img src="https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=600"  alt='bike' height='150px' style={{objectFit:'cover',borderRadius:'5px',padding:'2px'}}/>
                <h2>{item.name}</h2> 
                <p>price:{item.price}</p>
                <p>category:{item.category}</p> 
                <button className='btn btn-primary w-100'>Add to cart</button>
            </div>
        )
       })
      }
        
      </div>
    )
  }
}
