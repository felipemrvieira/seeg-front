import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardInfo, CardFooter } from './styles';

export default function SolutionCard({ solution }) {
	return (
		<Card>
			<CardHeader>{solution.number}</CardHeader>
			<CardInfo>{solution.description}</CardInfo>
			<CardFooter>{solution.category}</CardFooter>
		</Card>
	);
}

SolutionCard.propTypes = {
	solution: PropTypes.node.isRequired,
};
