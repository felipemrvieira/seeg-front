import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import api from '../../../../services/api';
// import axios from 'axios';
import { login, isAuthenticated } from '../../../../services/auth';

import {
	Card,
	Background,
	LogoContainer,
	FormContainer,
	Logo,
	FormLabel,
	Form,
	Input,
	Button,
} from './styles';
// import api from '../../../services/api';

function UserSignIn() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// const onSubmit = (data) => console.log(data);
	console.log(watch('email')); // watch input value by passing the name of it
	const history = useHistory();

	const signed = isAuthenticated();

	async function onSubmit(data) {
		console.log(signed);
		console.log(data);
		try {
			const response = await api.post('auth/sign_in', data);
			// const response = await axios.post(
			// 	'localhost:3000/api/v1/auth/sign_in',
			// 	data
			// );

			const { client, uid, expiry } = response.headers;
			const token = response.headers['access-token'];
			console.log(token);
			console.log(client);
			console.log(uid);
			console.log(response.headers);

			login(token, expiry, client, uid);
			toast.success('Bem vindo!');
			console.log(data);
			history.push('/');
		} catch (err) {
			// const message = err.response.data.errors.full_messages[0];
			// console.tron.log(message);

			// toast.error(`Falha no cadastro: ${message}`);
			toast.error(`Falha no login`);
		}
	}

	return (
		<Background>
			<Card>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<FormContainer>
					<FormLabel>Bem Vindo</FormLabel>
					<Form onSubmit={handleSubmit(onSubmit)}>
						{errors.email && <span>Este campo é obrigatório</span>}
						<Input
							type="email"
							id="email"
							name="email"
							placeholder="Digite seu email"
							{...register('email', { required: true })}
						/>
						{errors.password && <span>Este campo é obrigatório</span>}
						<Input
							type="password"
							id="fassword"
							name="lname"
							placeholder="Digite a senha"
							{...register('password', { required: true })}
						/>
						<Button>Entrar</Button>
					</Form>
				</FormContainer>
			</Card>
		</Background>
	);
}

export default UserSignIn;
