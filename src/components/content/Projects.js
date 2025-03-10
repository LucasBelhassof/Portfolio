const Projects = () => {
    return (
        <div
            className="container my-4 p-4 bg-light rounded shadow"
            style={{ maxWidth: "800px" }}
        >
            <div className="mb-3 pb-2 border-bottom">
                <h3 className="m-0 text-dark" style={{ fontSize: "24px" }}>
                    Cost <span style={{ fontSize: "18px" }}>Gerenciador de Projetos</span>
                    <a
                        className="text-reset text-decoration-none"
                        href="https://github.com/LucasBelhassof/Cost"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "18px" }}>//Code</a>
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
                <li className="mb-2">Site focado em gerenciar custo de projetos.</li>
                <li className="mb-2">Com backend implementado.</li>
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
                    Aplicativo muito famoso entre quem trabalha com a plataforma MercadoLivre.
                </li>
                <li className="mb-2">
                    Focado em gerenciar multiplas contas do MercadoLivre, possibilitando vizualizar e responder perguntas em anúncios e todas as mensagens nos pós-venda.
                </li>
                <li className="mb-2">
                    O projeto tem como objetivo replicar as principais funcionalidades e o design do site.
                </li>
            </ul>
        </div>
    )
}

export default Projects