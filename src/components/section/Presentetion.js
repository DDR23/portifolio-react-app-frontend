import ButtonA from '../elements/ButtonA';
import styles from './Presentation.module.css'

function Presentation(){
    return(
        <div id="Presentation" className={styles.presentation}>
            <h1>Olá, eu sou André Campos</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como Desenvolvedor de Software, eu tenho o compromisso de resolver problemas complexos e trazer resultados excepcionais para os negócios. Meus projetos já geraram milhões de reais em receita anual estou sempre em busca de novos desafios para superar.</p>
            <ButtonA text='Conecte-se comigo!' link="https://www.linkedin.com/in/andr%C3%A9-campos-25193a257/"/>
        </div>
    );
}

export default Presentation;