import React from 'react';
import PropTypes from 'prop-types';
import { PageHader } from './styles';

export default function Index({ children }) {
	return <PageHader>{children}</PageHader>;
}

Index.propTypes = {
	children: PropTypes.node.isRequired,
};
