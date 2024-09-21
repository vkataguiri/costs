import { IoMailSharp } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Contact.module.css';

function Contact() {
	return (
		<section className={styles.contact}>
			<div className={styles.contactText}>
				<h1>Contate-nos</h1>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/vin%C3%ADcius-k-p-e-silva-51077a268/" target="blank">
							<FaLinkedin />
							<p>LinkedIn - Vinícius K. Perrot e Silva</p>
						</a>
					</li>
					<li>
						<a href="https://github.com/vkataguiri" target="blank">
							<FaGithub />
							<p>Github - vkataguiri</p>
						</a>
					</li>
					<li>
						<a href="mailto: vinicius.perrot@gmail.com" target="blank">
							<IoMailSharp />
							<p>Email - vinicius.perrot@gmail.com</p>
						</a>
					</li>
				</ul>
			</div>
			<img src="src\img\contact-us.png" alt="Ilustração" />
		</section>
	);
}
export default Contact;
