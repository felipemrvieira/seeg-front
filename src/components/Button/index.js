import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export default function Index({ to, children }) {
	return <Button to={to}>{children}</Button>;
}

Index.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.node.isRequired,
};
