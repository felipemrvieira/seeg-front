import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	SectorTitle,
	SectorSubTitle,
	SectorSolutions,
	SectorIcon,
	SolutionsCount,
	SolutionsLabel,
} from './styles';
import { solutionNameHelper, solutionSubNameHelper } from '../../../helpers';

export default function SectorCard({ sector }) {
	console.log(sector.solutions.length);
	return (
		<Card sectorTitle={sector.name}>
			<SectorIcon sectorTitle={sector.name} />
			<SectorTitle>{solutionNameHelper(sector.name)}</SectorTitle>
			<SectorSubTitle>{solutionSubNameHelper(sector.name)}</SectorSubTitle>
			<SectorSolutions>
				<SolutionsCount>{sector.solutions.length}</SolutionsCount>
				<SolutionsLabel>Soluções</SolutionsLabel>
			</SectorSolutions>
		</Card>
	);
}

SectorCard.propTypes = {
	sector: PropTypes.node.isRequired,
};
