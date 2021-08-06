import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	SectorWrapper,
	SectorIcon,
	SectorInfo,
	SectorTitle,
	SectorDescription,
	SolutionCardWrapper,
} from './styles';
import SolutionCard from '../SolutionCard';

export default function Sector({ sectorInfo, isOdd }) {
	return (
		<Section sectorTitle={sectorInfo.title} isOdd={isOdd}>
			<SectorInfo>
				<SectorWrapper>
					<SectorIcon sectorTitle={sectorInfo.title} />
					<SectorTitle>{sectorInfo.title}</SectorTitle>
				</SectorWrapper>
				<SectorDescription>{sectorInfo.description}</SectorDescription>
			</SectorInfo>
			<SolutionCardWrapper>
				{sectorInfo.solutions.map((solution) => (
					<SolutionCard sectorTitle={sectorInfo.title} solution={solution} />
				))}
			</SolutionCardWrapper>
		</Section>
	);
}

Sector.propTypes = {
	sectorInfo: PropTypes.node.isRequired,
	isOdd: PropTypes.node.isRequired,
};
