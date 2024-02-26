import styles from './Nav.module.css'
import {BrowserRouter as  Link } from "react-router-dom" 

function Nav (){
    return(
        <nav >
        <ul className={styles.navEstilo}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="/Pag1">Pag1</Link></li>
        <li className={styles.item}><Link to="/Pag2">Pag2</Link></li>
      </ul>
    
           
        </nav>
    )
}
export default Nav;