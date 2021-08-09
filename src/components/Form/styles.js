import styled from 'styled-components';
import { Link } from 'react-router-dom';

const radius = '8px';

export const FormContainer = styled.div`
	padding: 18px 12px;
	display: flex;
	flex: 1;
	justify-content: center;
	flex-direction: column;
`;

export const FormLabel = styled.h2`
	color: #3a3b45;
	font-size: 32px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Label = styled.label`
	color: #7b7b7b;
	font-size: 18px;
`;

export const Input = styled.input`
	padding: 8px;
	border-radius: ${radius};
	border-style: solid;
	border-color: #d0d0d0;
	outline-width: 0;
	margin-bottom: 22px;
`;

export const TextArea = styled.textarea`
	padding: 8px;
	border-radius: ${radius};
	border-style: solid;
	border-color: #d0d0d0;
	outline-width: 0;
	margin-bottom: 22px;
`;

export const Button = styled.button`
	padding: 10px 0;
	border-radius: ${radius};
	border: none;
	background-color: #73e1a7;
	color: white;
	text-align: center;
	text-transform: uppercase;

	/* height: 32px; */
`;
export const EditButton = styled(Link)`
	padding: 10px 0;
	border-radius: ${radius};
	border: none;
	background-color: #fa953a;
	color: white;
	text-align: center;
	text-transform: uppercase;

	/* height: 32px; */
`;
