import loading from '../../triangles.svg'
import './CartContainer.css';
import { useEffect,useState,useContext } from 'react'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../context/CartContext'
import {ItemCart} from '../ItemCart/ItemCart.js'

export const CartContainer = (props) => {   
    const contexto=useContext(CartContext)
    const [isLoading,setIsLoading] = useState(true)
    useEffect( () =>{
        setIsLoading(false)
    },[contexto])
    return ( 
        
        <div className="CategoryListContainer">  
            <div className="container">
                <h1>
                    <NavLink to={`/`} className="goBack">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </NavLink>
                    Mi Carrito de compras
                </h1>
            {isLoading ? (
                    <div className="loading"><img src={loading}/></div>
                ):(
                    <div>
                        {contexto.cart.length>0 ? (
                            <div>
                                {contexto.cart.map((detail) => (             
                                    <ItemCart detail={detail} remove={contexto.removeFromCart} increase={contexto.increase} decrease={contexto.decrease}/>        
                                ))}
                                <div className="xyz"> 
                                    Total: ${contexto.total}
                                </div>
                                <NavLink className="botonx" to={`/categories/w`}>Seguir Comprando</NavLink> 
                                <NavLink className="botonx" to={`/checkout/`}>Finalizar Compra</NavLink> 
                            </div>
                        ) : (
                            <div>
                                <p>Tu carrito se encuentra vacio</p>
                                <NavLink to={`/categories/w`}>Ir a comprar</NavLink> 
                            </div>
                        )}
                    </div>    
                )}                         
            </div>              
        </div>         
      )          
}
