import { Link } from 'react-router-dom';
import foto1 from '../../img/Foto1.jpeg';
import foto2 from '../../img/unicesumar_logo.png';
import { homeFeaturedProjects } from '../../data/projectData';
import Linkicon from '../layouts/Linksicon';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div>
        <section className={styles.section1}>
          <img className={styles.foto1} src={foto1} alt="Foto" />
          <div className="d-grid m-2">
            <Linkicon />
            <div
              className="d-flex"
              style={{
                alignItems: 'center',
              }}
            >
              <img className={styles.foto2} src={foto2} alt="UNICESUMAR" />
              <p>Currently, Software Engineering student @UNICESUMAR</p>
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
              <Link className={styles.projectLink} to="/experience">
                <div className={styles.projectHeader}>
                  <h3 className={`m-0 text-dark ${styles.projectTitle}`}>
                    {project.name}
                  </h3>
                  <span className={styles.projectBadge}>{project.label}</span>
                </div>
                <p className={`mb-0 text-dark ${styles.projectDescription}`}>
                  {project.description}
                </p>
              </Link>
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
              Complementary Courses
            </h4>
            <ul
              className="mb-3"
              style={{
                listStyleType: 'disc',
                color: 'var(--muted)',
                margin: '0 0 20px',
              }}
            >
              <li className="mb-2">
                Ingles Avancado{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Ibeu
                </span>
              </li>
              <li className="mb-2">
                Google Cloud Plataform{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Google
                </span>
              </li>
              <li className="mb-2">
                Introductory Course on Computer Science with Python{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Coursera
                </span>
              </li>
              <li className="mb-2">
                Course C# Complete{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Udemy
                </span>
              </li>
              <li className="mb-2">
                Course Flutter Complete{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Udemy
                </span>
              </li>
              <li className="mb-2">
                Data interpretation through descriptive statistics{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Unicesumar
                </span>
              </li>
              <li className="mb-2">
                Course JavaScript{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Alura
                </span>
              </li>
              <li className="mb-2">
                Course HTML e CSS{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Alura
                </span>
              </li>
              <li className="mb-2">
                Course Java{' '}
                <span className="border border-gray-300 rounded-pill px-2 small">
                  Alura
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
