import styles from './Select.module.css';

function Select({ text, options, name, handleOnChange, value }) {
	return (
		<div className={styles.formControl}>
			<label htmlFor={name}>{text}</label>
			<select name={name} id={name} onChange={handleOnChange} value={value || ''}>
				<option>Selecione uma opção</option>
				{options.map((option) => (
					<option value={option.id} key={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
