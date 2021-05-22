import './ItemCountCart.css';
import { Item } from '../Category/Category'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
export const ItemCountCart = ({ quantity , increase, decrease}) => {
    
    let [agregado,setAgregado]= useState(false)  
    return (    
        <div className="ItemCountCart">
            <div>
                <div className="quantities">
                    <div className="botonDisminuir boton1" onClick={decrease}>-</div>
                    <input className="field" type="text" value={quantity}/>
                    <div className="botonIncrementar boton1" onClick={increase}>+</div> 
                </div>
            </div>
        </div>
      )    
      
}
