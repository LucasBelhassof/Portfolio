import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();
  const workHistory = t('experience.workHistory', { returnObjects: true });

  return (
    <div
      className="container my-4 p-4 bg-light rounded shadow"
      style={{ maxWidth: '800px' }}
    >
      {workHistory.map((job) => (
        <div key={`${job.company}-${job.period}`}>
          <div className="mb-3 pb-2 border-bottom">
            <h3 className="m-0 text-dark" style={{ fontSize: '24px' }}>
              {job.company}
            </h3>
            <h4
              className="mt-1 mb-2 text-secondary"
              style={{ fontSize: '16px' }}
            >
              {job.period}
            </h4>
            <p
              className="m-0"
              style={{
                color: 'var(--text)',
                fontWeight: 600,
              }}
            >
              {job.role}
            </p>
          </div>
          <ul
            className="mb-3"
            style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              color: 'var(--muted)',
              margin: '0 0 20px',
            }}
          >
            {job.highlights.map((highlight) => (
              <li key={`${job.company}-${highlight}`} className="mb-2">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Work;
