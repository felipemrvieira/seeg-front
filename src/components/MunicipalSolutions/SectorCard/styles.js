import styled from 'styled-components';
import agroIcon from './assets/agro.png';
import energiaIcon from './assets/energia.png';
import mutIcon from './assets/mut.png';
import residuosIcon from './assets/residuos.png';

const handleCardColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return 'background: #ed9742;';
		case 'Transportes':
			return 'background: #d94d6b;';
		case 'Energia':
		case 'Energia elétrica':
			return 'background: #d94b2b;';
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

const handleSectorIcon = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return `background-image: url(${agroIcon});`;
		case 'Energia elétrica':
		case 'Energia':
			return `background-image: url(${energiaIcon});`;
		case 'MUT':
		case 'Mudança de Uso da Terra e Florestas':
		case 'Mudanca de Uso da Terra e Florestas':
			return `background-image: url(${mutIcon});`;
		case 'Resíduos':
		case 'Residuos':
			return `background-image: url(${residuosIcon});`;
		default:
			return `background-image: url(${agroIcon});`;
	}
};

export const Card = styled.div`
	${({ sectorTitle }) => handleCardColor(sectorTitle)}
	position: relative;
	top: 0;
	transition: top ease 0.3s;
	&:hover {
		top: -10px;
		cursor: pointer;
	}
	width: 230px;
	/* width: 23%; */
	padding: 30px;
	margin-bottom: 12px;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
`;

export const SectorIcon = styled.div`
	${({ sectorTitle }) => handleSectorIcon(sectorTitle)}
	display: flex;
	height: 80px;
	width: 109px;
	background-position: left;
	background-repeat: no-repeat;
	background-size: contain;
	flex-shrink: 0;
`;

export const SectorTitle = styled.div`
	color: white;
	font-size: 24px;
	font-weight: 600;
	display: flex;
	margin: 2px 0 0 0;
	flex-direction: column;
`;
export const SectorSubTitle = styled.div`
	color: white;
	font-size: 11px;
	margin: 0 0 12px 0;
	display: flex;
	flex-direction: column;
`;

export const SectorSolutions = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: auto;
`;
export const SolutionsCount = styled.div`
	color: white;
	text-align: center;
	font-size: 36px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
	border: 4px solid white;
	line-height: 60px;
	height: 70px;
	width: 70px;
	border-radius: 50%;
	margin-right: 10px;
`;
export const SolutionsLabel = styled.div`
	color: white;
	font-size: 22px;
	font-weight: 300;
	display: flex;
	flex-direction: column;
`;
