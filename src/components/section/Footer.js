import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div id="Footer" className={styles.footer}>
            <ul>
                <li><a href='https://github.com/DDR23' target='blank_'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/andr%C3%A9-campos-25193a257/' target='blank_1'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>André Campos © 2023</p>
        </div>
    );
}

export default Footer;