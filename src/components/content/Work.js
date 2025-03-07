import React from "react";

const Work = () => {
  return (
    <div
      className="container my-4 p-4 bg-light rounded shadow"
      style={{ maxWidth: "800px" }}
    >
      {/* Primeiro item */}
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
          Gerente Administrativo / Gerente de página da loja on-line.
        </li>
        <li className="mb-2">
          Solução de problemas em pré e pós-venda, gerenciar anúncios e solução
          de problemas com as plataformas.
        </li>
        <li className="mb-2">
          Acompanhamento de resultados e analista de dados em campanhas de
          marketing das páginas
        </li>
      </ul>

      {/* Segundo item */}
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
        <li className="mb-2">Gerente Administrativo.</li>
        <li className="mb-2">
          Gerenciar, planejar, organizar e controlar as atividades
          administrativas.
        </li>
      </ul>
    </div>
  );
};

export default Work;
