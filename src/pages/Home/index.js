import React, { useState, useEffect } from 'react';

import {} from './styles';
import Header from '../../components/MunicipalSolutions/Header';
import Footer from '../../components/MunicipalSolutions/Footer';
import Sector from '../../components/MunicipalSolutions/Sector';
import api from '../../services/api';

export default function Home() {
	const [solutionsBySector, setSolutionsBySector] = useState([]);

	async function loadSolutions() {
		try {
			const response = await api.get('/solutions/by_sector');
			setSolutionsBySector(response.data);
			// console.tron.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	useEffect(() => {
		loadSolutions();
	}, []);

	const energia = solutionsBySector.filter((el) => el.name === 'Energia')[0];
	const agropecuaria = solutionsBySector.filter(
		(el) => el.name === 'Agropecuaria'
	)[0];
	const residuos = solutionsBySector.filter((el) => el.name === 'Residuos')[0];
	const mut = solutionsBySector.filter(
		(el) => el.name === 'Mudanca de Uso da Terra e Florestas'
	)[0];

	let transportesSolutions;
	let energiaEletricaSolutions;

	if (energia) {
		const energiaSolutions = energia.solutions;
		transportesSolutions = energiaSolutions.filter(
			(el) => el.subsectors === 'Transportes'
		);
		energiaEletricaSolutions = energiaSolutions.filter(
			(el) => el.subsectors === 'Energia Elétrica'
		);
	}

	const newEnergia = {
		name: 'Energia elétrica',
		solutions: energiaEletricaSolutions,
	};
	const newTransportes = {
		name: 'Transportes',
		solutions: transportesSolutions,
	};

	const newSolutionsBySector = [
		newEnergia,
		newTransportes,
		agropecuaria,
		residuos,
		mut,
	];
	console.log(newSolutionsBySector);
	return (
		<>
			<Header solutionsBySector={newSolutionsBySector} />
			{newSolutionsBySector.map((sector, i) => (
				<Sector sectorInfo={sector} isOdd={Boolean(i % 2)} />
			))}
			<Footer />
		</>
	);
}
