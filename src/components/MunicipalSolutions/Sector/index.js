import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './styles';

export default function Index({ children }) {
	return <Card>{children}</Card>;
}

Index.propTypes = {
	children: PropTypes.node.isRequired,
};
