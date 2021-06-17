import loading from '../../triangles.svg'
import './Admin.css';
import { useEffect,useState,useContext } from 'react'
import { getFirestore } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Detail} from '../Detail/Detail'



export const AdminContainer = () => { 

    let [alertaStatus,setAlertaStatus]= useState(false)
    let [alertaTexto,setAlertaTexto]= useState('')
    let [alertaTipo,setAlertaTipo]= useState('')
    let [idTemp,setIdTemp]= useState('')

    let [preview,setPreview]=useState('data:image/png;base64,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')

    const [product,setProduct] = useState({
        category:'',
        nombre:'',
        precio:0,
        moneda:'',
        inventory:0,
        img:'',
        idx:'',
        id:0

    })

    const handleProduct = (item,value) => {
        const newProduct={...product}
        newProduct[item]=value
        if(item=="nombre"){
            let idx=value.replace(" ", "-");
            idx=idx.toLowerCase();
            newProduct["idx"]=idx
            setIdTemp(idx)
            newProduct["id"]=parseInt(Math.floor(Math.random() * (7000 - 6000) + 6000));
        }
        if (item=="precio"){
            newProduct["precio"]=parseInt(value)
        }
        if (item=="inventory"){
            newProduct["inventory"]=parseInt(value)
        }
        if (item=="img"){
            setPreview(value)
        }
        setProduct(newProduct)
        console.log(product)
    }

    const createProduct =  () => {
        const db=getFirestore()
        const batch = db.batch()
        const productz = db.collection("productos")
        
        productz.add(product).then(({id})=>{
            alert(`se finalizo la creación del producto con el id ${id}`)
        })
    }

    return (   
        <div className="AdminContainer">  
            <h1>
                <NavLink to={`/categories/`} className="goBack">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </NavLink>
                Admin
            </h1>      
            <div className="overflown">
                <div className="formFinalizar">
                    <div className="textGroup">   
                        <label>Categoria</label>
                        <select className="campo" onChange={({target})=>{handleProduct("category",target.value)}}>
                            <option value="platos">Platos Fuertes</option> 
                            <option value="bebidas">Bebidas</option>
                            <option value="cocktails">Cocteles</option>
                            <option value="postres">Postres</option>
                            <option value="entradas">Entradas</option>   
                        </select>    
                    </div>
                    <div className="textGroup">   
                        <label>Nombre</label>            
                        <input type="text" className="campo" placeholder="Ingrese el nombre del producto" onChange={({target})=>{handleProduct("nombre",target.value)}}/>
                    </div>   
                    <div className="textGroup">   
                        <label>Precio</label>
                        <select className="campo" onChange={({target})=>{handleProduct("precio",target.value)}}>
                            <option value="MXN">MXN</option> 
                            <option value="USD">USD</option>
                            <option value="COP">COP</option>   
                        </select>         
                    </div>
                    <div className="textGroup">   
                        <label>Moneda</label>            
                        <input type="text" className="campo" placeholder="Ingrese la Moneda" onChange={({target})=>{handleProduct("moneda",target.value)}}/>
                    </div> 
                    <div className="textGroup">   
                        <label>Inventario</label>            
                        <input type="number" className="campo" placeholder="Ingrese el Inventario actual" onChange={({target})=>{handleProduct("inventory",target.value)}}/>
                    </div>
                    <div className="textGroup">   
                        <label>Id</label>            
                        <input type="text" className="campo" value={idTemp} disabled/>
                    </div>
                    <div className="textGroup2">
                        <label>Imagen</label>
                        <table>
                            <tbody>
                            <tr>
                                <td className="padded">
                                        
                                        <textarea className="textarea" onChange={({target})=>{handleProduct("img",target.value)}} placeholder="Ingrese su imagen en Base64"></textarea>
                                </td>
                                <td className="fitted">
                                    <div className="preview">
                                        <img src={preview}/>    
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {alertaStatus?<div className={["alert", alertaTipo].join(' ')}>{alertaTexto}</div>:""}
                    <div onClick={createProduct}>Crear Producto</div>       
                </div>                     
            </div> 

        </div>


             
      )          
}
