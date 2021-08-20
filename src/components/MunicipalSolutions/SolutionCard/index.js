import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardHeader,
	CardInfo,
	CardFooter,
	SubsectorPill,
} from './styles';

export default function SolutionCard({ solution, sectorTitle }) {
	const subsectors =
		(solution.subsectors &&
			solution.subsectors.replace(/\r?\n/g, ';').split(';')) ||
		[];

	return (
		<Card to={`/solutions/${solution.id}`} sectorTitle={sectorTitle}>
			<CardHeader>{solution.number}</CardHeader>
			<CardInfo
				dangerouslySetInnerHTML={{
					__html: solution.title,
				}}
			/>
			<CardFooter sectorTitle={sectorTitle}>
				{subsectors.map((subsector) => (
					<SubsectorPill>{subsector}</SubsectorPill>
				))}
			</CardFooter>
		</Card>
	);
}

SolutionCard.propTypes = {
	solution: PropTypes.shape({
		title: PropTypes.string,
		number: PropTypes.string,
		subsectors: PropTypes.string,
		id: PropTypes.string,
	}),
	sectorTitle: PropTypes.string,
};

SolutionCard.defaultProps = {
	solution: {
		title: 'titulo da solucao',
		number: '#00',
		subsectors: 'subsetores',
		id: '0',
	},
	sectorTitle: 'titulo do setor',
};
