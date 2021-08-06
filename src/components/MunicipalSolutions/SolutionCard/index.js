import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardInfo, CardFooter } from './styles';

export default function SolutionCard({ solution, sectorTitle }) {
	return (
		<Card sectorTitle={sectorTitle}>
			<CardHeader>{solution.number}</CardHeader>
			<CardInfo>{solution.description}</CardInfo>
			<CardFooter sectorTitle={sectorTitle}>{solution.category}</CardFooter>
		</Card>
	);
}

SolutionCard.propTypes = {
	solution: PropTypes.node.isRequired,
	sectorTitle: PropTypes.node.isRequired,
};
