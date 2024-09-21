import styles from './Submit.module.css';

function Submit({ text, projectData }) {
	return (
		<div className={styles.formControl}>
			<button className={styles.btn}>{text}</button>
		</div>
	);
}

export default Submit;
