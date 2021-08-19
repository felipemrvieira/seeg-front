import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Button from '../../Button';
import { ButtonArea, GreyArea, TextButton } from './styles';

export default function Footer() {
	return (
		<>
			<ButtonArea>
				<Button to="solutions">
					{/* <Link to="solutions"> */}
					<TextButton>Veja todas as soluções disponíveis</TextButton>
					{/* </Link> */}
				</Button>
			</ButtonArea>
			<GreyArea />
		</>
	);
}

// Sector.propTypes = {
// 	sectorInfo: PropTypes.node.isRequired,
// 	isOdd: PropTypes.node.isRequired,
// };
