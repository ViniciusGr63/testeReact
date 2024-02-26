import styles from './Nav.module.css'
import {BrowserRouter as Router ,Route,Routes, Link } from "react-router-dom" 

function Nav (){
    return(
        <nav className={styles.navEstilo}>
        <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/Pag1">Pag1</Link></li>
      </ul>
      <ul>
        <li><Link to="/Pag2">Pag2</Link></li>
      </ul>
           
        </nav>
    )
}
export default Nav;