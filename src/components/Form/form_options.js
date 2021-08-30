export const odsOptions = [
	{ id: 'ods_01', title: 'ODS 01' },
	{ id: 'ods_02', title: 'ODS 02' },
	{ id: 'ods_03', title: 'ODS 03' },
	{ id: 'ods_04', title: 'ODS 04' },
	{ id: 'ods_05', title: 'ODS 05' },
	{ id: 'ods_06', title: 'ODS 06' },
	{ id: 'ods_07', title: 'ODS 07' },
	{ id: 'ods_08', title: 'ODS 08' },
	{ id: 'ods_09', title: 'ODS 09' },
	{ id: 'ods_10', title: 'ODS 10' },
	{ id: 'ods_11', title: 'ODS 11' },
	{ id: 'ods_12', title: 'ODS 12' },
	{ id: 'ods_13', title: 'ODS 13' },
	{ id: 'ods_14', title: 'ODS 14' },
	{ id: 'ods_15', title: 'ODS 15' },
	{ id: 'ods_16', title: 'ODS 16' },
	{ id: 'ods_17', title: 'ODS 17' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

export const regionsOptions = [
	{ id: 'north', title: 'Norte' },
	{ id: 'north_east', title: 'Nordeste' },
	{ id: 'midwest', title: 'Centro-Oeste' },
	{ id: 'south', title: 'Sul' },
	{ id: 'southeast', title: 'Sudeste' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

export const rangesOptions = [
	{ id: 'range_1', title: 'Faixa I - 0 a 10 mil' },
	{ id: 'range_2', title: 'Faixa II - 10 mil a 50 mil' },
	{ id: 'range_3', title: 'Faixa III - 50 mil a 100 mil' },
	{ id: 'range_4', title: 'Faixa IV - 100 mil a 500 mil' },
	{ id: 'range_5', title: 'Faixa V - 500 mil a 1 milhão' },
	{ id: 'range_6', title: 'Faixa VI - 1 milhão a 5 milhões' },
	{ id: 'range_7', title: 'Faixa VII - 5 milhões ou mais' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

export const solutionOfOptions = [
	{ id: 'mitigation', title: 'Mitigação' },
	{ id: 'adaptation', title: 'Adaptação' },
	{ id: 'mitigation_and_adaptation', title: 'Mitigação e Adaptação' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

export const sphereOptions = [
	{ id: 'state', title: 'Estadual' },
	{ id: 'municipal', title: 'Municipal' },
	{ id: 'cross', title: 'Transversal' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

export const sectorOptions = [
	{ id: 'public_sector', title: 'Setor Público' },
	{ id: 'private_sector', title: 'Setor Privado' },
	{ id: 'public_and_private_sectors', title: 'Setores Público e Privado' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

export const impactOptions = [
	{ id: 'reduction', title: 'Redução' },
	{ id: 'neutralization', title: 'Neutralização' },
	{ id: 'removal', title: 'Remoção' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));
