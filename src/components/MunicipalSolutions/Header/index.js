import React from 'react';
import ScrollReveal from '../ScrollReveal';
// import PropTypes from 'prop-types';
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
import Image from './assets/image.png';
import Nav from '../../Nav';
import SectorCard from '../SectorCard';
import Button from '../../Button';

const sectorList = [
	{ title: 'Agropecuária', solutionsCount: '28' },
	{ title: 'Energia elétrica', solutionsCount: '14' },
	{ title: 'Transporte', solutionsCount: '40' },
	{ title: 'MUT', solutionsCount: '16' },
	{ title: 'Resíduos', solutionsCount: '12' },
];
export default function Sector() {
	return (
		<>
			<Nav />
			<Section1>
				<SectionTitle>Soluções</SectionTitle>
				<SectionDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
					dignissimos doloremque neque est, ab fugit possimus maxime esse sit
					modi perspiciatis, molestiae labore soluta iusto aut deleniti officiis
					aperiam ducimus. Earum quaerat nemo ipsa dolorum pariatur nam
					repellendus, molestiae incidunt ducimus officia, nihil nostrum
					perferendis iure quae. Commodi est id rem, temporibus unde repudiandae
				</SectionDescription>
			</Section1>
			<div>
				<GreyBar />
				<Section2>
					<Img src={Image} alt="Main resource" />

					<ScrollReveal>
						<SectionCapDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							autem, aliquid aspernatur quisquam repellendus itaque illo
							pariatur temporibus id, assumenda eveniet eos ipsum natus illum
							est dolores? Libero, cumque consequatur! Consectetur
							exercitationem quidem magnam beatae sequi explicabo tenetur magni
							eaque eius omnis odit, necessitatibus quisquam voluptates. Rerum
							molestias dolorem eos tempora soluta repellendus excepturi
							voluptate eligendi! Blanditiis consequatur animi tempora. Ipsum
							quo aspernatur laudantium alias, totam libero enim dolorum nihil
							sint neque cum hic quidem quas officiis voluptatem cupiditate
							distinctio expedita rerum tempore impedit delectus deleniti?
							Nesciunt iste id voluptas. Earum debitis laborum dolorum labore
							sapiente modi blanditiis porro assumenda, soluta, minima tempora
							aliquid cupiditate quis eum, vero illum voluptatum beatae? Maxime
							optio nihil obcaecati possimus quos voluptate dolore suscipit!
							Obcaecati, provident! Totam, impedit sapiente sunt itaque vero,
							recusandae ex voluptatibus ipsum ab quae eligendi hic eum nesciunt
							quas delectus architecto eos deleniti sint officiis culpa ad quo
							laboriosam alias. Maxime explicabo, ipsum suscipit vel fugit
							recusandae ducimus velit qui et repudiandae illum
						</SectionCapDescription>
					</ScrollReveal>

					<ScrollReveal>
						<SectorCardContainer>
							{/* <SectorCard solution={sector} sectorTitle="Agropecuária" />
						<SectorCard solution={sector} sectorTitle="Energia Elétrica" />
						<SectorCard solution={sector} sectorTitle="Transporte" />
						<SectorCard solution={sector} sectorTitle="MUT" />
						<SectorCard solution={sector} sectorTitle="Resíduos" /> */}
							{sectorList.map((sector) => (
								<SectorCard sector={sector} />
							))}
						</SectorCardContainer>
					</ScrollReveal>

					<SubMenuContainer>
						<Button to="solutions">
							<TextButton>Ver todas as soluções</TextButton>
						</Button>
						<Button>
							<TextButton>Entenda as soluções</TextButton>
						</Button>
					</SubMenuContainer>
				</Section2>
			</div>
		</>
	);
}

// Sector.propTypes = {
// 	sectorInfo: PropTypes.node.isRequired,
// 	isOdd: PropTypes.node.isRequired,
// };
