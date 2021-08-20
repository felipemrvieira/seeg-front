import styled from 'styled-components';
import { Link as Anchor } from 'react-router-dom';

const handleCardColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return 'background: #ed9742;';
		case 'Energia':
		case 'Energia elétrica':
			return 'background: #d94b2b;';
		case 'Transportes':
			return 'background: #d94d6b;';
		case 'MUT':
		case 'Mudança de Uso da Terra e Florestas':
		case 'Mudanca de Uso da Terra e Florestas':
			return 'background: #7cad41;';
		case 'Resíduos':
		case 'Residuos':
			return 'background: #6bb7bf;';
		default:
			return 'background: grey;';
	}
};
const handleCardFootColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return 'background: #cd7217;';
		case 'Energia':
		case 'Energia elétrica':
			return 'background: #c32f0e;';
		case 'MUT':
		case 'Mudança de Uso da Terra e Florestas':
		case 'Mudanca de Uso da Terra e Florestas':
			return 'background: #518117;';
		case 'Resíduos':
		case 'Residuos':
			return 'background: #277d86;';
		case 'Transportes':
			return 'background: #b73d57;';
		default:
			return 'background: grey;';
	}
};

export const Card = styled(Anchor)`
	${({ sectorTitle }) => handleCardColor(sectorTitle)}
	margin: 20px;
	width: 305px;
	display: flex;
	flex-direction: column;

	flex-basis: 305px;
	flex-grow: 0;
	flex-shrink: 0;
`;
export const CardHeader = styled.div`
	padding: 16px 16px 6px 16px;
	color: white;
	font-size: 26px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
`;
export const CardInfo = styled.div`
	padding: 5px 16px 16px 16px;
	color: white;
	font-size: 20px;
	line-height: 32px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
`;
export const CardFooter = styled.div`
	padding: 12px 20px;
	${({ sectorTitle }) => handleCardFootColor(sectorTitle)}
	display: flex;
	flex-wrap: wrap;
	margin-top: auto;
	/* height: 65px; */
`;

export const SubsectorPill = styled.div`
	/* padding: 12px 32px; */
	/* ${({ sectorTitle }) => handleCardFootColor(sectorTitle)} */
	color: white;
	font-size: 15px;
	font-weight: normal;
	background: rgba(0, 0, 0, 0.2);
	margin: 0 4px 8px 0;
	padding: 6px 8px;
	border-radius: 20px;
	text-align: center;

	width: 48%;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;

	&:hover {
		width: inherit;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;
