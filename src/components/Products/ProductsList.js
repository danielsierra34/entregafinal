import './Products.css';
import { Products } from './Products'
import { useState } from 'react'

export const ProductsList = ({products}) => {

     
    
    return (  
        <div className="ProductsList"> 
            {
                products.map((product,index) => (             
                    <Products
                        key={index}
                        product={product}                 
                    />        
                ))
            }       
        </div> 
      )         
}
