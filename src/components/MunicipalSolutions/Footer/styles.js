import styled from 'styled-components';

export const GreyArea = styled.div`
	background: #c5c5c5;
	width: 100%;
	padding: 96px 200px 10px 200px;
	display: flex;
	flex-direction: column;
`;
export const ButtonArea = styled.div`
	background: white;
	width: 100%;
	padding: 32px 200px 96px 200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media (max-width: 900px) {
		padding: 32px 40px 96px 40px;
	}
`;

export const Button = styled.div`
	background: white;
	width: 100%;
	padding: 32px 200px 96px 200px;
`;

export const TextButton = styled.p`
	padding: 12px 32px;
	margin: 0;
	color: white;
	font-size: 20px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
`;
