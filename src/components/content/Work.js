const Work = () => {
  return (
    <div
      className="container my-4 p-4 bg-light rounded shadow"
      style={{ maxWidth: "800px",}}>
      <div className="mb-3 pb-2 border-bottom">
        <h3 className="m-0 text-dark" style={{ fontSize: "24px" }}>
          Vipnote
        </h3>
        <h4 className="mt-1 mb-2 text-secondary" style={{ fontSize: "16px" }}>
          April 2022 - March 2025 (present)
        </h4>
      </div>
      <ul
        className="mb-3"
        style={{
          listStyleType: "disc",
          paddingLeft: "20px",
          color: "#555",
          margin: "0 0 20px",
        }}
      >
        <li className="mb-2">
          Administrative Manager / Page Manager of the online store.
        </li>
        <li className="mb-2">
          Troubleshooting in pre and after sales, managing ads and problem solving with platforms.
        </li>
        <li className="mb-2">
          Results monitoring and data analyst in marketing campaigns.
        </li>
      </ul>
      <div className="mb-3 pb-2 border-bottom">
        <h3 className="m-0 text-dark" style={{ fontSize: "24px" }}>
          Crys Leão Bolos e Doces
        </h3>
        <h4 className="mt-1 mb-2 text-secondary" style={{ fontSize: "16px" }}>
          February 2020 - February 2021
        </h4>
      </div>
      <ul
        className="mb-3"
        style={{
          listStyleType: "disc",
          paddingLeft: "20px",
          color: "#555",
          margin: "0 0 20px",
        }}
      >
        <li className="mb-2">Administrative Manager.</li>
        <li className="mb-2">
          Manage, organize and control administrative activities.
        </li>
      </ul>
    </div>
  );
};

export default Work;
