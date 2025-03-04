import styles from './Home.module.css';
import foto1 from '../../img/Foto1.jpg';
import foto2 from '../../img/unicesumar_logo.png';
import flutter from '../../img/flutter.png';
import react from '../../logo.svg';

const Home = () => {
    return (
        <div>
            <div className={styles.container}>
                <section className={styles.section1}>
                    <img className={styles.foto1} src={foto1} alt="Foto" />
                    <div className={styles.textContainer}>
                        <div className={styles.p1}>
                            <img className={styles.foto2} src={foto2} alt="UNICESUMAR" />
                            <p>Atualmente, sou estudante de Engenharia de Software @ UNICESUMAR</p>
                        </div>
                    </div>
                </section>
            </div>
            <section className={styles.section2}>
                <div className={styles.box}>
                    <img src={flutter} alt="flutter" />
                    <p>Projeto em Flutter</p>
                </div>
                <div className={styles.box}>
                    <img src={react} alt="react" />
                    <p>Projeto em ReactJS</p>
                </div>
                <div className={styles.box}>
                    <img src={react} alt="react" />
                    <p>Projeto em ReactJS</p>
                </div>
                <div className={styles.box}>
                    <img src={react} alt="react" />
                    <p>Projeto em ReactJS</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
