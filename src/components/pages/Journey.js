import { useEffect, useRef, useState } from 'react';
import { journeyFeaturedProjects } from '../../data/projectData';
import {
  journeyFocus,
  journeyIntro,
  journeyTimeline,
} from '../../data/journeyData';
import styles from './Journey.module.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const defaultJourneyIntro = {
  eyebrow: 'My Journey',
  title: 'A timeline shaped by curiosity, product thinking and real work.',
  summary:
    'My path into development grew through practice, projects and professional experience.',
};
const safeJourneyIntro = journeyIntro || defaultJourneyIntro;
const safeJourneyFocus = Array.isArray(journeyFocus) ? journeyFocus : [];
const safeJourneyTimeline = Array.isArray(journeyTimeline) ? journeyTimeline : [];

const Journey = () => {
  const timelineRef = useRef(null);
  const railRef = useRef(null);
  const markerRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState(
    safeJourneyTimeline.map(() => false),
  );

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
        safeJourneyTimeline.map((_, index) => {
          const marker = markerRefs.current[index];

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
      <section className={styles.hero}>
        <span className={styles.eyebrow}>{safeJourneyIntro.eyebrow}</span>
        <h2 className={styles.heroTitle}>{safeJourneyIntro.title}</h2>
        <p className={styles.heroSummary}>{safeJourneyIntro.summary}</p>
        <div className={styles.focusList}>
          {safeJourneyFocus.map((item) => (
            <div key={item} className={styles.focusItem}>
              <span className={styles.focusBullet} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection} ref={timelineRef}>
        <div className={styles.timelineIntro}>
          <span className={styles.sectionLabel}>Timeline</span>
          <h3>Scroll through the milestones that shaped my trajectory.</h3>
          <p>
            The line below grows with the page scroll and connects the
            experiences, projects and transitions that moved me toward software
            development.
          </p>
        </div>

        <div className={styles.timelineRail} aria-hidden="true" ref={railRef}>
          <div className={styles.timelineLine} />
          <div
            className={styles.timelineProgress}
            style={{ height: `${progress}%` }}
          />
        </div>

        <div className={styles.timelineItems}>
          {safeJourneyTimeline.map((item, index) => {
            const isActive = activeIndexes[index];

            return (
              <article
                key={item.id}
                className={`${styles.timelineCard} ${isActive ? styles.timelineCardActive : ''}`}
              >
                <div className={styles.timelineMarkerWrap}>
                  <span
                    ref={(element) => {
                      markerRefs.current[index] = element;
                    }}
                    className={`${styles.timelineMarker} ${isActive ? styles.timelineMarkerActive : ''}`}
                  />
                </div>
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
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <span className={styles.sectionLabel}>Main Projects</span>
          <h3>Projects that best represent the path behind this timeline.</h3>
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
                <span className={styles.privateNote}>Private case study</span>
              ) : (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Open repository
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
