import './Header.css';
import {CartWidget} from '../CartWidget/CartWidget'
import {NavBar} from '../NavBar/NavBar'
import {Brand} from '../Brand/Brand'




export const Header=()=>{
    return(
      <header className="topbar">
        <Brand/>      
        <NavBar/>
        <CartWidget quantity={"10"}/>
      </header>
    ) 

}