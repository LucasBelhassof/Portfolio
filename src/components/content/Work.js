import styles from './Work.module.css'

const Work = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h3>Vipnote</h3>
                <h4>April 2022 - March 2025 (present)</h4>
            </div>
            <ul className={styles.list}>
                <li>Gerente Administrativo / Gerente de página da loja on-line. </li>
                <li>Solução de problemas em pré e pós-venda, gerenciar anúncios e solução de problemas com as plataformas.</li>
                <li>Acompanhamento de resultados e analista de dados em campanhas de marketing das páginas</li>
            </ul>
            <div className={styles.item}>
                <h3>Crys Leão Bolos e Doces</h3>
                <h4>February 2020 - February 2021</h4>
            </div>
            <ul className={styles.list}>
                <li>Gerente Administrativo. </li>
                <li>Gerenciar, planejar, organizar e controlar as atividades administrativas.</li>
            </ul>
        </div>

    )
}

export default Work