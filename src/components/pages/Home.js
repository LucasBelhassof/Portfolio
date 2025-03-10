import styles from './Home.module.css';
import foto1 from '../../img/Foto1.jpg';
import foto2 from '../../img/unicesumar_logo.png';
import flutter from '../../img/projetoRT.png';
import costHome from '../../img/costHome.png';
import { Link } from 'react-router-dom';
import Linkicon from '../layouts/Linksicon';

const Home = () => {
    return (
        <div>
            <div className={styles.container}>
                <section className={styles.section1}>
                    <img className={styles.foto1} src={foto1} alt="Foto" />
                    <div className="d-grid m-2">
                            <Linkicon />
                        <div className="d-flex" style={{
                            alignItems: "center",
                        }}>
                            <img className={styles.foto2} src={foto2} alt="UNICESUMAR" />
                            <p>Currently, Software Engineering student @UNICESUMAR</p>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className={`d-grid gap-3 p-3 mt-2 mr-0 ${styles.section2}`}>
                    <div className={`border rounded p-3`}>
                        <Link className={`d-flex align-items-end ${styles.box}`} to="/experience">
                            <img src={flutter} alt="flutter" className="img-fluid rounded"
                                style={{
                                    maxWidth: "30%",
                                }} />
                            <div className="d-grid">
                                <h3 className="flex-grow-1 m-1 text-truncate text-dark">RealTrends <span
                                    className=
                                    "mr-2 border border-gray-300 rounded-pill px-2 small"
                                    style={{
                                        fontSize: "21px",
                                    }}
                                >
                                    Clone
                                </span>
                                </h3>
                                <ul className="mb-2 text-dark">
                                    The project aims to replicate the main features and design of the site. Features such as Question Page, your Interactive Navbar Message Tab, Configuration and +.
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <div className={`border rounded p-3`}>
                        <Link className={`d-flex align-items-end text-decoration-none ${styles.box}`} to="/experience">
                            <img src={costHome} alt="costHome" className="img-fluid rounded" style={{ maxWidth: "50%" }} />
                            <div className="d-grid">
                                <h3 className="flex-grow-1 m-1 text-truncate text-dark">Cost <span
                                    className=
                                    "mr-2 border border-gray-300 rounded-pill px-2 small"
                                    style={{
                                        fontSize: "21px",
                                    }}
                                >
                                    Project Manager
                                </span>
                                </h3>
                                <ul className="mb-2 text-dark">
                                    The project aims to create a project manager, which we can create a project, say its budget and what its category and add services that do not exceed the budget destined.
                                </ul>
                            </div>
                        </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h4 className="mb-2 m-2 text-dark" style={{
                            fontSize: "24px",
                        }}>
                            Complementary Courses
                        </h4>
                        <ul
                            className="mb-3"
                            style={{
                                listStyleType: "disc",
                                color: "#555",
                                margin: "0 0 20px",
                            }}>
                            <li className="mb-2">Inglês Avançado <span className="border border-gray-300 rounded-pill px-2 small">Ibeu</span></li>
                            <li className="mb-2">Introductory Course on Computer Science with Python <span className="border border-gray-300 rounded-pill px-2 small">Coursera</span></li>
                            <li className="mb-2">Course C# Complete <span className="border border-gray-300 rounded-pill px-2 small">Udemy</span></li>
                            <li className="mb-2">Course Flutter Complete <span className="border border-gray-300 rounded-pill px-2 small">Udemy</span></li>
                            <li className="mb-2">Data interpretation through descriptive statistics <span className="border border-gray-300 rounded-pill px-2 small">Unicesumar</span></li>
                            <li className="mb-2">Course JavaScript <span className="border border-gray-300 rounded-pill px-2 small">Alura</span></li>
                            <li className="mb-2">Course HTML e CSS <span className="border border-gray-300 rounded-pill px-2 small">Alura</span></li>
                            <li className="mb-2">Course Java <span className="border border-gray-300 rounded-pill px-2 small">Alura</span></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
