import styled from 'styled-components';

export const Section1 = styled.div`
	background: #c5c5c5;
	width: 100%;
	padding: 96px 200px 10px 200px;
	display: flex;
	flex-direction: column;
`;
export const Section2 = styled.div`
	background: white;
	width: 100%;
	padding: 32px 200px 96px 200px;
	display: flex;
	flex-direction: column;
`;

export const SectionTitle = styled.h2`
	color: white;
	text-transform: uppercase;
	font-size: 60px;
	font-weight: 300;
	margin-bottom: 32px;
`;

export const SectionDescription = styled.p`
	color: #6b6b6b;
	font-size: 28px;
	font-weight: 300;
	margin-bottom: 0;
`;

export const SectionCapDescription = styled.p`
	color: #6b6b6b;
	font-size: 18px;
	line-height: 28px;
	font-weight: 300;
`;

export const Img = styled.img`
	max-width: 100%;
	margin-bottom: 32px;
	z-index: 9;
`;

export const GreyBar = styled.div`
	background: #c5c5c5;
	width: 100%;
	height: 150px;
	position: absolute;
`;
