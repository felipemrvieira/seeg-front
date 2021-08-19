import styled from 'styled-components';
import agroIcon from './assets/agro.png';
import energiaIcon from './assets/energia.png';
import mutIcon from './assets/mut.png';
import residuosIcon from './assets/residuos.png';

const handleSectorIcon = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
			return `background-image: url(${agroIcon});`;
		case 'Energia':
			return `background-image: url(${energiaIcon});`;
		case 'MUT':
			return `background-image: url(${mutIcon});`;
		case 'Resíduos':
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
`;

export const SectorWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const SectorIcon = styled.div`
	${({ sectorTitle }) => handleSectorIcon(sectorTitle)}
	display: flex;
	height: 80px;
	width: 109px;
	margin-right: 24px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const SectorTitle = styled.h2`
	color: #8e8d8b;
	font-size: 45px;
	font-weight: 400;
`;
export const SectorDescription = styled.p`
	color: #8e8d8b;
	font-size: 26px;
	line-height: 36px;
	font-weight: 300;
`;

export const SolutionCardWrapper = styled.div`
	margin: 0;
	display: flex;
	flex-direction: row;
	overflow-x: scroll;
`;
