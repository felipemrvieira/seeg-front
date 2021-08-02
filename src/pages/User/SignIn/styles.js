import styled from 'styled-components';
import LogoSrc from './logo.png';

export const Background = styled.div`
	background: linear-gradient(20deg, #e17c6a, #f59142);
	height: 100vh;
	padding: 32px;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Card = styled.div`
	background: #fff;
	border-radius: 0.35rem;
	width: 900px;
	display: flex;
	flex-direction: row;
`;

export const LogoContainer = styled.div`
	padding: 24px;
	display: flex;
	flex: 1;
	justify-content: center;
	border-right: 1px solid #f5f2f2;
`;

export const Logo = styled.div`
	background-image: url(${LogoSrc});
	display: flex;
	flex: 1;
	height: 500px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: auto;
`;

export const FormContainer = styled.div`
	padding: 24px;
	display: flex;
	flex: 1;
	justify-content: center;
	flex-direction: column;
`;

export const FormLabel = styled.h2`
	color: #3a3b45;
	font-size: 32px;
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Input = styled.input`
	padding: 8px;
	border-radius: 25px;
	border-style: solid;
	border-color: #d0d0d0;
	outline-width: 0;
	margin-bottom: 10px;
`;

export const Button = styled.button`
	padding: 10px 0;
	border-radius: 25px;
	border: none;
	background-color: #74c6df;
	color: white;
	text-align: center;
	text-transform: uppercase;

	/* height: 32px; */
`;
