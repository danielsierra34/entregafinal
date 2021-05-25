import './Detail.css';
import { Item } from '../Category/Category'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
export const ItemCountDetail = ({onAdd,limit}) => {

    
    let [cantidad,setCantidad]= useState(0)
    let [agregado,setAgregado]= useState(false)
    let [alertaStatus,setAlertaStatus]= useState(false)
    let [alertaTexto,setAlertaTexto]= useState('')
    let [alertaTipo,setAlertaTipo]= useState('')

    const incrementarCantidad = (e) => { 
        e.stopPropagation()
        if (cantidad < limit){
            setCantidad(++cantidad)
        }else{
            setAlertaStatus(true)
            setAlertaTipo("alert-danger")
            setAlertaTexto("No hay mas unidades disponibles en inventario")
            setTimeout(()=>{
                setAlertaStatus(false)
            },1500)           
        }
       
    }

    const disminuirCantidad = (e) => {
        e.stopPropagation()
        if (cantidad > 0){
            setCantidad(--cantidad)
        }    
        setAlertaStatus(true)
        setAlertaTipo("alert-danger")
        setAlertaTexto("No se permiten cantidades negativas")
        setTimeout(()=>{
            setAlertaStatus(false)
        },1500) 
    }

    const handleOnAdd = (e)=>{
        if(cantidad>0){
            setAgregado(true)
            console.log(onAdd(cantidad))
            if(onAdd(cantidad)){
                setAlertaTipo("alert-success")
                setAlertaTexto("Felicidades. El item se ha agregado a tu carrito")
            }else{
                setAlertaTipo("alert-danger")
                setAlertaTexto("Lo sentimos. El item ya existe en tu carrito")
            }            
        }else{            
            setAlertaTipo("alert-danger")
            setAlertaTexto("Debes seleccionar por lo menos 1 unidad")            
        }
        setAlertaStatus(true)
        setTimeout(()=>{
            setAlertaStatus(false)
        },1500)
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
                {alertaStatus?<div className={["alert", alertaTipo].join(' ')}>{alertaTexto}</div>:""}
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
