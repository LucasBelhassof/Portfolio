import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from '../Container'
import Linkicon from './Linksicon';

const Navbar = () => {
    const [isExp, setExp] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/experience')
            setExp(true)
        else
            setExp(false)
    }, [location])

    const toggleSwitch = () => {
        setExp(!isExp); // Alterna entre ligado (true) e desligado (false)
    };

    return (
        <Container>
            <nav className={styles.navbar}>
                <Link to="/" className="text-decoration-none text-dark">
                    <h1>Lucas Belhassof Leão</h1>
                </Link>
                <div>
                    {isExp ? (
                        <Linkicon />
                    ) : (
                        <a><Link onClick={toggleSwitch} to="/experience" className="m-1"
                        style={{
                            color: "black",
                        }}>EXPERIENCE</Link></a>
                    )}
                </div>
            </nav>
        </Container>
    )
}

export default Navbar