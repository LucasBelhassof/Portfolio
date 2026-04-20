import { useState } from 'react';
import Button from '../ui/Button';
import styles from './Experience.module.css';
import Work from '../content/Work';
import Projects from '../content/Projects';

const Experience = () => {
  const [isOn, setIsOn] = useState(false); // Estado inicial para o botão

  const toggleSwitch = () => {
    setIsOn(!isOn); // Alterna entre ligado (true) e desligado (false)
  };

  return (
    <section className={styles.section}>
      <div className={styles.contentbutton}>
        <p>Projects</p>
        <Button
          onClick={toggleSwitch}
          className={`${styles.button} ${isOn ? styles.on : ''}`}
          variant="ghost"
          size="sm"
          aria-pressed={isOn}
        />
        <p>Work</p>
      </div>
      <div className={styles.content}>{isOn ? <Work /> : <Projects />}</div>
    </section>
  );
};

export default Experience;
