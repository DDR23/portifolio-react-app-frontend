import { DiCss3, DiGit, DiHtml5, DiJsBadge, DiReact, } from "react-icons/di";
import styles from './Skills.module.css'

function Skills(){
    return(
        <div id="Skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas habilidades e conhecimentos</p>
            <section>
                <DiHtml5 id={styles.html} className={styles.logo} size={180}/>
                <DiCss3 id={styles.css} className={styles.logo} size={180}/>
                <DiJsBadge id={styles.js} className={styles.logo} size={150}/>
                <DiReact id={styles.react} className={styles.logo} size={180}/>
                <DiGit id={styles.git} className={styles.logo} size={180}/>
            </section>
        </div>
    );
}

export default Skills;