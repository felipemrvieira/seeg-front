import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
	Meta2Icon,
	Meta2Title,
	Meta2Text,
} from './styles';
import Nav from '../../../components/Nav';
import api from '../../../services/api';
// import ScrollReveal from '../../../components/MunicipalSolutions/ScrollReveal';

export default function Home() {
	const { id } = useParams();
	const [, setSolution] = useState([]);
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
			<Header>
				<Sector>
					<SectorIcon sectorTitle="Agropecuária" />
					<SectorInfo>
						<SectorTitle>Agropecuária</SectorTitle>
						<SubSectorWrapper>
							<SubSector sectorTitle="Agropecuária">Cultivo de arroz</SubSector>
							<SubSector sectorTitle="Agropecuária">
								Fermentação entèrica
							</SubSector>
							<SubSector sectorTitle="Agropecuária">Solos manejados</SubSector>
						</SubSectorWrapper>
					</SectorInfo>
				</Sector>
				<SolutionInfo>
					<SolutionNumber>12</SolutionNumber>
					<SolutionDescription>
						Incluir o zoneamento agropecuário e Lorem ipsum dolor, sit amet.
					</SolutionDescription>
				</SolutionInfo>
			</Header>
			<Section>
				<SectionTitle>Solução de mitigação e adaptação</SectionTitle>
				<SectionParagraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat
					est perspiciatis ratione iure rem voluptas omnis in adipisci? Itaque,
					voluptatum. Quasi deserunt corrupti odit doloribus dolores expedita
					dicta voluptatem. Odio quia repudiandae veritatis vitae repellendus
					cupiditate tempore odit ratione nostrum deserunt numquam excepturi
					natus saepe error laudantium doloribus, tenetur ab cumque at,
					assumenda quidem maiores earum! Cum, itaque animi! Quaerat, eius
					sapiente, repellendus eos minus corrupti vel et nostrum magni
					molestiae aliquam quo atque excepturi, laborum natus? Fuga, nobis
					debitis illum laudantium vel vero? Qui minima modi quisquam? Impedit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat
					est perspiciatis ratione iure rem voluptas omnis in adipisci? Itaque,
					voluptatum. Quasi deserunt corrupti odit doloribus dolores expedita
					dicta voluptatem. Odio quia repudiandae veritatis vitae repellendus
					cupiditate tempore odit ratione nostrum deserunt numquam excepturi
					natus saepe error laudantium doloribus, tenetur ab cumque at,
					assumenda quidem maiores earum! Cum, itaque animi! Quaerat, eius
					sapiente, repellendus eos minus corrupti vel et nostrum magni
					molestiae aliquam quo atque excepturi, laborum natus? Fuga, nobis
					debitis illum laudantium vel vero? Qui minima modi quisquam? Impedit.
				</SectionParagraph>
			</Section>
			<SectionMeta>
				<SectionMetaItem>
					<MetaIcon metaTitle="esfera" />
					<MetaInfo>
						<MetaTitle>Esfera administrativa de competencia</MetaTitle>
						<MetaText>Transversal</MetaText>
					</MetaInfo>
				</SectionMetaItem>
				<SectionMetaItem>
					<MetaIcon metaTitle="investimento" />
					<MetaInfo>
						<MetaTitle>Investimento necessário</MetaTitle>
						<MetaText>Transversal</MetaText>
					</MetaInfo>
				</SectionMetaItem>
				<SectionMetaItem>
					<MetaIcon metaTitle="financiamento" />
					<MetaInfo>
						<MetaTitle>Financiamento</MetaTitle>
						<MetaText>Transversal</MetaText>
					</MetaInfo>
				</SectionMetaItem>
				<SectionMetaItem>
					<MetaIcon metaTitle="atores" />
					<MetaInfo>
						<MetaTitle>Atores-chave</MetaTitle>
						<MetaText>Transversal</MetaText>
					</MetaInfo>
				</SectionMetaItem>
			</SectionMeta>
			<SectionMeta2>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="faixa" />
					<Meta2Title>Faixas populacionais aplicáveis</Meta2Title>
					<Meta2Text>asdasdasd</Meta2Text>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="regioes" />
					<Meta2Title>Regiões apliáveis</Meta2Title>
					<Meta2Text>asdasdasd</Meta2Text>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="tempo" />
					<Meta2Title>Tempo de implementação</Meta2Title>
					<Meta2Text>asdasdasd</Meta2Text>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="impacto" />
					<Meta2Title>Impacto sobre s emissões</Meta2Title>
					<Meta2Text>asdasdasd</Meta2Text>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="setor" />
					<Meta2Title>Setor Fundamental da solução</Meta2Title>
					<Meta2Text>asdasdasd</Meta2Text>
				</SectionMeta2Item>
				<SectionMeta2Item>
					<Meta2Icon metaTitle="alinhamento" />
					<Meta2Title>Alinhamento com NDC</Meta2Title>
					<Meta2Text>asdasdasd</Meta2Text>
				</SectionMeta2Item>
			</SectionMeta2>
		</>
	);
}
