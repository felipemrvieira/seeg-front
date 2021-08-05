import React from 'react';
// import PropTypes from 'prop-types';
import { Card, CardHeader, CardInfo, CardFooter } from './styles';

export default function SolutionCard() {
	return (
		<Card>
			<CardHeader>17</CardHeader>
			<CardInfo>
				Criar habitações de interesse social em bairros centrais ou de
				urbanização consolidada.
			</CardInfo>
			<CardFooter>Transportes</CardFooter>
		</Card>
	);
}

// SolutionCard.propTypes = {
// 	children: PropTypes.node.isRequired,
// };
