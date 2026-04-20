import { CiMail } from 'react-icons/ci';
import styles from './Footer.module.css';
import Button from '../ui/Button';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Button
        href="mailto:lucasbelhassof@gmail.com"
        className={styles.button}
        rounded
      >
        Email me <CiMail />
      </Button>
      <p className={styles.copy_right}>
        <span>LBL</span> &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
