import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getJourneyFeaturedProjects } from '../../data/projectData';
import { getJourneyTimeline } from '../../data/journeyData';
import styles from './Journey.module.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const getProjectStartYear = (value) => Number.parseInt(value, 10) || 0;
const currentYear = new Date().getFullYear();

const getProjectTimelinePeriod = (project) => {
  const startedYear = getProjectStartYear(project.startedAt);

  if (project.isInDevelopment && startedYear && startedYear < currentYear) {
    return `${startedYear}-${currentYear}`;
  }

  return project.startedAt;
};

const Journey = () => {
  const { t } = useTranslation();
  const safeJourneyTimeline = getJourneyTimeline(t);
  const journeyFeaturedProjects = getJourneyFeaturedProjects(t);
  const timelineItemsById = Object.fromEntries(
    safeJourneyTimeline.map((item) => [item.id, item]),
  );
  const projectItemsById = Object.fromEntries(
    journeyFeaturedProjects.map((project) => [project.id, project]),
  );

  const createProjectTimelineItem = (project) => {
    if (!project) {
      return null;
    }

    return {
      id: `timeline-${project.id}`,
      type: 'project',
      period: getProjectTimelinePeriod(project),
      title: project.name,
      subtitle: project.subtitle,
      body: project.description,
      highlights: project.highlights,
      isInDevelopment: project.isInDevelopment,
    };
  };

  const nexaEcosystemProjects = ['nexa-cliente', 'nexa-system']
    .map((projectId) => projectItemsById[projectId])
    .filter(Boolean);

  const nexaEcosystemTimelineItem =
    nexaEcosystemProjects.length > 0
      ? {
          id: 'timeline-nexa-ecosystem',
          type: 'project',
          period: `${Math.min(
            ...nexaEcosystemProjects.map((project) => getProjectStartYear(project.startedAt)),
          )}-${currentYear}`,
          title: t('journey.projectCard.nexaEcosystem.title'),
          subtitle: t('journey.projectCard.nexaEcosystem.subtitle'),
          body: t('journey.projectCard.nexaEcosystem.body'),
          highlights: t('journey.projectCard.nexaEcosystem.highlights', {
            returnObjects: true,
          }),
          isInDevelopment: true,
        }
      : null;

  const timelineRows = [
    {
      id: 'row-2022',
      left: null,
      right: timelineItemsById['vipnote'] ?? null,
    },
    {
      id: 'row-2023',
      left: createProjectTimelineItem(projectItemsById['real-trends-clone']),
      right: timelineItemsById['five'] ?? null,
    },
    {
      id: 'row-2025',
      left: createProjectTimelineItem(projectItemsById['cost']),
      right: timelineItemsById['imovel-guide'] ?? null,
    },
    {
      id: 'row-2025-2026',
      left: nexaEcosystemTimelineItem,
      right: timelineItemsById['aprovei'] ?? null,
    },
    {
      id: 'row-2026',
      left: createProjectTimelineItem(projectItemsById['finly']),
      right: null,
    },
    {
      id: 'row-now',
      left: timelineItemsById['today'] ?? null,
      right: null,
    },
  ].filter((row) => row.left || row.right);
  const timelineRef = useRef(null);
  const railRef = useRef(null);
  const markerRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState([]);

  const renderTimelineContent = (item) => {
    const isProject = item.type === 'project';

    return (
      <div className={styles.timelineContent}>
        {isProject ? (
          <div className={styles.timelineProjectMetaRow}>
            <span className={styles.period}>{item.period}</span>
            {item.isInDevelopment ? (
              <span className={styles.timelineProjectStatus}>
                {t('journey.projectCard.inDevelopment')}
              </span>
            ) : null}
          </div>
        ) : (
          <span className={styles.period}>{item.period}</span>
        )}
        <h4>{item.title}</h4>
        <p className={styles.subtitle}>{item.subtitle}</p>
        <p className={styles.body}>{item.body}</p>
        <ul className={styles.highlights}>
          {item.highlights.map((highlight) => (
            <li key={`${item.id}-${highlight}`}>{highlight}</li>
          ))}
        </ul>
      </div>
    );
  };

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
          {timelineRows.map((row, index) => {
            const isActive = activeIndexes[index];

            return (
              <article
                key={row.id}
                className={`${styles.timelineRow} ${isActive ? styles.timelineRowActive : ''}`}
              >
                <div className={styles.rowSide}>
                  {row.left ? (
                    renderTimelineContent(row.left)
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
                  {row.right ? (
                    renderTimelineContent(row.right)
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
              <div className={styles.projectActions}>
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

                {project.landingPage ? (
                  <a
                    href={project.landingPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {t('common.landingpage')}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journey;
