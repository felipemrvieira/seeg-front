import styled from 'styled-components';
import { Link as Anchor } from 'react-router-dom';

export const Button = styled(Anchor)`
	padding: 16px 30px;
	border-radius: 50px;
	border: none;
	background-color: #f28d49;
	color: white;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	&:hover {
		color: inherit;
	}
`;
