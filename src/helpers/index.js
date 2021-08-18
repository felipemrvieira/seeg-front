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
		.replaceAll(',', ', ');

	return ran;
}

export function breakLineHelper(text) {
	if (text) {
		return text.replace(/\r?\n/g, '<br />');
	}
	return '';
}
