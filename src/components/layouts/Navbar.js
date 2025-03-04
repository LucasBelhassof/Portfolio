import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Navbar.module.css'
import logo from '../../img/Logo.jpg'
import Container from '../Container'

const Navbar = () => {
    return (
        <Container>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.nome}>
                    <h1>Lucas Belhassof</h1>
                </Link>
                <div className={styles.link}>
                    <a><Link to="/experience">EXPERIENCE</Link></a>
                    <a href="https://www.instagram.com/Lucas_Belhassof" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://github.com/LucasBelhassof?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/lucas-belhassof-leao" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                </div>
            </nav>
        </Container>
    )
}

export default Navbar