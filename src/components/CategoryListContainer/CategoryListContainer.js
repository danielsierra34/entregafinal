import loading from '../../triangles.svg'
import './CategoryListContainer.css';
import { CategoryList } from '../CategoryList/CategoryList'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
export const CategoryListContainer = (props) => {   
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
                    Categorías
                </h1>
            {isLoading ? (
                    <div className="loading"><img src={loading}/></div>
                ):(
                    <div>
                        {hasCategories ? (
                            <CategoryList categories={categories}/>
                        ):(
                            <p>No hay productos en esta categoría</p>
                        )}   
                    </div>    
                )}                         
            </div>              
        </div>         
      )          
}
