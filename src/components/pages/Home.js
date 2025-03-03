import styles from './Home.module.css'
import foto1 from '../../img/Foto1.jpg'
import foto2 from '../../img/unicesumar_logo.png'

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section1}>
                <img className={styles.foto1} src={foto1} alt="Foto" />
                <div className={styles.textContainer}>
                    <div className={styles.p1}>
                        <img className={styles.foto2} src={foto2} alt='UNICESUMAR' />
                        <p>Atualmente, sou estudante de Engenharia de Software na UNICESUMAR</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <p>Meu nome é Lucas</p>
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div>
                    <h2>Projetos Recentes:</h2>
                </div>
                <div>
                    <p>Projeto em Flutter</p>
                    <p>Projeto em ReatcJS</p>
                </div>
            </section>
        </div>
    )
}

export default Home