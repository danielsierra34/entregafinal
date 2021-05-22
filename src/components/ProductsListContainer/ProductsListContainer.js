import loading from '../../triangles.svg'
import './ProductsListContainer.css';
import { ProductsList } from '../ProductsList/ProductsList'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'



export const ProductsListContainer = (props) => {
    const {category} = useParams()
    const [isLoading,setIsLoading] = useState(true)    
    const [products, setProducts]= useState([])
    const [titulo, setTitulo]= useState("Nuestro menú")
    const [hasProducts, setHasProducts]= useState(false)  
    useEffect(()=>{
        setIsLoading(true)
        const db=getFirestore() 
        const ProductsCollection=db.collection('productos').where("category",category=='todos'?'>':'==', category=='todos'?'':category);
        ProductsCollection.get().then((response)=>{           
            setHasProducts(response.size>0)            
            setProducts(response.docs.map((doc) => doc.data()))  
            setTitulo(category==''?'nnnnnn':'Nuestro menú')
            setIsLoading(false)
        }).catch(
            (error) => console.error ('Firestore Error: ', error)
        )
    },[category]) 


    return ( 
        
        <div className="ProductsListContainer">  
        <h1>
            <NavLink to={`/categories/`} className="goBack">
                <FontAwesomeIcon icon={faAngleLeft} />
            </NavLink>
            {titulo}
        </h1>
        
        
            <div className="container">                
                {isLoading ? (
                    <div className="loading"><img src={loading}/></div>
                ):(
                    <div>
                        {1==1 ? (
                            <ProductsList products={products}/>     
                        ):(
                            <p>No hay productos en esta categoría</p>
                        )}   
                    </div>    
                )}                  
            </div>              
        </div>         
      )          
}
