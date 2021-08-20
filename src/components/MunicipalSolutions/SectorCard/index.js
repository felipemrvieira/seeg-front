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
import {
	solutionNameHelper,
	solutionSubNameHelper,
	solutionsCounterHelper,
} from '../../../helpers';

export default function SectorCard({ sector }) {
	return (
		<Card sectorTitle={sector.name}>
			<SectorIcon sectorTitle={sector.name} />
			<SectorTitle>{solutionNameHelper(sector.name)}</SectorTitle>
			<SectorSubTitle>{solutionSubNameHelper(sector.name)}</SectorSubTitle>
			<SectorSolutions>
				<SolutionsCount>
					{solutionsCounterHelper(sector.solutions)}
				</SolutionsCount>
				<SolutionsLabel>Soluções</SolutionsLabel>
			</SectorSolutions>
		</Card>
	);
}

SectorCard.propTypes = {
	sector: PropTypes.shape({
		name: PropTypes.string,
		solutions: PropTypes.node,
	}),
};

SectorCard.defaultProps = {
	sector: {
		name: 'nome da solucao',
		solutions: [{ title: 'titulo' }],
	},
};
