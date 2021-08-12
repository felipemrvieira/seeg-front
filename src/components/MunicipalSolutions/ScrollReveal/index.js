import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import PropTypes from 'prop-types';

export default function Index({ children }) {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (sectionRef.current)
			scrollReveal().reveal(sectionRef.current, {
				reset: true,
				delay: 250,
			});
	}, []);

	return (
		<section ref={sectionRef} className=" scroll-section" data-testid="section">
			{children}
		</section>
	);
}

Index.propTypes = {
	children: PropTypes.node.isRequired,
};
