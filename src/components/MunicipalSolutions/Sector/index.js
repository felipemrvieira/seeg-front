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
import ScrollReveal from '../ScrollReveal';

export default function Sector({ sectorInfo, isOdd }) {
	return (
		<Section sectorTitle={sectorInfo.title} isOdd={isOdd}>
			<ScrollReveal>
				<SectorInfo>
					<SectorWrapper>
						<SectorIcon sectorTitle={sectorInfo.title} />
						<SectorTitle>{sectorInfo.title}</SectorTitle>
					</SectorWrapper>
					<SectorDescription>{sectorInfo.description}</SectorDescription>
				</SectorInfo>
			</ScrollReveal>
			<ScrollReveal>
				<SolutionCardWrapper>
					{sectorInfo.solutions.map((solution) => (
						<SolutionCard sectorTitle={sectorInfo.title} solution={solution} />
					))}
				</SolutionCardWrapper>
			</ScrollReveal>
		</Section>
	);
}

Sector.propTypes = {
	sectorInfo: PropTypes.node.isRequired,
	isOdd: PropTypes.node.isRequired,
};
