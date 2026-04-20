const workHistory = [
  {
    company: 'Aprovei Hub',
    period: 'September 2025 - April 2026',
    role: 'Fullstack Developer',
    highlights: [
      'Worked on the development and maintenance of features for the Aprovei Checkout platform.',
      'Implemented frontend interfaces, backend integrations, data modeling and data manipulation flows.',
      'Acted on bug fixing, performance improvements and technical planning for new product features.',
      'Contributed to scalable solutions, code quality and alignment between technical delivery and product goals.',
    ],
  },
  {
    company: 'Imovel Guide (Grupo Atlasmaq do Brasil)',
    period: 'May 2025 - July 2025',
    role: 'Front-end Developer Intern',
    highlights: [
      'Worked with the software development team on application implementation and maintenance.',
      'Supported development tasks involving PHP, Java and JavaScript according to project needs.',
      'Helped identify and resolve issues in existing systems while contributing to continuous improvements.',
      'Provided technical support in the evolution of internal and business-oriented software solutions.',
    ],
  },
  {
    company: 'Five E-commercer',
    period: 'September 2023 - March 2026',
    role: 'Sales, Customer Service and Marketplace Page Manager',
    highlights: [
      'Handled customer support in both pre-sales and post-sales operations.',
      'Managed marketplace listings on Mercado Livre, Americanas and Shopee.',
      'Solved platform-related operational issues and supported the maintenance of product pages.',
    ],
  },
  {
    company: 'Vipnote',
    period: 'April 2022 - March 2026',
    role: 'Sales, Customer Service and Marketplace Page Manager',
    highlights: [
      'Handled customer support workflows in pre-sales and post-sales contexts.',
      'Managed marketplace listings and operations on Mercado Livre and Amazon Seller.',
      'Resolved operational and platform-related issues while keeping listings updated and functional.',
    ],
  },
];

const Work = () => {
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
