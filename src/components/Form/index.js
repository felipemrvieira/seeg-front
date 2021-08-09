import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
	FormContainer,
	Form,
	Input,
	TextArea,
	Button,
	EditButton,
	Label,
} from './styles';

export default function Index({ disabled, id, solution }) {
	const {
		register,
		handleSubmit,
		// watch,
		// formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		reset(solution);
	}, [reset, solution]);

	const history = useHistory();
	// console.log(watch('number')); // watch input value by passing the name of it

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
				<TextArea
					placeholder="Título"
					disabled={disabled}
					rows="1"
					{...register('title')}
				>
					{solution.title}
				</TextArea>

				<Label htmlFor="number">Descrição</Label>
				<TextArea
					placeholder="descrição"
					disabled={disabled}
					rows="8"
					{...register('description')}
				/>

				<Label htmlFor="number">Guia de políticas públicas</Label>
				<TextArea
					placeholder="Guia de políticas públicas"
					disabled={disabled}
					rows="9"
					{...register('guiding_public_policies')}
				/>

				<Label htmlFor="number">Referências técnicas</Label>
				<TextArea
					placeholder="Referências técnicas"
					disabled={disabled}
					rows="8"
					{...register('technical_references')}
				/>

				<Label htmlFor="number">Exemplos de aplicação municipal</Label>
				<TextArea
					placeholder="Exemplos de aplicação municipal"
					disabled={disabled}
					rows="6"
					{...register('examples_of_municipal_application')}
				/>

				<Label htmlFor="number">Categoria da ação</Label>
				<TextArea
					placeholder="Categoria da ação"
					disabled={disabled}
					rows="3"
					{...register('action_category')}
				/>

				<Label htmlFor="number">Cobenefícios ambientais</Label>
				<TextArea
					placeholder="Cobenefícios ambientais"
					disabled={disabled}
					rows="6"
					{...register('environmental_cobenefits')}
				/>

				<Label htmlFor="number">Cobenefìcios sociais</Label>
				<TextArea
					placeholder="Cobenefícios sociais"
					disabled={disabled}
					rows="6"
					{...register('social_cobenefits')}
				/>

				<Label htmlFor="number">Cobenefícios econômicos</Label>
				<TextArea
					placeholder="Cobenefícios econômicos"
					disabled={disabled}
					rows="8"
					{...register('economic_cobenefits')}
				/>

				<Label htmlFor="number">Modo de operação municipal</Label>
				<TextArea
					placeholder="Modo de operação municipal"
					disabled={disabled}
					rows="2"
					{...register('municipal_operating_mode')}
				/>

				<Label htmlFor="number">Alinhamento com NDC</Label>

				<TextArea
					placeholder="Alinhamento com NDC"
					disabled={disabled}
					rows="2"
					{...register('alignment_with_ndc')}
				/>

				<Label htmlFor="number">Investimento Necessário</Label>
				<TextArea
					placeholder="Investimento necessário"
					disabled={disabled}
					rows="2"
					{...register('necessary_investment')}
				/>

				<Label htmlFor="number">Financiamento</Label>
				<TextArea
					placeholder="Financiamento"
					disabled={disabled}
					rows="5"
					{...register('financing')}
				/>

				<Label htmlFor="number">Atores chave</Label>
				<TextArea
					placeholder="Atores chave"
					disabled={disabled}
					rows="6"
					{...register('key_actors')}
				/>

				<Label htmlFor="number">Desafios</Label>
				<TextArea
					placeholder="Desafios"
					disabled={disabled}
					rows="6"
					{...register('challenges')}
				/>

				<Label htmlFor="number">Tempo de implementação</Label>
				<TextArea
					placeholder="Tempo de implementação"
					disabled={disabled}
					rows="2"
					{...register('implementation_time')}
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
	},
};
