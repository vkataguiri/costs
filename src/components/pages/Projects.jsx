import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

import styles from './Projects.module.css';

function Projects() {
	const [projects, setProjects] = useState([]);
	const [removeLoading, setRemoveloading] = useState(false);
	const [projectMessage, setProjectMessage] = useState('');

	const location = useLocation();
	let message = '';
	if (location.state) {
		message = location.state.message;
	}

	useEffect(() => {
		// timer to simulate time between request and answer from the server
		setTimeout(() => {
			fetch('http://localhost:5000/projects', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					setProjects(data);
					setRemoveloading(true);
				})
				.catch((err) => console.log(err));
		}, 300);
	}, []);

	function removeProject(id) {
		fetch(`http://localhost:5000/projects/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.then(() => {
				setProjects(projects.filter((project) => project.id !== id));
				setProjectMessage('Projeto removido com sucesso!');
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className={styles.projectContainer}>
			<div className={styles.titleContainer}>
				<h1>Meus Projetos</h1>
				<LinkButton text="Novo projeto" to="/newproject" />
			</div>
			{message && <Message msg={message} type="success" />}
			{projectMessage && <Message msg={projectMessage} type="success" />}
			<Container customClass="start">
				{projects.length > 0 &&
					projects.map((project) => (
						<ProjectCard
							name={project.name}
							id={project.id}
							budget={project.budget}
							category={project.category.name}
							key={project.id}
							handleRemove={removeProject}
						/>
					))}
				{!removeLoading && <Loading />}
				{removeLoading && projects.length === 0 && <p>Não há projetos cadastrados.</p>}
			</Container>
		</div>
	);
}

export default Projects;
