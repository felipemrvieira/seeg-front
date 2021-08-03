import React from 'react';
import Container from 'react-bootstrap/Container';
import { Background, ButtonWrapper, Label, Input } from './styles';

import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';

import Header from '../../../components/Header';

function Solution() {
	return (
		<Background>
			<Header />
			<Container>
				<PageHeader>Cadastrar Soluções</PageHeader>
				<Card>
					<p>Selecione um arquivo no formato xlsx</p>
					<ButtonWrapper>
						<Label>Selecione o arquivo</Label>
						<Input
							type="file"
							name="upload"
							placeholder="Selecione o arquivo"
						/>
					</ButtonWrapper>
				</Card>
			</Container>
		</Background>
	);
}

export default Solution;
