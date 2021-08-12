import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const radius = '8px';

export const Background = styled.div`
	background: #f8f9fc;
	height: 100vh;
	margin: 0;
	display: flex;
	flex-direction: column;
`;

export const Link = styled(A)`
	padding: 6px 10px;
	border-radius: ${radius};
	border: none;
	background-color: #74c6df;
	color: white;
	text-align: center;

	/* height: 32px; */
`;
