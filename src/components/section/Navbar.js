import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div id="Navbar" className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Sobre mim</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://github.com/DDR23' target='blank_'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/andr%C3%A9-campos-25193a257/' target='blank_1'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar