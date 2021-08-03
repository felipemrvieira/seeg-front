import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormContainer, Form, Input, Button, EditButton } from './styles';

export default function Index({ disabled, id }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(disabled);

	// const onSubmit = (data) => console.log(data);
	console.log(watch('email')); // watch input value by passing the name of it

	const history = useHistory();

	async function onSubmit(data) {
		// console.tron.log(data);
		try {
			// const response = await api.post('admin_auth/sign_in', data);

			// const {client, uid, expiry} = response.headers;
			// const token = response.headers['access-token'];

			// login(token, expiry, client, uid);
			toast.success('Bem vindo!');
			console.log(data);
			history.push('/');
		} catch (err) {
			// const message = err.response.data.errors.full_messages[0];
			// console.tron.log(message);

			// toast.error(`Falha no cadastro: ${message}`);
			toast.error(`Falha no cadastro:`);
		}
	}
	return (
		<FormContainer>
			{/* <FormLabel>Bem Vindo</FormLabel> */}
			<Form onSubmit={handleSubmit(onSubmit)}>
				{errors.email && <span>Este campo é obrigatório</span>}
				<Input
					type="email"
					id="email"
					name="email"
					placeholder="Digite seu email"
					disabled={disabled}
					{...register('email', { required: true })}
				/>
				{errors.password && <span>Este campo é obrigatório</span>}
				<Input
					type="password"
					id="password"
					name="lname"
					placeholder="Digite a senha"
					disabled={disabled}
					{...register('password', { required: true })}
				/>
				{!disabled ? (
					<Button disabled={disabled}>Salvar</Button>
				) : (
					<EditButton to={`/solutions/${id}/edit`}>Editar</EditButton>
				)}
			</Form>
		</FormContainer>
	);
}

Index.propTypes = {
	disabled: PropTypes.string,
	id: PropTypes.string,
};

Index.defaultProps = {
	disabled: '',
	id: 0,
};
