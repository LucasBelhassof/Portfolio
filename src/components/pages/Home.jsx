import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import foto1 from '../../img/Foto1.jpeg';
import foto2 from '../../img/unicesumar_logo.png';
import { getHomeFeaturedProjects } from '../../data/projectData';
import Linkicon from '../layouts/Linksicon';
import styles from './Home.module.css';

const Home = () => {
  const { t } = useTranslation();
  const homeFeaturedProjects = getHomeFeaturedProjects(t);
  const courses = t('home.courses', { returnObjects: true });

  return (
    <div>
      <div>
        <section className={styles.section1}>
          <img
            className={styles.foto1}
            src={foto1}
            alt={t('home.profilePhotoAlt')}
          />
          <div className="d-grid m-2">
            <Linkicon />
            <div
              className="d-flex"
              style={{
                alignItems: 'center',
              }}
            >
              <img
                className={styles.foto2}
                src={foto2}
                alt={t('home.educationLogoAlt')}
              />
              <p className='mb-0'>{t('home.studentStatus')}</p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className={`d-grid gap-3 ${styles.section2}`}>
          {homeFeaturedProjects.map((project) => (
            <div
              key={project.name}
              className={`container my-2 p-4 bg-light rounded shadow ${styles.projectCard}`}
            >
              <div className={styles.projectCardBody}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectTitleGroup}>
                    <Link className={styles.projectTitleLink} to="/experience">
                      <h3 className={`m-0 text-dark ${styles.projectTitle}`}>
                        {project.name}
                      </h3>
                    </Link>

                    {project.landingPage ? (
                      <a
                        className={styles.projectActionLink}
                        href={project.landingPage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('common.landingpage')}
                      </a>
                    ) : null}
                  </div>

                  <span className={styles.projectBadge}>{project.label}</span>
                </div>

                <Link className={styles.projectLink} to="/experience">
                  <p className={`mb-0 text-dark ${styles.projectDescription}`}>
                    {project.description}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </section>
        <section>
          <div>
            <h4
              className="mb-2 m-2 text-dark"
              style={{
                fontSize: '24px',
              }}
            >
              {t('home.coursesTitle')}
            </h4>
            <ul
              className="mb-3"
              style={{
                listStyleType: 'disc',
                color: 'var(--muted)',
                margin: '0 0 20px',
              }}
            >
              {courses.map((course) => (
                <li key={`${course.title}-${course.provider}`} className="mb-2">
                  {course.title}{' '}
                  <span className="border border-gray-300 rounded-pill px-2 small">
                    {course.provider}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
