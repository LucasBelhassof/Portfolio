import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Linkicon = () => {
  const isExperienceRoute = useLocation().pathname === '/experience';
  const iconSize = isExperienceRoute ? '20px' : '30px';

  return (
    <div>
      <ul className="d-flex list-unstyled" style={{ fontSize: iconSize }}>
        <li className="px-2">
          <a
            href="https://www.instagram.com/Lucas_Belhassof"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}
          >
            <FaInstagram />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://github.com/LucasBelhassof?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}
          >
            <FaGithub />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://www.linkedin.com/in/lucas-belhassof-leao"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Linkicon;
