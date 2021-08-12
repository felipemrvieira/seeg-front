import React from 'react';
import {} from './styles';
import Header from '../../components/MunicipalSolutions/Header';
import Footer from '../../components/MunicipalSolutions/Footer';
import Sector from '../../components/MunicipalSolutions/Sector';

const data = [
	{
		title: 'Agropecuária',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporiseligendi soluta? Nisi error quaerat odio consequatur eaque dolore, fugitprovident repudiandae, iure sit quam, minus pariatur accusantium quae magnam. Voluptatibus fugit, doloremque exercitationem ipsam cupiditate iste nisi sint perspiciatis, aperiam quos quidem ut voluptates, doloribus dignissimos a cumque soluta accusantium dolorum earum iure distinctio mollitia nemo aliquid beatae.',
		solutions: [
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '02',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '03',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '04',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '05',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '06',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '07',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '08',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '09',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '10',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '11',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '12',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '13',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
		],
	},
	{
		title: 'Energia',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporiseligendi soluta? Nisi error quaerat odio consequatur eaque dolore, fugitprovident repudiandae, iure sit quam, minus pariatur accusantium quae magnam. Voluptatibus fugit, doloremque exercitationem ipsam cupiditate iste nisi sint perspiciatis, aperiam quos quidem ut voluptates, doloribus dignissimos a cumque soluta accusantium dolorum earum iure distinctio mollitia nemo aliquid beatae.',
		solutions: [
			{
				number: '14',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '15',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '16',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
		],
	},
	{
		title: 'MUT',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporiseligendi soluta? Nisi error quaerat odio consequatur eaque dolore, fugitprovident repudiandae, iure sit quam, minus pariatur accusantium quae magnam. Voluptatibus fugit, doloremque exercitationem ipsam cupiditate iste nisi sint perspiciatis, aperiam quos quidem ut voluptates, doloribus dignissimos a cumque soluta accusantium dolorum earum iure distinctio mollitia nemo aliquid beatae.',
		solutions: [
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
		],
	},
	{
		title: 'Resíduos',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporiseligendi soluta? Nisi error quaerat odio consequatur eaque dolore, fugitprovident repudiandae, iure sit quam, minus pariatur accusantium quae magnam. Voluptatibus fugit, doloremque exercitationem ipsam cupiditate iste nisi sint perspiciatis, aperiam quos quidem ut voluptates, doloribus dignissimos a cumque soluta accusantium dolorum earum iure distinctio mollitia nemo aliquid beatae.',
		solutions: [
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
			{
				number: '01',
				description:
					'Incluir o zoneamento agropecuário e agroclimático no planejamento territorial',
				category: 'Cultivo de arroz',
			},
		],
	},
];

export default function Home() {
	return (
		<>
			<Header />
			{data.map((sector, i) => (
				<Sector sectorInfo={sector} isOdd={Boolean(i % 2)} />
			))}
			<Footer />
		</>
	);
}
