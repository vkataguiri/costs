import styles from './Company.module.css';

function Company() {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.aboutUsText}>
				<h1>Sobre nós</h1>
				<p>
					Na Costs, acreditamos que a organização eficiente de projetos é a chave para o sucesso. Somos uma empresa
					focada em fornecer as melhores soluções para a gestão de projetos de qualquer tamanho e setor. Nossa missão é
					ajudar nossos clientes a atingir suas metas, oferecendo ferramentas práticas e intuitivas para acompanhar,
					planejar e executar suas ideias com precisão.
				</p>
			</div>
			<img src="src\img\company-img.png" alt="Ilustração" />
		</section>
	);
}
export default Company;
