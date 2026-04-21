import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getJourneyFeaturedProjects } from '../../data/projectData';
import { getJourneyTimeline } from '../../data/journeyData';
import styles from './Journey.module.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Journey = () => {
  const { t } = useTranslation();
  const safeJourneyTimeline = getJourneyTimeline(t);
  const journeyFeaturedProjects = getJourneyFeaturedProjects(t);
  const timelineRef = useRef(null);
  const railRef = useRef(null);
  const markerRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current || !railRef.current) {
        return;
      }

      const sectionRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalDistance = sectionRect.height + viewportHeight * 0.35;
      const traveled = viewportHeight * 0.72 - sectionRect.top;
      const nextProgress = clamp((traveled / totalDistance) * 100, 0, 100);

      const railRect = railRef.current.getBoundingClientRect();
      const progressBottom =
        railRect.top + railRect.height * (nextProgress / 100);

      setProgress(nextProgress);
      setActiveIndexes(
        markerRefs.current.map((marker) => {

          if (!marker) {
            return false;
          }

          const markerRect = marker.getBoundingClientRect();
          const markerCenter = markerRect.top + markerRect.height / 2;

          return progressBottom >= markerCenter;
        }),
      );
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.timelineHeader}>
        <div className={styles.headerColumn}>
          <span className={styles.sectionLabel}>
            {t('journey.header.projectsEyebrow')}
          </span>
          <h3>{t('journey.header.projectsTitle')}</h3>
        </div>
        <div className={styles.headerDivider} />
        <div className={styles.headerColumn}>
          <span className={styles.sectionLabel}>
            {t('journey.header.workEyebrow')}
          </span>
          <h3>{t('journey.header.workTitle')}</h3>
        </div>
      </section>

      <section className={styles.timelineSection} ref={timelineRef}>
        <div className={styles.timelineRail} aria-hidden="true" ref={railRef}>
          <div className={styles.timelineLine} />
          <div
            className={styles.timelineProgress}
            style={{ height: `${progress}%` }}
          />
        </div>

        <div className={styles.timelineRows}>
          {safeJourneyTimeline.map((item, index) => {
            const isActive = activeIndexes[index];
            const isLeft = item.side === 'left';

            return (
              <article
                key={item.id}
                className={`${styles.timelineRow} ${isActive ? styles.timelineRowActive : ''}`}
              >
                <div className={styles.rowSide}>
                  {isLeft ? (
                    <div className={styles.timelineContent}>
                      <span className={styles.period}>{item.period}</span>
                      <h4>{item.title}</h4>
                      <p className={styles.subtitle}>{item.subtitle}</p>
                      <p className={styles.body}>{item.body}</p>
                      <ul className={styles.highlights}>
                        {item.highlights.map((highlight) => (
                          <li key={`${item.id}-${highlight}`}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className={styles.emptySide} aria-hidden="true" />
                  )}
                </div>

                <div className={styles.markerColumn}>
                  <span
                    ref={(element) => {
                      markerRefs.current[index] = element;
                    }}
                    className={`${styles.timelineMarker} ${isActive ? styles.timelineMarkerActive : ''}`}
                  />
                </div>

                <div className={styles.rowSide}>
                  {!isLeft ? (
                    <div className={styles.timelineContent}>
                      <span className={styles.period}>{item.period}</span>
                      <h4>{item.title}</h4>
                      <p className={styles.subtitle}>{item.subtitle}</p>
                      <p className={styles.body}>{item.body}</p>
                      <ul className={styles.highlights}>
                        {item.highlights.map((highlight) => (
                          <li key={`${item.id}-${highlight}`}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className={styles.emptySide} aria-hidden="true" />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <span className={styles.sectionLabel}>
            {t('journey.projectsSectionEyebrow')}
          </span>
          <h3>{t('journey.projectsSectionTitle')}</h3>
        </div>
        <div className={styles.projectGrid}>
          {journeyFeaturedProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <h4>{project.name}</h4>
                  <p>{project.subtitle}</p>
                </div>
                <span className={styles.projectLabel}>{project.label}</span>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.stack.map((item) => (
                  <span
                    key={`${project.id}-${item}`}
                    className={styles.projectTag}
                  >
                    {item}
                  </span>
                ))}
              </div>
              {project.isPrivate ? (
                <span className={styles.privateNote}>
                  {t('common.privateCaseStudy')}
                </span>
              ) : (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {t('common.openRepository')}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journey;
