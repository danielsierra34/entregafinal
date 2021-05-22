import './Products.css';
import { ItemCountDetail } from '../ItemCountDetail/ItemCountDetail'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'





export const Products = ({product}) => {
    return(
    <div className="product">
        <div className="subBlock">
            <h3>{product.nombre}</h3>
            <div className="img"><img src={product.img}/></div>
            <hr/>            
            <div className="verMas">
            <NavLink to={`/detail/${product.id}`} className="verMas"> Seleccionar</NavLink> 
            </div>  
        </div>      
    </div>
    )
}