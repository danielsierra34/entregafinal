import loading from '../../triangles.svg'
import './CartContainer.css';
import { Cart } from '../Cart/Cart'
import { useEffect,useState } from 'react'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../context/CartContext'

export const CartContainer = (props) => {   
    const contexto=useContext(CartContext)
    console.log(contexto)
    const [isLoading,setIsLoading] = useState(true)
    const [categories, setCategories]= useState([])
    const [hasCategories, setHasCategories]= useState(false)

    useEffect(()=>{
        const db=getFirestore() 
        const categoryCollection=db.collection('categorias')
        categoryCollection.get().then((response)=>{
            setHasCategories(response.size>0)           
            setCategories(response.docs.map((doc) => doc.data()))  
            setIsLoading(false)                 
        }).catch(
            (error) => console.error ('Firestore Error: ', error)
        )
    },[]) 

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
                        {hasCategories ? (
                            <Cart categories={categories}/>
                        ):(
                            <p>No hay productos en tu carrito de compras</p>
                        )}   
                    </div>    
                )}                         
            </div>              
        </div>         
      )          
}
