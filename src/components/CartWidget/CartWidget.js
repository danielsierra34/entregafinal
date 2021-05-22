import {useContext,useState} from 'react'
import shopping from '../../images/shopping.svg'
import './CartWidget.css';
import {CartContext} from '../../context/CartContext'
import {NavLink} from 'react-router-dom'

export const CartWidget=()=>{
    const contexto=useContext(CartContext)
    const [eliminar,setEliminar]=useState()
    
    
  

    return(
        <div className="CartWidget">
            <NavLink to={`/cart/`}><img src={shopping} className="shopping" /></NavLink> 
            
            <span className="quantity" >{contexto.quantityCart}</span>
            <span></span>
        </div>
    )

}