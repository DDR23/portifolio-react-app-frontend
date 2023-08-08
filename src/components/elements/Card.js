import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}><img src={img}></img></a>
            <div>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='repositório' link={repo}/>
            </div>
        </div>
    )
}

export default Card