import styles from './Home.module.css'
import foto1 from '../../img/Foto1.jpg'

const Home = () => {
    return (
        <div className={styles.container}>
            <img className={styles.foto1} src={foto1} alt="Foto" />
            <p>Meu nome é Lucas</p>
        </div>
    )
}

export default Home