import styled from 'styled-components';
import { Link as Anchor } from 'react-router-dom';
import { darken } from 'polished';

import agroIcon from './assets/agropecuaria.svg';
import energiaIcon from './assets/energia.svg';
import mutIcon from './assets/mut.svg';
import residuosIcon from './assets/residuos.svg';

const handleCardColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return 'background: #ed9742;';
		case 'Energia elétrica':
		case 'Energia':
			return 'background: #d94b2b;';
		case 'Transportes':
			return 'background: #d94d6b;';
		case 'Mudança de Uso da Terra e Florestas':
		case 'Mudanca de Uso da Terra e Florestas':
		case 'MUT':
			return 'background: #7cad41;';
		case 'Resíduos':
		case 'Residuos':
			return 'background: #6bb7bf;';
		default:
			return 'background: grey;';
	}
};
const handleBorderColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return `border-color: ${darken(0.2, '#ed9742')} transparent;`;
		case 'Energia elétrica':
		case 'Energia':
			return `border-color: ${darken(0.2, '#d94b2b')} transparent;`;
		case 'Transportes':
			return `border-color: ${darken(0.2, '#d94d6b')} transparent;`;
		case 'MUT':
		case 'Mudança de Uso da Terra e Florestas':
		case 'Mudanca de Uso da Terra e Florestas':
			return `border-color: ${darken(0.2, '#7cad41')} transparent;`;
		case 'Resíduos':
		case 'Residuos':
			return `border-color: ${darken(0.2, '#6bb7bf')} transparent;`;
		default:
			return `border-color: ${darken(0.2, '#ed9742')} transparent;`;
	}
};

const handleSectorIcon = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
			return `background-image: url(${agroIcon});`;
		case 'Energia elétrica':
			return `background-image: url(${energiaIcon});`;
		case 'Energia':
			return `background-image: url(${energiaIcon});`;
		case 'MUT':
			return `background-image: url(${mutIcon});`;
		case 'Mudança de Uso da Terra e Florestas':
			return `background-image: url(${mutIcon});`;
		case 'Resíduos':
			return `background-image: url(${residuosIcon});`;
		default:
			return `background-image: url(${agroIcon});`;
	}
};

export const Filter = styled.div`
	background: #eaeaea;
	margin: 0;
	display: flex;
	flex-direction: column;
	padding: 32px 140px;
`;
export const Background = styled.div`
	background: #eeeeee;
	min-height: 100vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	padding: 32px 140px 96px 140px;
`;
export const Solution = styled.div`
	background: white;
	margin: 22px 0;
	display: flex;
	flex-direction: row;
	padding: 36px;
`;
export const SolutionTagWrapper = styled.div`
	position: absolute;
`;
export const SolutionTag = styled.div`
	${({ sectorTitle }) => handleCardColor(sectorTitle)}
	margin-right: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
	padding: 32px;
	width: 200px;
	height: 200px;
	flex-grow: 0;
	flex-shrink: 0;
	position: relative;
	top: -54px;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: -18px;
		border-width: 0 0 18px 18px;
		border-style: solid;
		${({ sectorTitle }) => handleBorderColor(sectorTitle)}
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: -18px;
		border-width: 0px 18px 18px 0px;
		border-style: solid;
		${({ sectorTitle }) => handleBorderColor(sectorTitle)}
	}
`;

export const SolutionIcon = styled.div`
	${({ sectorTitle }) => handleSectorIcon(sectorTitle)}
	display: flex;
	height: 96px;
	width: 132px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	filter: grayscale(100%) brightness(200%);
`;

export const SectorTitle = styled.div`
	margin-top: 12px;
	color: white;
	text-transform: uppercase;
	color: white;
	font-size: 24px;
	line-height: 24px;
	font-weight: 400;
`;

export const SolutionInfoWrapper = styled.div`
	margin-left: 200px;
	display: flex;
	flex-direction: row;
`;
export const SolutionNumber = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 18px;

	font-size: 28px;
	font-weight: 500;
	color: #5f6060;
`;
export const SolutionInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
`;
export const SolutionTitle = styled.div`
	color: #5f6060;
	/* color: #8e8d8b; */
	font-size: 26px;
	line-height: 26px;
	font-weight: 300;
`;
export const SolutionMetaInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 12px 0;
`;
export const SolutionMetaInfo = styled.div`
	display: flex;
	flex-direction: column;
	background: #d9d8d8;
	border-radius: 20px;
	padding: 10px 28px;
	margin-top: 6px;
	margin-right: 18px;
`;

export const SolutionMetaInfoLabel = styled.div`
	font-size: 12px;
	line-height: 10px;
	color: #696869;
`;
export const SolutionMetaInfoValue = styled.div`
	font-size: 22px;
	line-height: 22px;
	color: #696869;
`;

export const Link = styled(Anchor)`
	color: #f28d49;
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: #bf560f;
	}
`;

export const Footer = styled.div`
	background: #747474;
	height: 62px;
`;
