import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Background } from './styles';
import Nav from '../../../components/Nav';
import api from '../../../services/api';
// import ScrollReveal from '../../../components/MunicipalSolutions/ScrollReveal';

export default function Home() {
	const { id } = useParams();
	const [solution, setSolution] = useState([]);
	async function loadSolution() {
		try {
			const response = await api.get(`/solutions/${id}`);
			setSolution(response.data);
		} catch (err) {
			// console.log(err);
		}
	}

	useEffect(() => {
		loadSolution();
	}, []);

	return (
		<>
			<Nav />
			<Background>{solution.title}</Background>
		</>
	);
}
