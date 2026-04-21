import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Projects from '../content/Projects';
import Work from '../content/Work';
import styles from './Experience.module.css';

const Experience = () => {
  const { t } = useTranslation();
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((currentValue) => !currentValue);
  };

  return (
    <section className={styles.section}>
      <div className={styles.contentbutton}>
        <p>{t('experience.projectsLabel')}</p>
        <button
          type="button"
          onClick={toggleSwitch}
          className={`${styles.button} ${isOn ? styles.on : ''}`}
          aria-pressed={isOn}
          aria-label={t('experience.toggleAria')}
        />
        <p>{t('experience.workLabel')}</p>
      </div>
      <div className={styles.content}>{isOn ? <Work /> : <Projects />}</div>
    </section>
  );
};

export default Experience;
