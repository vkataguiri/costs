import { useState, useEffect } from 'react';

import styles from './ProjectForm.module.css';

import Input from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';

function ProjectForm({ handleSubmit, submitText, projectData }) {
	const [categories, setCategories] = useState([]);
	const [project, setProject] = useState(projectData || {});

	useEffect(() => {
		fetch('http://localhost:5000/categories', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setCategories(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const submit = (e) => {
		e.preventDefault();
		// console.log(project);
		handleSubmit(project);
	};

	function handleChange(e) {
		setProject({ ...project, [e.target.name]: e.target.value });
	}

	function handleCategory(e) {
		setProject({
			...project,
			category: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		});
	}

	return (
		<form onSubmit={submit} className={styles.form}>
			<div>
				<Input
					type="text"
					placeholder="Insira o nome do projeto"
					name="name"
					text="Nome do projeto:"
					handleOnChange={handleChange}
					value={project.name ? project.name : ''}
				/>
			</div>
			<div>
				<Input
					type="number"
					placeholder="Insira o orçamento total"
					name="budget"
					text="Orçamento do projeto"
					handleOnChange={handleChange}
					value={project.budget ? project.budget : ''}
				/>
			</div>
			<div>
				<Select
					name="categoryId"
					text="Selecione a categoria"
					options={categories}
					handleOnChange={handleCategory}
					value={project.category ? project.category.id : ''}
				/>
			</div>
			<div>
				<Submit text={submitText} />
			</div>
		</form>
	);
}

export default ProjectForm;
