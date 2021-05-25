import loading from '../../triangles.svg'
import './Detail.css';
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {Detail} from './Detail'

export const DetailContainer = (props) => {   
    const {productId} = useParams()
    const [isLoading,setIsLoading] = useState(true)
    const [detail, setDetail]= useState([])
    const [hasDetail, setHasDetail]= useState(false)

    useEffect(()=>{
        const db=getFirestore() 
        const categoryCollection=db.collection('productos').where('idx','==',productId)
        categoryCollection.get().then((response)=>{
            setHasDetail(response.docs[0].data())           
            setDetail(response.docs[0].data()) 
            setIsLoading(false) 
        }).catch(
            (error) => console.error ('Firestore Error: ', error)
        )
    },[productId]) 

    useEffect(()=>{

    },[detail])

    return ( 
        
        <div className="DetailContainer">  
            <div className="container">
                <h1>
                    <NavLink to={`/categories/`} className="goBack">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </NavLink>
                    {detail.nombre}
                </h1>
            {isLoading ? (
                    <div className="loading"><img src={loading}/></div>
                ):(
                    <div>
                        {hasDetail ? (
                            <Detail detail={detail}/>
                        ):(
                            <p>No hay productos en esta categoría</p>
                        )}   
                    </div>    
                )}                         
            </div>              
        </div>         
      )          
}
