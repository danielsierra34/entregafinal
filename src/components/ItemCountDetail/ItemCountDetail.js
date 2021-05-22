import './ItemCountDetail.css';
import { Item } from '../Category/Category'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
export const ItemCountDetail = ({onAdd,limit}) => {

    
    let [cantidad,setCantidad]= useState(0)
    let [agregado,setAgregado]= useState(false)

    const incrementarCantidad = (e) => { 
        e.stopPropagation()
        if (cantidad < limit){
            setCantidad(++cantidad)
        }            
        else alert(`no hay mas unidades disponibles en inventario`)
    }

    const disminuirCantidad = (e) => {
        e.stopPropagation()
        if (cantidad > 0){
            setCantidad(--cantidad)
        }    
        else alert(`no se permiten cantidades negativas`)
    }

    const handleOnAdd = (e)=>{
        if(cantidad>0){
            setAgregado(true)
            onAdd(cantidad) 
        }else{
            alert("debes seleccionar por lo menos 1 unidad")
        }
        
    }

     /*const goToCart =(e) =>{
        e.stopPropagation()
        if (quantity > 0) {
        alert(`se han agregado ${quantity} unidades de producto a tu orden`)
        }
        else alert(`debes seleccionar por lo menos 1 unidad`)
    }*/
    
    return (    
        <div className="ItemCountDetail">

            {!agregado ? (
                <div>
                <div className="quantities">
                    <div className="botonDisminuir boton1" onClick={disminuirCantidad}>-</div>
                    <input className="field" type="text" value={cantidad}/>
                    <div className="botonIncrementar boton1" onClick={incrementarCantidad}>+</div> 
                </div>
                <div onClick={handleOnAdd} className="boton2">
                    Agregar al carrito
                </div>
                </div>
            ) : (
                <NavLink to={`/cart/`} className="boton2"> Go to Cart</NavLink>  
            )}  
            
        </div>
      )    
      
}
