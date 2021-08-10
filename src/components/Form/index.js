import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';

import api from '../../services/api';

import {
	FormContainer,
	Form,
	Input,
	// TextArea,
	Button,
	EditButton,
	Label,
} from './styles';

export default function Index({ disabled, id, solution }) {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const [,] = useState('');

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
			await api.patch(`/solutions/${id}`, data);
			toast.success('Informação atualizada com sucesso!!');
			history.push('/solutions');
		} catch (err) {
			// const message = err.response.data.errors.full_messages[0];
			// console.log(message);

			// toast.error(`Falha no cadastro: ${message}`);
			toast.error(`Erro`);
		}
	}

	const solutionOfOptions = [
		{ id: 'mitigation', title: 'Mitigação' },
		{ id: 'adaptation', title: 'Adaptação' },
		{ id: 'mitigation_and_adaptation', title: 'Mitigação e Adaptação' },
	].map((item) => ({
		value: item.id,
		label: item.title,
	}));

	function solutionOfHelper(solutionOf) {
		switch (solutionOf) {
			case 'mitigation':
				return 'Mitigação';
			case 'adaptation':
				return 'Adaptaçåo';
			case 'mitigation_and_adaptation':
				return 'Mitigação e Adaptação';

			default:
				return 'Selecione';
		}
	}

	const sphereOptions = [
		{ id: 'state', title: 'Estadual' },
		{ id: 'municipal', title: 'Municipal' },
		{ id: 'cross', title: 'Transversal' },
	].map((item) => ({
		value: item.id,
		label: item.title,
	}));

	function sphereHelper(impact) {
		switch (impact) {
			case 'state':
				return 'Estadual';
			case 'municipal':
				return 'Municipal';
			case 'cross':
				return 'Transversal';

			default:
				return 'Selecione';
		}
	}
	const sectorOptions = [
		{ id: 'public_sector', title: 'Setor Público' },
		{ id: 'private_sector', title: 'Setor Privado' },
		{ id: 'public_and_private_sectors', title: 'Setores Público e Privado' },
	].map((item) => ({
		value: item.id,
		label: item.title,
	}));

	function sectorHelper(impact) {
		switch (impact) {
			case 'public_sector':
				return 'Setor Público';
			case 'private_sector':
				return 'Setor Privado';
			case 'public_and_private_sectors':
				return 'Setores Público e Privado';

			default:
				return 'Selecione';
		}
	}
	const impactOptions = [
		{ id: 'reduction', title: 'Redução' },
		{ id: 'neutralization', title: 'Neutralização' },
		{ id: 'removal', title: 'Remoção' },
	].map((item) => ({
		value: item.id,
		label: item.title,
	}));

	function impactHelper(impact) {
		switch (impact) {
			case 'reduction':
				return 'Redução';
			case 'neutralization':
				return 'Neutralização';
			case 'removal':
				return 'Remoção';

			default:
				return 'Selecione';
		}
	}

	return (
		<FormContainer>
			{/* Visualização do texto formatado */}
			{/* <pre
				dangerouslySetInnerHTML={{ __html: solution.guiding_public_policies }}
			/> */}

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
				<Select
					// isDisabled="true"
					name="solution_of"
					options={solutionOfOptions}
					// onChange={handleSubjectChange}
					placeholder="Selecione"
					value={{
						id: solution.solution_of,
						label: solutionOfHelper(solution.solution_of),
					}}
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

				<Label htmlFor="number">
					Setor Fundamental para a realização da solução
				</Label>
				<Select
					// isDisabled="true"
					name="sector"
					options={sectorOptions}
					// onChange={handleSubjectChange}
					placeholder="Selecione"
					value={{
						id: solution.fundamental_sector,
						label: sectorHelper(solution.fundamental_sector),
					}}
				/>
				<Label htmlFor="number">Impacto sobre as Emissões</Label>
				<Select
					// isDisabled="true"
					name="impact"
					options={impactOptions}
					// onChange={handleSubjectChange}
					placeholder="Selecione"
					value={{
						id: solution.impact_on_emissions,
						label: impactHelper(solution.impact_on_emissions),
					}}
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
				<Select
					// isDisabled="true"
					name="sphere"
					options={sphereOptions}
					// onChange={handleSubjectChange}
					placeholder="Selecione"
					value={{
						id: solution.sphere,
						label: sphereHelper(solution.sphere),
					}}
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
					<EditButton to={`/solutions/${id}/edit`}>Habilitar Edição</EditButton>
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
		solution_of: 'Mitigação ou Adaptação',
		impact_on_emissions: 'Impacto',
		fundamental_sector: 'Setor fundamental',
		sphere: 'Esfera',
	},
};
