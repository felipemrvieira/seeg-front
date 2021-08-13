import React, { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { Background } from './styles';
import Card from '../../../../components/Card';
import PageHeader from '../../../../components/PageHeader';
import Form from '../../../../components/Form';
import api from '../../../../services/api';

import Nav from '../../../../components/Nav';

function Solution() {
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
			<Nav />
			<Container>
				<PageHeader>Editar Solução {id}</PageHeader>
				<Card>
					<Form id={id} solution={data} />
				</Card>
			</Container>
		</Background>
	);
}

export default Solution;
