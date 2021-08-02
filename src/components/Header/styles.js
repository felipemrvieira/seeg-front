import styled from 'styled-components';
import LogoSrc from './assets/logo.png';

export const NavbarWrapper = styled.div`
	padding: 0;
	margin: 0;
	box-shadow: 1px 1px 60px 0px rgba(199, 199, 199, 0.34);
	-webkit-box-shadow: 1px 1px 60px 0px rgba(199, 199, 199, 0.34);
	-moz-box-shadow: 1px 1px 60px 0px rgba(199, 199, 199, 0.34);
`;
export const LogoContainer = styled.div`
	/* padding: 24px; */
	display: flex;
	flex: 1;
	justify-content: center;
	margin-right: 32px;
	/* border-right: 1px solid #f5f2f2; */
`;

export const Logo = styled.div`
	background-image: url(${LogoSrc});
	display: flex;
	flex: 1;
	height: 90px;
	width: 160px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const Button = styled.button`
	padding: 10px 22px;
	border-radius: 5px;
	border: none;
	background-color: #e68161;
	color: white;
	text-align: center;
	text-transform: uppercase;

	/* height: 32px; */
`;
