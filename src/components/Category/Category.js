import './Category.css';
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'





export const Category = (props) => {
    return(
    <div className="category">
        <div className="subBlock">
            <h3>{props.nombre}</h3>
            <div className="img"><img src={props.img}/></div>
            <hr/>            
            <div className="verMas">
            <NavLink to={`/products/${props.category}`} className="verMas"> Seleccionar</NavLink> 
            </div>  
        </div>      
    </div>
    )
}