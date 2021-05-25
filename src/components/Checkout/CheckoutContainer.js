import loading from '../../triangles.svg'
import './Checkout.css';
import { useEffect,useState,useContext } from 'react'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Detail} from '../Detail/Detail'
import {CartContext} from '../../context/CartContext'



export const CheckoutContainer = ({cart,total}) => { 
    const contexto=useContext(CartContext)
    let [alertaStatus,setAlertaStatus]= useState(false)
    let [alertaTexto,setAlertaTexto]= useState('')
    let [alertaTipo,setAlertaTipo]= useState('')

    const [purchase,setPurchase] = useState({
        buyer:{
            nombre:'',
            email:'',
            telefono:'',
        },
        cart:contexto.cart,
        total:contexto.total
    })

    const handlePurchase = (item,value) => {
        const newPurchase={...purchase}
        newPurchase.buyer[item]=value
        setPurchase(newPurchase)
        console.log(purchase)
    }

    const finishPurchase = () => {
        const db=getFirestore()
        const orders = db.collection("ordenes")
        const batch = db.batch()
        orders.add(purchase).then(({id})=>{
            purchase.cart.forEach(element => {
                console.log(element)
                const itemRef= db.collection("productos").doc(element.id)
                batch.update(itemRef,{inventory:element.inventory-element.quantity})
            }); 
            batch.commit().then(() => {
                setAlertaStatus(true)
                setAlertaTipo("alert-success")
                setAlertaTexto(`se finalizo la compra y el numero de identificación es: ${id}`)
                setTimeout(()=>{
                    setAlertaStatus(false)
                },3500)
            })            
        })

    }

    return (   
        <div className="CheckoutContainer">  
            <h1>
                <NavLink to={`/categories/`} className="goBack">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </NavLink>
                Checkout
            </h1>      
        
            <div className="formFinalizar">
                <div className="textGroup">   
                    <label>Nombre</label>            
                    <input type="text" className="campo" placeholder="Ingrese su Nombre" value={purchase.buyer.nombre} onChange={({target})=>{handlePurchase("nombre",target.value)}}/>
                </div>
                <div className="textGroup">   
                    <label>Email</label>            
                    <input type="text" className="campo" placeholder="Ingrese su Email" value={purchase.buyer.email} onChange={({target})=>{handlePurchase("email",target.value)}}/>
                </div>   
                <div className="textGroup">   
                    <label>Teléfono</label>            
                    <input type="text" className="campo" placeholder="Ingrese su Teléfono" value={purchase.buyer.telefono} onChange={({target})=>{handlePurchase("telefono",target.value)}}/>
                </div>           
            </div>
            {alertaStatus?<div className={["alert", alertaTipo].join(' ')}>{alertaTexto}</div>:""}
            <div onClick={finishPurchase}>Finalizar Compra</div>             
        </div> 


             
      )          
}
