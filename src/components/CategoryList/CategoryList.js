import './CategoryList.css';
import { Category } from '../Category/Category'
import { useState } from 'react'

export const CategoryList = (props) => {

     
    
    return (  
        <div className="CategoryList"> 
            {
                props.categories.map(({nombre,img,category},index) => (             
                    <Category 
                        key={index}
                        nombre={nombre}
                        img={img}
                        category={category}                        
                    />        
                ))
            }       
        </div> 
      )         
}
