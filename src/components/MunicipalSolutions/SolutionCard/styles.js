import styled from 'styled-components';

export const Card = styled.div`
	background: red;
	margin: 20px;
	width: 305px;
	display: flex;
	flex-direction: column;

	flex-basis: 305px;
	flex-grow: 0;
	flex-shrink: 0;
`;
export const CardHeader = styled.div`
	padding: 24px 32px 6px 32px;
	color: white;
	font-size: 40px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
`;
export const CardInfo = styled.div`
	padding: 6px 32px 32px 32px;
	color: white;
	font-size: 30px;
	line-height: 36px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
`;
export const CardFooter = styled.div`
	padding: 12px 32px;
	background-color: tomato;
	color: white;
	font-size: 28px;
	font-weight: normal;
	display: flex;
	flex-direction: column;
`;
