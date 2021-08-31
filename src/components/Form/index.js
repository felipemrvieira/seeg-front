import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
	odsOptions,
	regionsOptions,
	impactOptions,
	rangesOptions,
	sectorOptions,
	sphereOptions,
	solutionOfOptions,
} from './form_options';

import api from '../../services/api';

import {
	FormContainer,
	Form,
	Input,
	// TextArea,
	Button,
	EditButton,
	Label,
	Select,
} from './styles';

export default function Index({ disabled, id, solution }) {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
		control,
	} = useForm();

	useEffect(() => {
		reset(solution);
	}, [reset, solution]);

	useEffect(() => {
		register('guiding_public_policies', { required: true, minLength: 11 });
	}, [register]);

	const onGuidingEditorStateChange = (editorState) => {
		setValue('guiding_public_policies', editorState);
	};
	const onDescriptionEditorStateChange = (editorState) => {
		setValue('description', editorState);
	};
	const onTechnicalEditorStateChange = (editorState) => {
		setValue('technical_references', editorState);
	};
	const onExamplesEditorStateChange = (editorState) => {
		setValue('examples_of_municipal_application', editorState);
	};
	const onActionEditorStateChange = (editorState) => {
		setValue('action_category', editorState);
	};
	const onEnvironmentalEditorStateChange = (editorState) => {
		setValue('environmental_cobenefits', editorState);
	};
	const onSocialEditorStateChange = (editorState) => {
		setValue('social_cobenefits', editorState);
	};
	const onEcomomicEditorStateChange = (editorState) => {
		setValue('economic_cobenefits', editorState);
	};
	const onMunicipalEditorStateChange = (editorState) => {
		setValue('municipal_operating_mode', editorState);
	};
	const onAlignmentEditorStateChange = (editorState) => {
		setValue('alignment_with_ndc', editorState);
	};
	const onNecessaryEditorStateChange = (editorState) => {
		setValue('necessary_investment', editorState);
	};
	const onFinancingEditorStateChange = (editorState) => {
		setValue('financing', editorState);
	};
	const onKeyEditorStateChange = (editorState) => {
		setValue('key_actors', editorState);
	};
	const onChallengesEditorStateChange = (editorState) => {
		setValue('challenges', editorState);
	};
	const onImplementationEditorStateChange = (editorState) => {
		setValue('implementation_time', editorState);
	};

	const guidingPublicPoliciesValue = watch('guiding_public_policies');
	const descriptionValue = watch('description');
	const technicalReferencesValue = watch('technical_references');
	const examplesOfMunicipalApplicationValue = watch(
		'examples_of_municipal_application'
	);
	const actionCategoryValue = watch('action_category');
	const environmentalCobenefitsValue = watch('environmental_cobenefits');
	const socialCobenefitsValue = watch('social_cobenefits');
	const economicCobenefitsValue = watch('economic_cobenefits');
	const municipalOperatingModeValue = watch('municipal_operating_mode');
	const alignmentWithNdcValue = watch('alignment_with_ndc');
	const necessaryInvestmentValue = watch('necessary_investment');
	const financingValue = watch('financing');
	const keyActorsValue = watch('key_actors');
	const challengesValue = watch('challenges');
	const implementationTimeValue = watch('implementation_time');

	const history = useHistory();

	async function onSubmit(data) {
		try {
			console.log(data);
			await api.patch(`/solutions/${id}`, data);
			toast.success('Informação atualizada com sucesso!!');
			history.push('/admin/solutions');
		} catch (err) {
			// const message = err.response.data.errors.full_messages[0];
			// console.log(message);

			// toast.error(`Falha no cadastro: ${message}`);
			toast.error(`Erro`);
		}
	}

	console.log(solutionOfOptions.map((c) => c.value));
	return (
		<FormContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label htmlFor="number">Número da solução</Label>
				<Input
					placeholder="Número da solução"
					disabled={disabled}
					{...register('number')}
				/>
				<Label htmlFor="number">Título</Label>
				<Input
					placeholder="Título"
					disabled={disabled}
					{...register('title')}
				/>
				<Label htmlFor="number">Descrição</Label>
				<ReactQuill
					theme="snow"
					readOnly={disabled}
					value={
						descriptionValue
							? descriptionValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onDescriptionEditorStateChange}
				/>
				<Label htmlFor="number">Solução de</Label>

				<Controller
					name="solution_of"
					control={control}
					defaultValue={solutionOfOptions.map((c) => c.value)}
					render={({ field: { onChange, value, ref } }) => (
						<Select
							inputRef={ref}
							onChange={(val) => onChange(val.value)}
							options={solutionOfOptions}
							value={solutionOfOptions.filter((c) =>
								// value ? value.includes(c.value) : []
								value ? value === c.value : []
							)}
						/>
					)}
				/>

				<p className="Error">{errors.emailContent && 'Enter valid content'}</p>
				<Label htmlFor="number">Guia de políticas públicas</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						guidingPublicPoliciesValue
							? guidingPublicPoliciesValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onGuidingEditorStateChange}
				/>
				<p className="Error">{errors.emailContent && 'Enter valid content'}</p>
				<Label htmlFor="number">Referências técnicas</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						technicalReferencesValue
							? technicalReferencesValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onTechnicalEditorStateChange}
				/>
				<Label htmlFor="number">Exemplos de aplicação municipal</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						examplesOfMunicipalApplicationValue
							? examplesOfMunicipalApplicationValue.replace(
									/\r?\n/g,
									'<br />'
							  ) || ''
							: ''
					}
					onChange={onExamplesEditorStateChange}
				/>

				<Label htmlFor="number">Regiões Aplicáveis</Label>
				<Controller
					name="regions"
					control={control}
					defaultValue={regionsOptions.map((c) => c.value)}
					render={({ field: { onChange, value, ref } }) => (
						<Select
							isMulti
							inputRef={ref}
							onChange={(val) => onChange(val.value)}
							options={regionsOptions}
							value={regionsOptions.filter((c) =>
								// value ? value.includes(c.value) : []
								value ? value === c.value : []
							)}
						/>
					)}
				/>

				<Label htmlFor="number">Faixas Populacionais Aplicáveis</Label>
				<Controller
					name="ranges"
					control={control}
					defaultValue={rangesOptions.map((c) => c.value)}
					render={({ field: { onChange, value, ref } }) => (
						<Select
							isMulti
							inputRef={ref}
							onChange={(val) => onChange(val.value)}
							options={rangesOptions}
							value={rangesOptions.filter((c) =>
								// value ? value.includes(c.value) : []
								value ? value === c.value : []
							)}
						/>
					)}
				/>
				<Select
					// isDisabled="true"
					name="regions"
					isMulti
					options={rangesOptions}
					// onChange={handleSubjectChange}
					placeholder="Selecione"
					defaultValue={[rangesOptions[2], rangesOptions[3]]}

					// value={{
					// 	id: solution.fundamental_sector,
					// 	label: sectorHelper(solution.fundamental_sector),
					// }}
				/>
				<Label htmlFor="number">
					Setor Fundamental para a realização da solução
				</Label>
				<Controller
					name="fundamental_sector"
					control={control}
					defaultValue={sectorOptions.map((c) => c.value)}
					render={({ field: { onChange, value, ref } }) => (
						<Select
							inputRef={ref}
							onChange={(val) => onChange(val.value)}
							options={sectorOptions}
							value={sectorOptions.filter((c) =>
								// value ? value.includes(c.value) : []
								value ? value === c.value : []
							)}
						/>
					)}
				/>

				<Label htmlFor="number">Impacto sobre as Emissões</Label>
				<Controller
					name="impact_on_emissions"
					control={control}
					defaultValue={impactOptions.map((c) => c.value)}
					render={({ field: { onChange, value, ref } }) => (
						<Select
							inputRef={ref}
							onChange={(val) => onChange(val.value)}
							options={impactOptions}
							value={impactOptions.filter((c) =>
								// value ? value.includes(c.value) : []
								value ? value === c.value : []
							)}
						/>
					)}
				/>
				<Label htmlFor="number">Categoria da ação</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						actionCategoryValue
							? actionCategoryValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onActionEditorStateChange}
				/>

				<Label htmlFor="number">Objetivos do desenvolvimento sustentável</Label>
				<Select
					// isDisabled="true"
					name="regions"
					isMulti
					options={odsOptions}
					// onChange={handleSubjectChange}
					placeholder="Selecione"
					defaultValue={[odsOptions[2], odsOptions[3]]}

					// value={{
					// 	id: solution.fundamental_sector,
					// 	label: sectorHelper(solution.fundamental_sector),
					// }}
				/>

				<Label htmlFor="number">Cobenefícios ambientais</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						environmentalCobenefitsValue
							? environmentalCobenefitsValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onEnvironmentalEditorStateChange}
				/>
				<Label htmlFor="number">Cobenefìcios sociais</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						socialCobenefitsValue
							? socialCobenefitsValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onSocialEditorStateChange}
				/>
				<Label htmlFor="number">Cobenefícios econômicos</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						economicCobenefitsValue
							? economicCobenefitsValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onEcomomicEditorStateChange}
				/>
				<Label htmlFor="number">Esfera</Label>
				<Controller
					name="sphere"
					control={control}
					defaultValue={sphereOptions.map((c) => c.value)}
					render={({ field: { onChange, value, ref } }) => (
						<Select
							inputRef={ref}
							onChange={(val) => onChange(val.value)}
							options={sphereOptions}
							value={sphereOptions.filter((c) =>
								// value ? value.includes(c.value) : []
								value ? value === c.value : []
							)}
						/>
					)}
				/>
				<Label htmlFor="number">Modo de operação municipal</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						municipalOperatingModeValue
							? municipalOperatingModeValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onMunicipalEditorStateChange}
				/>
				<Label htmlFor="number">Alinhamento com NDC</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						alignmentWithNdcValue
							? alignmentWithNdcValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onAlignmentEditorStateChange}
				/>
				<Label htmlFor="number">Investimento Necessário</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						necessaryInvestmentValue
							? necessaryInvestmentValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onNecessaryEditorStateChange}
				/>
				<Label htmlFor="number">Financiamento</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						financingValue
							? financingValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onFinancingEditorStateChange}
				/>
				<Label htmlFor="number">Atores chave</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						keyActorsValue
							? keyActorsValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onKeyEditorStateChange}
				/>
				<Label htmlFor="number">Desafios</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						challengesValue
							? challengesValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onChallengesEditorStateChange}
				/>
				<Label htmlFor="number">Tempo de implementação</Label>
				<ReactQuill
					readOnly={disabled}
					theme="snow"
					value={
						implementationTimeValue
							? implementationTimeValue.replace(/\r?\n/g, '<br />') || ''
							: ''
					}
					onChange={onImplementationEditorStateChange}
				/>
				{!disabled ? (
					<Button disabled={disabled}>Salvar</Button>
				) : (
					<EditButton to={`/admin/solutions/${id}/edit`}>
						Habilitar Edição
					</EditButton>
				)}
			</Form>
		</FormContainer>
	);
}

Index.propTypes = {
	disabled: PropTypes.string,
	id: PropTypes.string,
	solution: PropTypes.shape({
		// id: PropTypes.number,
		number: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		guiding_public_policies: PropTypes.string,
		solution_of: PropTypes.string,
		impact_on_emissions: PropTypes.string,
		fundamental_sector: PropTypes.string,
		sphere: PropTypes.string,
		applicable_regions: PropTypes.arrayOf(PropTypes.string),
		applicable_population_ranges: PropTypes.arrayOf(PropTypes.string),
		sustainable_development_goals: PropTypes.arrayOf(PropTypes.string),
	}),
};

Index.defaultProps = {
	disabled: '',
	id: 0,
	solution: {
		number: '#0',
		title: 'titulo',
		description: 'descricao',
		guiding_public_policies: 'Guia',
		solution_of: 'solução de ...',
		impact_on_emissions: 'Impacto',
		fundamental_sector: 'Setor fundamental',
		sphere: 'Esfera',
		applicable_regions: ['reg'],
		applicable_population_ranges: ['rang'],
		sustainable_development_goals: ['goal'],
	},
};
