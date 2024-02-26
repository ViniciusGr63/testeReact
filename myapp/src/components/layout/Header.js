import styles from './Header.module.css'
import Nav from './Nav'

function Header (){
    return(
        <header className={styles.headerEstilo} >
        
        <Nav/>
        </header>
    )
}
export default Header;