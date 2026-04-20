import { useEffect, useState } from 'react';
import { GoMoon } from 'react-icons/go';
import { MdOutlineWbSunny } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container';
import Button from '../ui/Button';
import Linkicon from './Linksicon';
import styles from './Navbar.module.css';

const Navbar = () => {
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
    { to: '/experience', label: 'EXPERIENCE' },
    { to: '/journey', label: 'MY JOURNEY' },
  ];

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
          <Button
            onClick={toggleTheme}
            aria-label="Toggle theme"
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
