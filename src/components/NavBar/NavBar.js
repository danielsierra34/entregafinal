import logo from '../../logo.svg'
import {NavLink} from 'react-router-dom'
import './NavBar.css';


export const NavBar=()=>{
    return(
        <nav className="NavBar">
          <ul className="links">
            <li className="link">
              <NavLink exact to={`/`} activeClassName="seleccionado" className="normal"> Home</NavLink>
            </li>
            <li className="link">
              <NavLink to={`/categories/ `} activeClassName="seleccionado" className="normal">Categories</NavLink>
            </li>
            <li className="link">
              <NavLink to={`/products/todos`} activeClassName="seleccionado" className="normal">Products</NavLink>
            </li>
            <li className="link">
              <NavLink to={`/checkout`} activeClassName="seleccionado" className="normal">Products</NavLink>
            </li>
          </ul>
        </nav> 
    )

}