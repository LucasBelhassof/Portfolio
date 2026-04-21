import { useEffect, useState } from 'react';
import { GoMoon } from 'react-icons/go';
import { MdOutlineWbSunny } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container';
import Button from '../ui/Button';
import Linkicon from './Linksicon';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  const navItems = [
    { to: '/experience', label: t('navbar.links.experience') },
    { to: '/journey', label: t('navbar.links.journey') },
  ];
  const activeLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const languageOptions = ['pt', 'en'];

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch {
      return undefined;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = (language) => {
    if (language === activeLanguage) {
      return;
    }

    i18n.changeLanguage(language);
  };

  return (
    <Container>
      <nav className={styles.navbar}>
        <Link to="/" className="text-decoration-none text-dark">
          <h1>Lucas Belhassof Leao</h1>
        </Link>
        <div className={styles.controls}>
          <div className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${styles.link} ${isActive ? styles.activeLink : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {!isHomeRoute ? <Linkicon /> : null}
          <div
            className={styles.languageToggle}
            role="group"
            aria-label={t('navbar.languageToggleLabel')}
          >
            {languageOptions.map((language) => {
              const isActive = activeLanguage === language;

              return (
                <Button
                  key={language}
                  type="button"
                  onClick={() => changeLanguage(language)}
                  aria-pressed={isActive}
                  aria-label={t('navbar.switchLanguage', {
                    language: t(`navbar.languages.${language}Label`),
                  })}
                  className={`${styles.languageButton} ${isActive ? styles.languageButtonActive : ''}`}
                  variant="ghost"
                  size="sm"
                >
                  {t(`navbar.languages.${language}`)}
                </Button>
              );
            })}
          </div>
          <Button
            onClick={toggleTheme}
            aria-label={t('navbar.themeToggleLabel')}
            className={styles.themeToggle}
            variant="ghost"
            size="sm"
          >
            {theme === 'light' ? <GoMoon /> : <MdOutlineWbSunny />}
          </Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
