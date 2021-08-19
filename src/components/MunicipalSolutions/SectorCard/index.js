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

export default function SectorCard({ sector }) {
	// console.log(sector);
	return (
		<Card sectorTitle={sector.title}>
			<SectorIcon sectorTitle={sector.title} />
			<SectorTitle>{sector.title}</SectorTitle>
			<SectorSolutions>
				<SolutionsCount>{sector.solutionsCount}</SolutionsCount>
				<SolutionsLabel>Soluções</SolutionsLabel>
			</SectorSolutions>
		</Card>
	);
}

SectorCard.propTypes = {
	sector: PropTypes.node.isRequired,
};
