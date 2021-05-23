import loading from '../../triangles.svg'
import './CheckoutContainer.css';
import { useEffect,useState,useContext } from 'react'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Detail} from '../Detail/Detail'
import {CartContext} from '../../context/CartContext'
export const CheckoutContainer = (props) => { 

    return ( 
        
        <div className="CheckoutContainer">  
            <div className="container">
                <h1>
                    <NavLink to={`/cart/`} className="goBack">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </NavLink>
                    Checkout
                </h1>                        
            </div>              
        </div>         
      )          
}
