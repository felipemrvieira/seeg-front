import styled from 'styled-components';

export const Background = styled.div`
	background: #f8f9fc;
	min-height: 100vh;
	margin: 0;
	display: flex;
	flex-direction: column;
`;

export const ButtonWrapper = styled.div`
	position: relative;
	width: 200px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Label = styled.span`
	position: relative;
	z-index: 0;
	display: inline-block;
	width: 100%;
	background: #74c6df;
	cursor: pointer;
	color: #fff;
	padding: 10px 0;
	text-transform: uppercase;
	font-size: 12px;
	border-radius: 25px;
`;

export const Input = styled.input`
	display: inline-block;
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 50px;
	top: 0;
	left: 0;
	opacity: 0;
	cursor: pointer;
`;
