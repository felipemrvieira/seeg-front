import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export default function Index({ children }) {
	return <Button>{children}</Button>;
}

Index.propTypes = {
	children: PropTypes.node.isRequired,
};
