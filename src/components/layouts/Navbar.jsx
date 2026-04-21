import { useEffect, useState } from 'react';
import { GoMoon } from 'react-icons/go';
import { MdOutlineWbSunny, MdTranslate } from 'react-icons/md';
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

  const toggleLanguage = () => {
    const nextLanguage = activeLanguage === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Container>
      <nav className={styles.navbar}>
        <Link to="/" className="text-decoration-none text-dark">
          <h1>Lucas Belhassof Leao</h1>
        </Link>
        <div className={styles.controls}>
          <div className={styles.navGroup}>
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
            <Button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('navbar.switchLanguage', {
                language: t(
                  `navbar.languages.${activeLanguage === 'pt' ? 'enLabel' : 'ptLabel'}`,
                ),
              })}
              title={`${t(`navbar.languages.${activeLanguage}`)} | ${t(
                'navbar.languageToggleLabel',
              )}`}
              className={styles.languageToggle}
              variant="navButton"
              size="sm"
            >
              <MdTranslate />
            </Button>
            <Button
              type="button"
              onClick={toggleTheme}
              aria-label={t('navbar.themeToggleLabel')}
              className={styles.themeToggle}
              variant="navButton"
              size="sm"
            >
              {theme === 'light' ? <GoMoon /> : <MdOutlineWbSunny />}
            </Button>
          </div>
          {!isHomeRoute ? <Linkicon /> : null}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
