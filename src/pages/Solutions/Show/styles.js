import styled from 'styled-components';
// import { Link as Anchor } from 'react-router-dom';
import { darken } from 'polished';

import agroIcon from './assets/agro.png';
import energiaIcon from './assets/energia.png';
import mutIcon from './assets/mut.png';
import residuosIcon from './assets/residuos.png';

import atores from './assets/meta/atores.png';
import esfera from './assets/meta/esfera.png';
import financiamento from './assets/meta/financiamento.png';
import investimento from './assets/meta/investimento.png';

import alinhamento from './assets/meta/alinhamento.png';
import faixa from './assets/meta/faixa.png';
import impacto from './assets/meta/impacto.png';
import regioes from './assets/meta/regioes.png';
import setor from './assets/meta/setor.png';
import tempo from './assets/meta/tempo.png';

import comunicacao from './assets/category/comunicacao.png';
import educacao from './assets/category/educacao.png';
import engajamento from './assets/category/engajamento.png';
import infraestrutura from './assets/category/infraestrutura.png';
import monitoramento from './assets/category/monitoramento.png';
import planejamento from './assets/category/planejamento.png';
import regramento from './assets/category/regramento.png';

// const handleCardColor = (sectorTitle) => {
// 	switch (sectorTitle) {
// 		case 'Agropecuária':
// 			return 'background: #ed9742;';
// 		case 'Energia elétrica':
// 			return 'background: #d94b2b;';
// 		case 'Transporte':
// 			return 'background: #d94d6b;';
// 		case 'MUT':
// 			return 'background: #7cad41;';
// 		case 'Resíduos':
// 			return 'background: #6bb7bf;';
// 		default:
// 			return 'background: grey;';
// 	}
// };
const handleDarkenColor = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
			return `${darken(0.15, '#ed9742')}`;
		case 'Energia elétrica':
			return `${darken(0.15, '#d94b2b')}`;
		case 'Transporte':
			return `${darken(0.15, '#d94d6b')}`;
		case 'MUT':
			return `${darken(0.15, '#7cad41')}`;
		case 'Resíduos':
			return `${darken(0.15, '#6bb7bf')}`;
		default:
			return `${darken(0.15, '#ed9742')}`;
	}
};

const handleSectorIcon = (sectorTitle) => {
	switch (sectorTitle) {
		case 'Agropecuária':
			return `background-image: url(${agroIcon});`;
		case 'Energia elétrica':
			return `background-image: url(${energiaIcon});`;
		case 'MUT':
			return `background-image: url(${mutIcon});`;
		case 'Resíduos':
			return `background-image: url(${residuosIcon});`;
		default:
			return `background-image: url(${agroIcon});`;
	}
};

const handleMetaIcon = (sectorTitle) => {
	switch (sectorTitle) {
		case 'atores':
			return `background-image: url(${atores});`;
		case 'esfera':
			return `background-image: url(${esfera});`;
		case 'financiamento':
			return `background-image: url(${financiamento});`;
		case 'investimento':
			return `background-image: url(${investimento});`;
		case 'alinhamento':
			return `background-image: url(${alinhamento});`;
		case 'faixa':
			return `background-image: url(${faixa});`;
		case 'impacto':
			return `background-image: url(${impacto});`;
		case 'regioes':
			return `background-image: url(${regioes});`;
		case 'setor':
			return `background-image: url(${setor});`;
		case 'tempo':
			return `background-image: url(${tempo});`;
		case 'comunicacao':
			return `background-image: url(${comunicacao});`;
		case 'educacao':
			return `background-image: url(${educacao});`;
		case 'engajamento':
			return `background-image: url(${engajamento});`;
		case 'infraestrutura':
			return `background-image: url(${infraestrutura});`;
		case 'monitoramento':
			return `background-image: url(${monitoramento});`;
		case 'planejamento':
			return `background-image: url(${planejamento});`;
		case 'regramento':
			return `background-image: url(${regramento});`;
		default:
			return `background-image: url(${investimento});`;
	}
};

export const Header = styled.div`
	background: #ed9742;
	margin: 0;
	display: flex;
	flex-direction: column;
	padding: 60px 210px;
`;

export const Sector = styled.div`
	display: flex;
	flex-direction: row;
`;
export const SectorIcon = styled.div`
	${({ sectorTitle }) => handleSectorIcon(sectorTitle)}
	display: flex;
	height: 50px;
	width: 70px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	margin-right: 32px;
`;
export const SectorInfo = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
`;
export const SectorTitle = styled.div`
	font-size: 50px;
	font-weight: 600;
	line-height: 45px;
`;
export const SubSectorWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 24px;
`;
export const SubSector = styled.div`
	background: ${({ sectorTitle }) => handleDarkenColor(sectorTitle)};
	margin-right: 12px;
	display: flex;
	flex-wrap: wrap;
	border-radius: 25px;
	padding: 10px 22px;
	font-weight: 500;
    font-size: 20px;
}
`;
export const SolutionInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
export const SolutionNumber = styled.div`
	color: white;
	font-size: 80px;
`;
export const SolutionDescription = styled.div`
	color: white;
	font-size: 50px;
	line-height: 60px;
`;

export const Section = styled.div`
	background: #ffffff;
	min-height: 60vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	padding: 60px 210px;
`;
export const SectionTitle = styled.h2`
	color: #838d8b;
	padding: 0;
	margin: 0;
	margin-bottom: 40px;
	font-size: 46px;
	font-weight: 600;
`;
export const SectionParagraph = styled.p`
	color: #838d8b;
	padding: 0;
	margin: 0;
	font-size: 24px;
	font-weight: 300;
`;

export const SectionMeta = styled.div`
	background: #f9f8f4;
	min-height: 60vh;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 60px 210px;
`;

export const SectionMetaItem = styled.div`
	/* border: 1px solid #c9c9c9; */
	margin: 0;
	padding: 32px;
	flex: 0 0 49%;
	display: flex;
	flex-direction: row;
`;
export const MetaIcon = styled.div`
	${({ metaTitle }) => handleMetaIcon(metaTitle)}
	/* display: flex; */
	/* height: 85px; */
	width: 130px;
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
	margin-right: 28px;
`;
export const MetaInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
export const MetaTitle = styled.div`
	font-size: 32px;
	line-height: 32px;
	font-weight: 500;
	margin: 12px 0 24px 0;
	color: #838d8b;
`;
export const MetaText = styled.div`
	font-size: 26px;
	color: #838d8b;
`;

export const SectionMeta2 = styled.div`
	background: #ffffff;
	min-height: 60vh;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 60px 210px;
`;

export const SectionMeta2Item = styled.div`
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to bottom, #ec9742, #dd8a37);
	margin: 0;
	padding: 25px;
	flex: 0 0 28%;
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
`;
export const Meta2Icon = styled.div`
	${({ metaTitle }) => handleMetaIcon(metaTitle)}
	/* display: flex; */
	height: 85px;
	width: 130px;
	background-position: top left;
	background-repeat: no-repeat;
	background-size: contain;
	margin-right: 28px;
`;

export const Meta2Title = styled.div`
	font-size: 32px;
	line-height: 32px;
	font-weight: 500;
	margin: 12px 0 24px 0;
	color: #ec9742;
`;
export const Meta2Text = styled.div`
	font-size: 26px;
	color: #838d8b;
`;

export const CategorySection = styled.div`
	background: #ffffff;
	min-height: 60vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	padding: 60px 210px;
`;
export const CategorySectionTitle = styled.h3`
	font-size: 42px;
	color: #8e8b8d;
`;

export const CategoryItensWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
`;
export const CategoryItem = styled.div`
	margin: 0;
	padding: 25px;
	flex: 0 0 25%;
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const CategoryIcon = styled.div`
	${({ categoryTitle }) => handleMetaIcon(categoryTitle)}
	/* display: flex; */
	height: 110px;
	/* width: 130px; */
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const CategoryText = styled.div`
	font-size: 26px;
	color: #838d8b;
`;
