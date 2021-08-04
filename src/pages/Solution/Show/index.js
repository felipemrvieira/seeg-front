import React, { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { Background } from './styles';
import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';
import Form from '../../../components/Form';
import api from '../../../services/api';
import Header from '../../../components/Header';

function ShowSolution() {
	const { id } = useParams();
	const [solution, setSolution] = useState([]);
	async function loadSolution() {
		try {
			const response = await api.get(`/solutions/${id}`);
			setSolution(response.data);
		} catch (err) {
			// console.log(err);
		}
	}

	useEffect(() => {
		loadSolution();
	}, []);

	const data = useMemo(() => solution, [solution]);

	return (
		<Background>
			<Header />
			<Container>
				<PageHeader>Exibir Solução {id}</PageHeader>
				<Card>
					<Form disabled="true" id={id} solution={data} />
				</Card>
			</Container>
		</Background>
	);
}

export default ShowSolution;
