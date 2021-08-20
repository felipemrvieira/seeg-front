import React from 'react';
import PropTypes from 'prop-types';
import ScrollReveal from '../ScrollReveal';
import {
	Section1,
	Section2,
	SectionTitle,
	SectionDescription,
	SectionCapDescription,
	Img,
	GreyBar,
	SectorCardContainer,
	SubMenuContainer,
	TextButton,
	// MenuItem,
} from './styles';
import Image from './assets/faixa-87.png';
import Nav from '../../Nav';
import SectorCard from '../SectorCard';
import Button from '../../Button';

// const sectorList = [
// 	{ title: 'Agropecuária', solutionsCount: '28' },
// 	{ title: 'Energia', solutionsCount: '14' },
// 	// { title: 'Transporte', solutionsCount: '40' },
// 	{ title: 'MUT', solutionsCount: '16' },
// 	{ title: 'Resíduos', solutionsCount: '12' },
// ];
export default function Sector({ solutionsBySector }) {
	// console.log(solutionsBySector);
	return (
		<>
			<Nav />
			<Section1>
				<SectionTitle>Soluções</SectionTitle>
				<SectionDescription>
					Para além de identificar as emissões de GEE de cada município do
					Brasil, o SEEG se propôs a mapear e compilar de maneira didática ações
					de mitigação e adaptação a nível local, a fim de promover o
					desenvolvimento sustentável com redução de emissões,
					instrumentalizando e engajando atores-chave para enfrentarem esse
					desafio. Nesta primeira edição, foram elencadas 87 soluções nos
					setores de Transportes, Energia Elétrica, Resíduos, Agropecuária e
					Mudanças de Uso da Terra e Florestas.
				</SectionDescription>
			</Section1>
			<div>
				<GreyBar />
				<Section2>
					<Img src={Image} alt="Main resource" />

					<ScrollReveal>
						<SectionCapDescription>
							Cada solução carrega um conjunto de mais de 20 informações
							complementares que buscam dar suporte para sua implementação nos
							municípios. Ao consultar uma solução proposta é possível, por
							exemplo, verificar seu impacto sobre as emissões, a indicação de
							para qual porte de município ela é recomendada ou quais
							cobenefícios e Objetivos de Desenvolvimento Sustentável (ODS)
							estão relacionados a tal ação. O SEEG Soluções é uma iniciativa
							dinâmica, e será constantemente atualizado para revisar as ações e
							incluir outras que contribuam para a construção de um futuro com
							desenvolvimento socioeconômico neutro em emissões de GEE. Nesse
							sentido, vale ressaltar ainda a importância de que a implementação
							municipal dessas soluções seja feita de maneira participativa,
							considerando as particularidades locais e as questões de gênero,
							raça e classe que permeiam a sociedade.
						</SectionCapDescription>
					</ScrollReveal>

					<ScrollReveal>
						<SectorCardContainer>
							{/* <SectorCard sector={agropecuaria} />
							<SectorCard sector={newEnergia} />
							<SectorCard sector={newTransportes} />
							<SectorCard sector={residuos} />
							<SectorCard sector={mut} /> */}
							{solutionsBySector.map((sector) => (
								<SectorCard sector={sector} />
							))}
						</SectorCardContainer>
					</ScrollReveal>

					<SubMenuContainer>
						<Button to="solutions">
							<TextButton>Ver todas as soluções</TextButton>
						</Button>
						{/* <Button>
							<TextButton>Entenda as soluções</TextButton>
						</Button> */}
					</SubMenuContainer>
				</Section2>
			</div>
		</>
	);
}

Sector.propTypes = {
	solutionsBySector: PropTypes.node.isRequired,
	// isOdd: PropTypes.node.isRequired,
};
