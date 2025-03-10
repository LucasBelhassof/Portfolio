import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Linkicon = () => {
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
        <div>
            {isExp ? (
                <ul className="d-flex list-unstyled" style={{ fontSize: "20px" }}>
                    <li className="px-2">
                        <a href="https://www.instagram.com/Lucas_Belhassof" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: "black",
                            }}>
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="https://github.com/LucasBelhassof?tab=repositories" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: "black",
                            }}>
                            <FaGithub />
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="https://www.linkedin.com/in/lucas-belhassof-leao" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: "black",
                            }}>
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            ) : (
                <ul className="d-flex list-unstyled" style={{ fontSize: "30px" }}>
                    <li className="px-2">
                        <a href="https://www.instagram.com/Lucas_Belhassof" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: "black",
                            }}>
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="https://github.com/LucasBelhassof?tab=repositories" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: "black",
                            }}>
                            <FaGithub />
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="https://www.linkedin.com/in/lucas-belhassof-leao" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: "black",
                            }}>
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Linkicon;