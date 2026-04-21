import { CiMail } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import Button from '../ui/Button';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Button
        href="mailto:lucasbelhassof@gmail.com"
        className={styles.button}
        rounded
      >
        {t('common.emailMe')} <CiMail />
      </Button>
      <p className={styles.copy_right}>
        <span>LBL</span> &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
