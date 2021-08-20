import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	solutionOfHelper,
	sphereHelper,
	sectorHelper,
	impactHelper,
	regionHelper,
	rangeHelper,
	breakLineHelper,
	solutionNumberHelper,
} from '../../../helpers';
import {
	Header,
	Section,
	SectionTitle,
	SectionParagraph,
	SectionMeta,
	SectionMetaItem,
	Sector,
	SectorIcon,
	SectorInfo,
	SectorTitle,
	MetaIcon,
	MetaInfo,
	MetaTitle,
	MetaText,
	SubSectorWrapper,
	SubSector,
	SolutionInfo,
	SolutionNumber,
	SolutionDescription,
	SectionMeta2,
	SectionMeta2Item,
	SectionMeta2FullWidthItem,
	Meta2Icon,
	Meta2Title,
	Meta2Text,
	CategorySection,
	CategorySectionTitle,
	CategoryItensWrapper,
	CategoryItem,
	CategoryIconWrapper,
	CategoryIcon,
	CategoryText,
	ODSSection,
	ODSSectionTitle,
	ODSItensWrapper,
	ODSItem,
	ODSIcon,
	CobenefitsSection,
	CobenefitsSectionTitle,
	CobenefitsItem,
	SocialCobenefitsIcon,
	EnvironmentalCobenefitsIcon,
	EconomicCobenefitsIcon,
	CobenefitsInfo,
	CobenefitsTitle,
	CobenefitsText,
	ChallengeSection,
	ChallengeSectionIcon,
	ChallengeSectionTitle,
	ChallengeSectionText,
	Footer,
	DownloadButton,
} from './styles';
import Nav from '../../../components/Nav';
import api from '../../../services/api';
// import ScrollReveal from '../../../components/MunicipalSolutions/ScrollReveal';

export default function Home() {
	const { id } = useParams();
	const [solution, setSolution] = useState({
		sustainable_development_goals: [],
		applicable_population_ranges: '',
		sector: {},
		subsectors: '',
	});
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

	const subsectors = solution.subsectors.replace(/\r?\n/g, ';').split(';');
	// console.log(solution);
	// const odsGoals = solution.sustainable_development_goals || [''];
	return (
		<>
			<Nav />
			<Header sectorTitle={solution.sector.name}>
				<DownloadButton
					href={`https://storage.cloud.google.com/seeg-solutions/seeg-solucoes_${solutionNumberHelper(
						solution.number
					)}.pdf`}
				>
					Download
				</DownloadButton>
				<Sector>
					<SectorIcon sectorTitle={solution.sector.name} />
					<SectorInfo>
						<SectorTitle>{solution.sector.name}</SectorTitle>
						<SubSectorWrapper>
							{subsectors.map((subsector) => (
								<SubSector sectorTitle={solution.sector.name}>
									{subsector}
								</SubSector>
							))}
						</SubSectorWrapper>
					</SectorInfo>
				</Sector>
				<SolutionInfo>
					<SolutionNumber>{solution.number}</SolutionNumber>
					<SolutionDescription
						dangerouslySetInnerHTML={{
							__html: breakLineHelper(solution.title),
						}}
					/>
				</SolutionInfo>
			</Header>
			<Section>
				<SectionTitle>
					Solução de {breakLineHelper(solutionOfHelper(solution.solution_of))}
				</SectionTitle>
				<SectionParagraph
					dangerouslySetInnerHTML={{
						__html: solution.description,
					}}
				/>
			</Section>
			<SectionMeta>
				<SectionMetaItem>
					<MetaIcon metaTitle="esfera" />
					<MetaInfo>
						<MetaTitle>Esfera administrativa de competencia</MetaTitle>
						<MetaText
							dangerouslySetInnerHTML={{
								__html: sphereHelper(breakLineHelper(solution.sphere)),
							}}
						/>
					</MetaInfo>
				</SectionMetaItem>
				<SectionMetaItem>
					<MetaIcon metaTitle="investimento" />
					<MetaInfo>
						<MetaTitle>Investimento necessário</MetaTitle>
						<MetaText
							dangerouslySetInnerHTML={{
								__html: breakLineHelper(solution.necessary_investment),
							}}
						/>
					</MetaInfo>
				</SectionMetaItem>
				<SectionMetaItem>
					<MetaIcon metaTitle="financiamento" />
					<MetaInfo>
						<MetaTitle>Financiamento</MetaTitle>
						<MetaText
							dangerouslySetInnerHTML={{
								__html: breakLineHelper(solution.financing),
							}}
						/>
					</MetaInfo>
				</SectionMetaItem>
				<SectionMetaItem>
					<MetaIcon metaTitle="atores" />
					<MetaInfo>
						<MetaTitle>Atores-chave</MetaTitle>
						<MetaText
							dangerouslySetInnerHTML={{
								__html: breakLineHelper(solution.key_actors),
							}}
						/>
					</MetaInfo>
				</SectionMetaItem>
			</SectionMeta>
			<SectionMeta2>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="faixa" />
					<Meta2Title>Faixas populacionais aplicáveis</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: rangeHelper(solution.applicable_population_ranges),
						}}
					/>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="regioes" />
					<Meta2Title>Regiões apliáveis</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: regionHelper(solution.applicable_regions),
						}}
					/>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="tempo" />
					<Meta2Title>Tempo de implementação</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: solution.implementation_time,
						}}
					/>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="impacto" />
					<Meta2Title>Impacto sobre as emissões</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: impactHelper(solution.impact_on_emissions),
						}}
					/>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="setor" />
					<Meta2Title>Setor Fundamental da solução</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: sectorHelper(solution.fundamental_sector),
						}}
					/>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="alinhamento" />
					<Meta2Title>Alinhamento com NDC</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: solution.alignment_with_ndc,
						}}
					/>
				</SectionMeta2Item>
			</SectionMeta2>
			<CategorySection>
				<CategorySectionTitle>Categoria da ação</CategorySectionTitle>
				<CategoryItensWrapper>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="comunicacao"
							/>
						</CategoryIconWrapper>
						<CategoryText>Comunicação</CategoryText>
					</CategoryItem>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="educacao"
							/>
						</CategoryIconWrapper>

						<CategoryText>Educação</CategoryText>
					</CategoryItem>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="engajamento"
							/>
						</CategoryIconWrapper>
						<CategoryText>Engajamento</CategoryText>
					</CategoryItem>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="infraestrutura"
							/>
						</CategoryIconWrapper>
						<CategoryText>Infraestrutura</CategoryText>
					</CategoryItem>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="monitoramento"
							/>
						</CategoryIconWrapper>
						<CategoryText>Monitoramento</CategoryText>
					</CategoryItem>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="planejamento"
							/>
						</CategoryIconWrapper>
						<CategoryText>Planejamento</CategoryText>
					</CategoryItem>
					<CategoryItem>
						<CategoryIconWrapper>
							<CategoryIcon
								categories={solution.action_category}
								categoryTitle="regramento"
							/>
						</CategoryIconWrapper>
						<CategoryText>Regramento</CategoryText>
					</CategoryItem>
				</CategoryItensWrapper>
			</CategorySection>
			<ODSSection>
				<ODSSectionTitle>
					Objetivos do desenvolvimento sustentável
				</ODSSectionTitle>
				<ODSItensWrapper>
					{solution.sustainable_development_goals.map((ods) => (
						<ODSItem key={ods}>
							<ODSIcon ODSTitle={ods} />
						</ODSItem>
					))}
				</ODSItensWrapper>
			</ODSSection>

			<CobenefitsSection>
				<CobenefitsSectionTitle>Cobenefícios</CobenefitsSectionTitle>
				<CobenefitsItem>
					<EnvironmentalCobenefitsIcon />
					<CobenefitsInfo>
						<CobenefitsTitle>Ambientais</CobenefitsTitle>
						<CobenefitsText
							dangerouslySetInnerHTML={{
								__html: breakLineHelper(solution.environmental_cobenefits),
							}}
						/>
					</CobenefitsInfo>
				</CobenefitsItem>
				<CobenefitsItem>
					<SocialCobenefitsIcon />
					<CobenefitsInfo>
						<CobenefitsTitle>Sociais</CobenefitsTitle>
						<CobenefitsText
							dangerouslySetInnerHTML={{
								__html: breakLineHelper(solution.social_cobenefits),
							}}
						/>
					</CobenefitsInfo>
				</CobenefitsItem>
				<CobenefitsItem>
					<EconomicCobenefitsIcon />
					<CobenefitsInfo>
						<CobenefitsTitle>Econômicos</CobenefitsTitle>
						<CobenefitsText
							dangerouslySetInnerHTML={{
								__html: breakLineHelper(solution.economic_cobenefits),
							}}
						/>
					</CobenefitsInfo>
				</CobenefitsItem>
			</CobenefitsSection>
			<Section>
				<SectionMeta2FullWidthItem>
					<Meta2Icon metaTitle="politicas" />
					<Meta2Title color="#8e8d8b">
						Políticas públicas orientadoras
					</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: breakLineHelper(solution.guiding_public_policies),
						}}
					/>
				</SectionMeta2FullWidthItem>
				<SectionMeta2FullWidthItem>
					<Meta2Icon metaTitle="atuacao" />
					<Meta2Title color="#8e8d8b">Modo de atuação do município</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: breakLineHelper(solution.municipal_operating_mode),
						}}
					/>
				</SectionMeta2FullWidthItem>
				<SectionMeta2FullWidthItem>
					<Meta2Icon metaTitle="exemplo" />
					<Meta2Title color="#8e8d8b">Exemplo de atuação municipal</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: breakLineHelper(
								solution.examples_of_municipal_application
							),
						}}
					/>
				</SectionMeta2FullWidthItem>
				<SectionMeta2FullWidthItem>
					<Meta2Icon metaTitle="referencias" />
					<Meta2Title color="#8e8d8b">Referências técnicas</Meta2Title>
					<Meta2Text
						dangerouslySetInnerHTML={{
							__html: breakLineHelper(solution.technical_references),
						}}
					/>
				</SectionMeta2FullWidthItem>
			</Section>
			<ChallengeSection>
				<ChallengeSectionIcon />
				<ChallengeSectionTitle>Desafios</ChallengeSectionTitle>
				<ChallengeSectionText
					dangerouslySetInnerHTML={{
						__html: breakLineHelper(solution.challenges),
					}}
				/>
			</ChallengeSection>
			<Footer />
		</>
	);
}
