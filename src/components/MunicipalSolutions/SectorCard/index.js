import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	SectorTitle,
	SectorSolutions,
	SectorIcon,
	SolutionsCount,
	SolutionsLabel,
} from './styles';

export default function SectorCard({ solution, sectorTitle }) {
	return (
		<Card sectorTitle={sectorTitle}>
			<SectorIcon sectorTitle={sectorTitle} />
			<SectorTitle>{solution.title}</SectorTitle>
			<SectorSolutions>
				<SolutionsCount>{solution.solutionsCount}</SolutionsCount>
				<SolutionsLabel>Soluções</SolutionsLabel>
			</SectorSolutions>
		</Card>
	);
}

SectorCard.propTypes = {
	solution: PropTypes.node.isRequired,
	sectorTitle: PropTypes.node.isRequired,
};
