import bandera from '../../bandera.svg'
import './Brand.css';

const nombreTienda="Mexifoods"
const handleLogo = () => alert(`Bienvenido a ${nombreTienda}`)

export const Brand=()=>{
    return(
      <div className="Brand">
        <img src={bandera} className="logo" height={20} alt={nombreTienda}/>   
        <p className="nombreTienda" onClick={handleLogo}>{nombreTienda}</p>
      </div>
    )  

} 