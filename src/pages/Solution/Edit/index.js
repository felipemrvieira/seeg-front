import React from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { Background } from './styles';
import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';
import Form from '../../../components/Form';

import Header from '../../../components/Header';

function Solution() {
	const { id } = useParams();

	return (
		<Background>
			<Header />
			<Container>
				<PageHeader>Editar Solução {id}</PageHeader>
				<Card>
					<Form />
				</Card>
			</Container>
		</Background>
	);
}

export default Solution;
