import styled from 'styled-components';
import agroIcon from './assets/agropecuaria.svg';
import energiaIcon from './assets/energia.svg';
import mutIcon from './assets/mut.svg';
import residuosIcon from './assets/residuos.svg';

const handleColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
		case 'Agropecuaria':
			return 'background: #ed9742;';
		case 'Energia':
		case 'Energia elétrica':
			return 'background: #d94b2b;';
		case 'MUT':
		case 'Mudança de Uso da Terra e Florestas':
		case 'Mudanca de Uso da Terra e Florestas':
			return 'background: #7cad41;';
		case 'Transportes':
			return 'background: #d94d6b;';
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
		case 'Energia':
		case 'Energia elétrica':
		case 'Transportes':
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

export const Section = styled.div`
	background: ${(props) => (props.isOdd ? '#fff' : '#f9f8f4')};
	width: 100%;
	padding: 32px 0;
	display: flex;
	flex-direction: column;
`;

export const SectorInfo = styled.h2`
	padding: 0 200px;
	@media (max-width: 900px) {
		padding: 0 60px;
	}
`;

export const SectorWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const SectorIcon = styled.div`
	${({ sectorTitle }) => handleSectorIcon(sectorTitle)}
	display: flex;
	height: 96px;
	width: 132px;
	/* margin-right: 24px; */
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	flex-shrink: 0;
	filter: grayscale(100%) brightness(66%);

	@media (max-width: 900px) {
		height: 40px;
		width: 55px;
	}
`;

export const SectorTitle = styled.h2`
	color: #8e8d8b;
	font-size: 45px;
	font-weight: 400;
	@media (max-width: 900px) {
		font-size: 36px;
	}
`;
export const SectorDescription = styled.p`
	color: #8e8d8b;
	font-size: 22px;
	line-height: 34px;
	font-weight: 300;
`;

export const SolutionCardWrapper = styled.div`
	margin: 0;
	display: flex;
	flex-direction: row;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	&::-webkit-scrollbar-thumb {
		${({ sectorTitle }) => handleColor(sectorTitle)}

		border-radius: 25px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #b3afb3;
	}
	&::-webkit-scrollbar-track {
		background: #f0f0f0;
		border-radius: 0px;
		box-shadow: inset 0px 0px 0px 0px #f0f0f0;
	}
`;
