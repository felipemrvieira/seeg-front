export function solutionOfHelper(solutionOf) {
	switch (solutionOf) {
		case 'mitigation':
			return 'Mitigação';
		case 'adaptation':
			return 'Adaptaçåo';
		case 'mitigation_and_adaptation':
			return 'Mitigação e Adaptação';

		default:
			return '';
	}
}

export function sphereHelper(sphere) {
	switch (sphere) {
		case 'state':
			return 'Estadual';
		case 'municipal':
			return 'Municipal';
		case 'cross':
			return 'Transversal';

		default:
			return '';
	}
}

export function sectorHelper(sector) {
	switch (sector) {
		case 'public_sector':
			return 'Setor Público';
		case 'private_sector':
			return 'Setor Privado';
		case 'public_and_private_sectors':
			return 'Setores Público e Privado';

		default:
			return '';
	}
}
export function sectorDescriptionHelper(sector) {
	switch (sector) {
		case 'Agropecuária':
			return 'As soluções propostas para o setor de Agropecuária buscam disseminar e consolidar a utilização de práticas e tecnologias conservacionistas de baixas emissões nos sistemas produtivos, com a promoção de mitigação e adaptação frente às mudanças climáticas. Para isso, foram pensadas soluções que estejam ao alcance de municípios e que permitam incentivar a transição para uma agropecuária de baixas emissões, atendendo as demandas atuais e futuras por produtos agropecuários.';
		case 'Energia':
			return (
				'A partir do consumo de energia elétrica em prédios públicos, residências e atividades produtivas presentes em seus territórios, os municípios são diretamente responsáveis pela demanda de eletricidade gerada em usinas do sistema elétrico nacional. Apesar da eletricidade brasileira ser majoritariamente produzida por meio de fontes renováveis, uma maior demanda por energia elétrica pode induzir uma maior geração termelétrica, que emite gases de efeito estufa. É possível diminuir essas emissões agindo sobre a oferta, aumentando a participação de fontes renováveis na geração de eletricidade, ou sobre a demanda, reduzindo o consumo de energia. O planejamento da oferta	possui competência nacional, mas ao nível municipal	podem ser atribuídas ações para atuar em direção à	diminuição do consumo. Nesse sentido, foram listadas	soluções focadas em eficiência energética e na maior utilização de tecnologias de geração local, distribuída e renovável.' +
				' Por ser a maior consumidora de energia no Brasil, a atividade de transportes é a mais expressiva emissora de gases de efeito estufa provenientes da queima de combustíveis. Dos 5570 municípios brasileiros, 5068 têm no transporte sua maior fonte de emissões dentro do setor de Energia. Por isso, ações de mitigação a nível local são fundamentais, sobretudo considerando que o poder municipal possui importantes atribuições para promovê-las. Nesse sentido, foram listadas soluções focadas na mobilidade urbana, que utilizam estratégias como planejamento territorial, redução de viagens motorizadas e priorização da mobilidade ativa e do deslocamento coletivo de passageiros.'
			);
		case 'MUT':
		case 'Mudança de Uso da Terra e Florestas':
			return 'O desmatamento é uma das principais fontes de emissões do setor de MUT. Neste caso, o setor possui	diretrizes de fiscalização e controle do desmatamento	que, em sua maioria, são de competência estadual ou federal. No entanto, acredita-se que ações	municipais podem promover sinergias entre os entes federativos, alavancando práticas para coibir o	desmatamento e, simultaneamente, incentivar ações	de conservação e restauração da vegetação nativa. Assim, implementar as soluções propostas pode reduzir a contribuição dos municípios na emissão de gases de efeito estufa e, ao mesmo tempo, favorecer localmente uma agenda sustentável positiva.';
		case 'Resíduos':
			return 'As soluções do setor de Resíduos contemplam ações relacionadas com tratamento de resíduos sólidos e	efluentes domésticos, que apresentam potencial de abater as emissões setoriais de gases de efeito estufa ou adaptar os governos locais frente às mudanças do clima. Foram consolidadas soluções que estejam ao alcance de municípios ou que exijam uma articulação entre os entes federativos, sempre em sintonia com os planos e políticas nacionais.';
		default:
			return '';
	}
}

export function impactHelper(impact) {
	switch (impact) {
		case 'reduction':
			return 'Redução';
		case 'neutralization':
			return 'Neutralização';
		case 'removal':
			return 'Remoção';

		default:
			return '';
	}
}

export function regionHelper(regions = []) {
	const reg = String(regions)
		.replaceAll('north_east', 'Nordeste')
		.replaceAll('north', 'Norte')
		.replaceAll('southeast', 'Sudeste')
		.replaceAll('south', 'Sul')
		.replaceAll('midwest', 'Centro-oeste')
		.replaceAll(',', ', ');

	return reg;
}

export function rangeHelper(range = []) {
	const ran = String(range)
		.replaceAll('range_1', 'Faixa I - 0 a 10 mil')
		.replaceAll('range_2', 'Faixa II - 10 mil a 50 mil')
		.replaceAll('range_3', 'Faixa III - 50 mil a 100 mil')
		.replaceAll('range_4', 'Faixa IV - 100 mil a 500 mil')
		.replaceAll('range_5', 'Faixa V - 500 mil a 1 milhão')
		.replaceAll('range_6', 'Faixa VI - 1 milhão a 5 milhões')
		.replaceAll('range_7', 'Faixa VII - 5 milhões ou mais')
		.replaceAll(',', ', <br>');

	return ran;
}

export function breakLineHelper(text) {
	if (text) {
		return text.replace(/\r?\n/g, '<br />');
	}
	return '';
}
export function solutionNameHelper(text) {
	if (text === 'Mudança de Uso da Terra e Florestas') {
		return 'MUT';
	}
	if (text === 'Energia') {
		return 'Energia Elétrica e Transportes';
	}
	return text;
}
export function solutionSubNameHelper(text) {
	if (text !== 'Mudança de Uso da Terra e Florestas') {
		return '';
	}
	return text;
}
