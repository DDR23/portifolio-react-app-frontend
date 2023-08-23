import { useEffect, useState } from 'react';
import ButtonA from '../elements/ButtonA';
import styles from './Presentation.module.css'

function Presentation(){
    const [text, setText] = useState('');
    const conteudo = ['André Campos!  ', 'Desenvolvedor Front-End!  ', 'Gestor de Tráfego!  '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    }, [text])

    const toType = ()=>{
        let i = loop % conteudo.length;
        let fulltext = conteudo[i]
        let updateText = isDeleting ? fulltext.substring(0, text.length-1) : fulltext.substring(0, text.length+1)

        setText(updateText);

        if(!isDeleting && updateText === fulltext){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id="Presentation" className={styles.presentation}>
            <h1>Olá, eu sou {text}</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como Desenvolvedor de Software, eu tenho o compromisso de resolver problemas complexos e trazer resultados excepcionais para os negócios. Meus projetos já geraram milhões de reais em receita anual estou sempre em busca de novos desafios para superar.</p>
            <ButtonA text='Conecte-se comigo!' link="https://www.linkedin.com/in/andr%C3%A9-campos-25193a257/"/>
        </div>
    );
}

export default Presentation;