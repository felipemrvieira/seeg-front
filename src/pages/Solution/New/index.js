import React from 'react';
import Container from 'react-bootstrap/Container';
import { Background } from './styles';

import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';

import Header from '../../../components/Header';

function Solution() {
	return (
		<Background>
			<Header />
			<Container>
				<PageHeader>Cadastrar Soluções</PageHeader>
				<Card>asd</Card>
			</Container>
		</Background>
	);
}

export default Solution;
