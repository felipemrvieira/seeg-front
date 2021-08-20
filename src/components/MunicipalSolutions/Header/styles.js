import styled from 'styled-components';

export const Section1 = styled.div`
	background: #c5c5c5;
	width: 100%;
	padding: 96px 200px 10px 200px;
	display: flex;
	flex-direction: column;
	@media (max-width: 900px) {
		padding: 96px 60px 10px 60px;
	}
`;
export const Section2 = styled.div`
	background: white;
	width: 100%;
	padding: 32px 200px 96px 200px;
	display: flex;
	flex-direction: column;
	@media (max-width: 900px) {
		padding: 96px 60px 10px 60px;
	}
`;

export const SectionTitle = styled.h2`
	color: white;
	text-transform: uppercase;
	/* font-size: 60px; */
	font-size: 2.5em;
	font-weight: 300;
	margin-bottom: 32px;
`;

export const SectionDescription = styled.p`
	color: #6b6b6b;
	font-size: 20px;
	font-weight: 300;
	margin-bottom: 0;
`;

export const SectionCapDescription = styled.p`
	color: #6b6b6b;
	font-weight: 300;
	font-size: 19px;
	line-height: 36px;
`;

export const Img = styled.img`
	max-width: 100%;
	width: 100%;
	margin-bottom: 32px;
	z-index: 9;
`;

export const GreyBar = styled.div`
	background: #c5c5c5;
	width: 100%;
	height: 150px;
	position: absolute;
`;

export const SectorCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-flow: wrap;
	margin: 12px 0 32px 0;
`;

export const SubMenuContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-flow: wrap;
	margin: 32px 24px 24px 24px;
`;
export const MenuItem = styled.a`
	padding: 24px 32px;
	font-size: 20px;
	background: #c5c5c5;
	color: #5a5959;
`;

export const TextButton = styled.p`
	padding: 6px 16px;
	margin: 0;
	color: white;
	font-size: 22px;
	font-weight: 400;
`;
