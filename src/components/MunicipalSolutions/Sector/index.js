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

export default function Sector({ sectorInfo }) {
	return (
		<Section>
			<SectorInfo>
				<SectorWrapper>
					<SectorIcon sectorTitle={sectorInfo.title} />
					<SectorTitle>{sectorInfo.title}</SectorTitle>
				</SectorWrapper>
				<SectorDescription>{sectorInfo.description}</SectorDescription>
			</SectorInfo>
			<SolutionCardWrapper>
				{sectorInfo.solutions.map((solution) => (
					<SolutionCard solution={solution} />
				))}
			</SolutionCardWrapper>
		</Section>
	);
}

Sector.propTypes = {
	sectorInfo: PropTypes.node.isRequired,
};
