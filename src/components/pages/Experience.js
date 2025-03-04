import { useState } from 'react';
import styles from './Experience.module.css';
import Container from '../Container';

const Experience = () => {
    const [isOn, setIsOn] = useState(false); // Estado inicial para o botão

    const toggleSwitch = () => {
        setIsOn(!isOn); // Alterna entre ligado (true) e desligado (false)
    };

    return (
            <section className={styles.section}>
                <div className={styles.container1}>
                    <h1>Experience</h1>
                    <button onClick={toggleSwitch} className={styles.button}>
                        {isOn ? 'Desligar' : 'Ligar'}
                    </button>
                </div>
            
            <div>
                {isOn ? (
                    <p>O conteúdo está ligado! Aqui está algo interessante.</p>
                ) : (
                    <p>O conteúdo está desligado. Clique no botão para ligar.</p>
                )}
            </div>
            </section>
    );
};

export default Experience;
