import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	SectorTitle,
	SectorDescription,
	SolutionCardWrapper,
} from './styles';
import SolutionCard from '../SolutionCard';

export default function Sector({ sectorInfo }) {
	return (
		<Section>
			<SectorTitle>{sectorInfo.title}</SectorTitle>
			<SectorDescription>{sectorInfo.description}</SectorDescription>
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
