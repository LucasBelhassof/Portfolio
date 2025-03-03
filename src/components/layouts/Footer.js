import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.instagram.com/Lucas_Belhassof" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LucasBelhassof?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-belhassof-leao" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Leão</span> &copy; 2025
            </p>
        </footer>
    );
}

export default Footer;
