import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import Button from '../ui/Button'
import { GoMoon } from 'react-icons/go';
import { MdOutlineWbSunny } from 'react-icons/md';
import Container from '../Container'
import Linkicon from './Linksicon';

const Navbar = () => {
    const [isExp, setExp] = useState(false);
    const [theme, setTheme] = useState(() => {
        try { return localStorage.getItem('theme') || 'light' } catch { return 'light' }
    });
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/experience')
            setExp(true)
        else
            setExp(false)
    }, [location])

    useEffect(() => {
        try { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); } catch {}
    }, [theme])

    const toggleSwitch = () => {
        setExp(!isExp); // Alterna entre ligado (true) e desligado (false)
    };

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    return (
        <Container>
            <nav className={styles.navbar}>
                <Link to="/" className="text-decoration-none text-dark">
                    <h1>Lucas Belhassof Leão</h1>
                </Link>
                <div className={styles.controls}>
                    {isExp ? (
                        <Linkicon />
                    ) : (
                        <Link onClick={toggleSwitch} to="/experience" className={`${styles.link} m-1`} style={{ color: "inherit" }}>
                            EXPERIENCE
                        </Link>
                    )}
                    <Button onClick={toggleTheme} aria-label="Toggle theme" className={styles.themeToggle} variant="ghost" size="sm">
                        {theme === 'light' ? <GoMoon /> : <MdOutlineWbSunny />}
                    </Button>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar