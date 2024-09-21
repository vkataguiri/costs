import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.socialList}>
				<li>
					<a href="https://github.com/vkataguiri" target="blank">
						<FaFacebook />
					</a>
				</li>
				<li>
					<a href="https://github.com/vkataguiri" target="blank">
						<FaInstagram />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/vin%C3%ADcius-k-p-e-silva-51077a268/" target="blank">
						<FaLinkedin />
					</a>
				</li>
			</ul>
			<p className={styles.copyRight}>
				<span>Costs</span> - Vinícius K. Perrot e Silva &copy; 2024
			</p>
		</footer>
	);
}

export default Footer;
