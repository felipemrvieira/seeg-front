import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardInfo, CardFooter } from './styles';

export default function SolutionCard({ solution, sectorTitle }) {
	return (
		<Card to={`/solutions/${solution.id}`} sectorTitle={sectorTitle}>
			<CardHeader>{solution.number}</CardHeader>
			<CardInfo
				dangerouslySetInnerHTML={{
					__html: solution.title,
				}}
			/>
			<CardFooter sectorTitle={sectorTitle}>{solution.subsectors}</CardFooter>
		</Card>
	);
}

SolutionCard.propTypes = {
	solution: PropTypes.node.isRequired,
	sectorTitle: PropTypes.node.isRequired,
};
