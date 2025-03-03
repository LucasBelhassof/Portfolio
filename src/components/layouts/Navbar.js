import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Navbar.module.css'
import logo from '../../img/Logo.jpg'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt='Logo' />
            </Link>
            <div className={styles.link}>
                <a><Link to="/sobremim">About</Link></a>
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
    )
}

export default Navbar