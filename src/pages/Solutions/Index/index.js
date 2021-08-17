import React, { useState, useEffect } from 'react';
import {
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
import ScrollReveal from '../../../components/MunicipalSolutions/ScrollReveal';

export default function Home() {
	const [solutions, setSolutions] = useState([]);
	async function loadSolutions() {
		try {
			const response = await api.get('/solutions');
			setSolutions(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	useEffect(() => {
		loadSolutions();
	}, []);

	return (
		<>
			<Nav />
			<Background>
				{solutions.map((solution) => (
					<ScrollReveal key={solution.number}>
						<Solution>
							<SolutionTagWrapper>
								<SolutionTag sectorTitle="Energia elétrica">
									<SolutionIcon sectorTitle="Energia elétrica" />
									<SectorTitle>Energia Elétrica</SectorTitle>
								</SolutionTag>
							</SolutionTagWrapper>
							<SolutionInfoWrapper>
								<SolutionNumber>{solution.number}</SolutionNumber>
								<SolutionInfo>
									<SolutionTitle>{solution.title}</SolutionTitle>
									<SolutionMetaInfoContainer>
										<SolutionMetaInfo>
											<SolutionMetaInfoLabel>
												Tipo de ação
											</SolutionMetaInfoLabel>
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
					</ScrollReveal>
				))}
			</Background>
			<Footer />
		</>
	);
}
