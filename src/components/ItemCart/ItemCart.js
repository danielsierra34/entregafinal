import './ItemCart.css';
import { ItemCountCart } from '../ItemCountCart/ItemCountCart'
import { useState, useEffect } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils';





export const ItemCart = (props) => {
    console.log(props)

    const [deleteId, setDeleteId]=useState(0)

    useEffect( () =>{
        props.remove(deleteId)
    },[deleteId])

    const removeItem = () => {
        if (window.confirm(`Está seguro de eliminar el producto ${props.detail.nombre} de su carrito?`)) {
            setDeleteId(props.detail.id)
            //console.log(deleteId)
        }       
    }

    const increase = (e) => { 
        props.increase(props.detail.id)
    }

    const decrease = (e) => {
        props.decrease(props.detail.id)
    }


    

    return(
        <div className="itemCart">
            <div className="remove" onClick={removeItem}>X</div>
            <div className="subItemCart">
                <h3>
                    {props.detail.nombre}            
                </h3>
                <div className="subItemCart1">                
                    <div className="drinkImgCart"><img src={props.detail.img}/></div>   
                    <div className="">Unit price: <b>$ {props.detail.precio}</b></div>             
                    <ItemCountCart quantity={props.detail.quantity} increase={increase} decrease={decrease}/>
                    <h2>Total: $ {props.detail.precio * props.detail.quantity}</h2> 
                </div>
            </div>      
        </div>
    )
}