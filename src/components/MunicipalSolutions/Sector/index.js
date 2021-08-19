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

import { sectorDescriptionHelper } from '../../../helpers';

export default function Sector({ sectorInfo, isOdd }) {
	return (
		<Section sectorTitle={sectorInfo.name} isOdd={isOdd}>
			<ScrollReveal>
				<SectorInfo>
					<SectorWrapper>
						<SectorIcon sectorTitle={sectorInfo.name} />
						<SectorTitle>{sectorInfo.name}</SectorTitle>
					</SectorWrapper>
					<SectorDescription>
						{sectorDescriptionHelper(sectorInfo.name)}
					</SectorDescription>
				</SectorInfo>
			</ScrollReveal>
			<ScrollReveal>
				<SolutionCardWrapper sectorTitle={sectorInfo.name}>
					{sectorInfo.solutions.map((solution) => (
						<SolutionCard
							key={solution.number}
							sectorTitle={sectorInfo.name}
							solution={solution}
						/>
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
