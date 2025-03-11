const Projects = () => {
    return (
        <div
            className={`container mx-4 my-4 p-4 bg-light rounded shadow`}
            style={{ 
                maxWidth: "800px",
            }}>
            <div className="mb-3 pb-2 border-bottom">
                <h3 className="m-0 text-dark" style={{ fontSize: "24px" }}>
                    Cost <span style={{ fontSize: "18px" }}>Project Manager</span>
                    <a
                        className="text-reset text-decoration-none"
                        href="https://github.com/LucasBelhassof/Cost"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "18px" }}>//Code
                    </a>
                </h3>
                <div className="d-flex flex-wrap gap-2">
                    <div className="mt-1 border border-gray-300 rounded-pill px-2 small" style={{ fontSize: "12px" }}>ReactJS</div>
                    <div className="mt-1 border border-gray-300 rounded-pill px-2 small" style={{ fontSize: "12px" }}>Bootstrap</div>
                    <div className="mt-1 border border-gray-300 rounded-pill px-2 small" style={{ fontSize: "12px" }}>JavaScript</div>
                </div>
                <h5 className="mt-1 mb-2 text-secondary" style={{ fontSize: "16px" }}>
                    1 March 2025
                </h5>
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
                <li className="mb-2">Site focused on managing project cost.</li>
                <li className="mb-2">With backend implemented.</li>
            </ul>
            <div className="mb-3 pb-2 border-bottom">
                <h3 className="m-0 text-dark" style={{ fontSize: "24px" }}>
                    RealTrends<span style={{ fontSize: "18px" }}>(Clone)</span>
                    <a
                        className="text-reset text-decoration-none"
                        href="https://github.com/LucasBelhassof/real-trends-clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "18px" }}>//Code</a>
                </h3>
                <div className="d-flex flex-wrap gap-2">
                    <div className="mt-1 border border-gray-300 rounded-pill px-2 small" style={{ fontSize: "12px" }}>Dart</div>
                    <div className="mt-1 border border-gray-300 rounded-pill px-2 small" style={{ fontSize: "12px" }}>Flutter</div>
                </div>
                <h4 className="mt-1 mb-2 text-secondary" style={{ fontSize: "16px" }}>
                    25 September 2023
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
                    Very famous application among those who work with the MercadoLivre platform.
                </li>
                <li className="mb-2">
                    Focused on managing multiple market accounts, enabling vizuolizing and answering questions in ads and all after-sales messages.
                </li>
                <li className="mb-2">
                    The project aims to replicate the main features and design of the site.
                </li>
            </ul>
        </div>
    )
}

export default Projects