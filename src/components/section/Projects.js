import Card from '../elements/Card';
import styles from './Projects.module.css'
import projeto01 from '../images/projeto01.PNG'
import ButtonA from '../elements/ButtonA';

function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
            <h1 id={styles.projectstitle} >Projetos</h1>
            <Card   
                img={projeto01}
                title="Pagina de links - ÔMEGA"
                tech="HTML, CSS e JS"
                description="Com o conceito de cartão de visita, essa página é o primeiro contato entre cliente e empresa, ela pagina reúne todos os links importantes para interação entre o usuário/serviço "
                repo="https://github.com/omegatech-andre/estampador-de-sucesso-turma-05"
                site="https://estampador-de-sucesso-turma-05.vercel.app/"
            />
            <Card   
                img={projeto01}
                title="Pagina de links - ÔMEGA"
                tech="HTML, CSS e JS"
                description="Com o conceito de cartão de visita, essa página é o primeiro contato entre cliente e empresa, ela pagina reúne todos os links importantes para interação entre o usuário/serviço "
                repo="https://github.com/omegatech-andre/estampador-de-sucesso-turma-05"
                site="https://estampador-de-sucesso-turma-05.vercel.app/"
            />
            <Card   
                img={projeto01}
                title="Pagina de links - ÔMEGA"
                tech="HTML, CSS e JS"
                description="Com o conceito de cartão de visita, essa página é o primeiro contato entre cliente e empresa, ela pagina reúne todos os links importantes para interação entre o usuário/serviço "
                repo="https://github.com/omegatech-andre/estampador-de-sucesso-turma-05"
                site="https://estampador-de-sucesso-turma-05.vercel.app/"
            />
            <ButtonA text='Acesse o meu repósitorio' link='https://github.com/DDR23'/>
        </div>
    );
}

export default Projects;