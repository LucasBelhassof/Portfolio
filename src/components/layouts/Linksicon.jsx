import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Linkicon = () => {
  const { t } = useTranslation();
  const pathname = useLocation().pathname;
  const isCompactRoute = pathname === '/experience' || pathname === '/journey';
  const iconSize = isCompactRoute ? '20px' : '30px';

  return (
    <div>
      <ul className="d-flex list-unstyled" style={{ fontSize: iconSize }}>
        <li className="px-2">
          <a
            href="https://www.instagram.com/Lucas_Belhassof"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}
            aria-label={t('social.instagram')}
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
            aria-label={t('social.github')}
          >
            <FaGithub />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://www.linkedin.com/in/lucasbelhassof/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}
            aria-label={t('social.linkedin')}
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Linkicon;
