import { CiMail } from "react-icons/ci";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <button className={`rounded ${styles.button}`}>
                <a className="text-decoration-none" href="mailto:lucassbleao@yahoo.com.br" target="_blank" rel="noopener noreferrer">Email me <CiMail />
                </a>
            </button>
            <p className={styles.copy_right}>
                <span>LBL</span> &copy; 2025
            </p>
        </footer>
    );
}

export default Footer;
