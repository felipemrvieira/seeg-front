import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../../Button';
import { ButtonArea, GreyArea, TextButton } from './styles';

export default function Footer() {
	return (
		<>
			<ButtonArea>
				<Button>
					<TextButton>Veja todas as soluções disponíveis</TextButton>
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
