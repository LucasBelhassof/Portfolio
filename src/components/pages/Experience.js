import { useState } from 'react';
import styles from './Experience.module.css';
import Container from '../Container';
import Work from '../content/Work';
import Projects from '../content/Projects';

const Experience = () => {
    const [isOn, setIsOn] = useState(false); // Estado inicial para o botão

    const toggleSwitch = () => {
        setIsOn(!isOn); // Alterna entre ligado (true) e desligado (false)
    };

    return (
        <section className={styles.section}>
            <h2>Experience</h2>
            <div className={styles.contentbutton}>
                <p>Projects</p>
                <button
                    onClick={toggleSwitch}
                    className={`${styles.button} ${isOn ? styles.on : ''}`}>
                </button>
                <p>Work</p>
            </div>
            <div className={styles.content}>
                {isOn ? (
                    <Work />
                ) : (
                    <Projects />
                )}
            </div>
        </section>
    );
};

export default Experience;
