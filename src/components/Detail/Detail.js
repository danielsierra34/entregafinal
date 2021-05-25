import './Detail.css';
import { useEffect,useState,useContext } from 'react'
import {ItemCountDetail} from './ItemCountDetail'
import {CartContext} from '../../context/CartContext'
import {NavLink} from 'react-router-dom'
export const Detail = ({detail}) => { 
  const contexto=useContext(CartContext)

  const handleOnAdd = (cantidad) =>{
      contexto.addToCart(detail,cantidad)
  }
 

    return (    
        <div className="Detail">
          <div className="left">
            <div className="img">
              <img src={detail.img}/>
            </div>
          </div>
          <div className="right">
            <div className="variables">
              <h2>$ {detail.precio} {detail.moneda}</h2>
              <ItemCountDetail onAdd={handleOnAdd} limit={detail.inventory}/>
            <NavLink to={`/products/todos`}>Seguir comprando</NavLink>             
            </div>
          </div>
          
         
          <p className="descripcion">{detail.descripcion}</p>
          
        </div>
      )    
      
}