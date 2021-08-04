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
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					placeholder="Número da solução"
					disabled={disabled}
					{...register('number')}
				/>
				<TextArea
					placeholder="Título"
					disabled={disabled}
					rows="3"
					{...register('title')}
				>
					{solution.title}
				</TextArea>
				<TextArea
					placeholder="descrição"
					disabled={disabled}
					rows="10"
					{...register('description')}
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
	}),
};

Index.defaultProps = {
	disabled: '',
	id: 0,
	solution: { number: '#0', title: 'titulo', description: 'descricao' },
};
