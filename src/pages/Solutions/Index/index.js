import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {
	Filter,
	Background,
	Solution,
	SolutionTagWrapper,
	SolutionTag,
	SolutionIcon,
	SectorTitle,
	SolutionInfoWrapper,
	SolutionInfo,
	SolutionNumber,
	SolutionTitle,
	SolutionMetaInfoContainer,
	SolutionMetaInfo,
	SolutionMetaInfoLabel,
	SolutionMetaInfoValue,
	Link,
	Footer,
} from './styles';

import { solutionOfHelper, sectorHelper, impactHelper } from '../../../helpers';
import Nav from '../../../components/Nav';
import api from '../../../services/api';
// import ScrollReveal from '../../../components/MunicipalSolutions/ScrollReveal';

export default function Home() {
	const [solutions, setSolutions] = useState([]);
	const [selectedSolutions, setSelectedSolutions] = useState('');

	async function loadSolutions() {
		try {
			const response = await api.get('/solutions');
			setSolutions(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	const solutionOptions = solutions.map((item) => ({
		value: item.id,
		label: item.title,
	}));

	useEffect(() => {
		loadSolutions();
	}, []);

	let filteredSolutions;
	function filterSolution() {
		if (selectedSolutions) {
			filteredSolutions = solutions.filter((el) => el.id === selectedSolutions);
		} else {
			filteredSolutions = solutions;
		}
	}
	filterSolution();
	console.log(solutions);
	return (
		<>
			<Nav />
			<Filter>
				{/* <Label htmlFor="number">Solução de</Label> */}
				<Select
					name="selectedSolution"
					options={solutionOptions}
					onChange={(event) => setSelectedSolutions(event.value)}
					placeholder="Digite ou Selecione"
				/>
			</Filter>
			<Background>
				{filteredSolutions.map((solution) => (
					// <ScrollReveal key={solution.number}>
					<Solution key={solution.number}>
						<SolutionTagWrapper>
							<SolutionTag sectorTitle={solution.sector.name}>
								<SolutionIcon sectorTitle={solution.sector.name} />
								<SectorTitle>{solution.sector.name}</SectorTitle>
							</SolutionTag>
						</SolutionTagWrapper>
						<SolutionInfoWrapper>
							<SolutionNumber>{solution.number}</SolutionNumber>
							<SolutionInfo>
								<SolutionTitle>{solution.title}</SolutionTitle>
								<SolutionMetaInfoContainer>
									<SolutionMetaInfo>
										<SolutionMetaInfoLabel>Tipo de ação</SolutionMetaInfoLabel>
										<SolutionMetaInfoValue>
											{solutionOfHelper(solution.solution_of)}
										</SolutionMetaInfoValue>
									</SolutionMetaInfo>
									<SolutionMetaInfo>
										<SolutionMetaInfoLabel>Potencial</SolutionMetaInfoLabel>
										<SolutionMetaInfoValue>
											{impactHelper(solution.impact_on_emissions)}
										</SolutionMetaInfoValue>
									</SolutionMetaInfo>
									<SolutionMetaInfo>
										<SolutionMetaInfoLabel>
											Setores fundamentais
										</SolutionMetaInfoLabel>
										<SolutionMetaInfoValue>
											{sectorHelper(solution.fundamental_sector)}
										</SolutionMetaInfoValue>
									</SolutionMetaInfo>
								</SolutionMetaInfoContainer>
								<Link to={`/solutions/${solution.id}`}>
									veja mais sobre esta solução
								</Link>
							</SolutionInfo>
						</SolutionInfoWrapper>
					</Solution>
					// </ScrollReveal>
				))}
			</Background>
			<Footer />
		</>
	);
}
