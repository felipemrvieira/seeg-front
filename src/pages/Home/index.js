import React, { useState, useEffect } from 'react';

import {} from './styles';
import Header from '../../components/MunicipalSolutions/Header';
import Footer from '../../components/MunicipalSolutions/Footer';
import Sector from '../../components/MunicipalSolutions/Sector';
import api from '../../services/api';

export default function Home() {
	const [solutions, setSolutions] = useState([]);
	async function loadSolutions() {
		try {
			const response = await api.get('/solutions/by_sector');
			setSolutions(response.data);
			// console.tron.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	useEffect(() => {
		loadSolutions();
	}, []);

	return (
		<>
			<Header solutionsBySector={solutions} />
			{solutions.map((sector, i) => (
				<Sector sectorInfo={sector} isOdd={Boolean(i % 2)} />
			))}
			<Footer />
		</>
	);
}
