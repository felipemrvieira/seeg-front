import React from 'react';
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
// import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import { useHistory } from 'react-router-dom';
// import api from '../../../services/api';

// import { Container } from './styles';
// const schema = Yup.object().shape({
// 	name: Yup.string().required('Insira o nome do usuário'),
// 	email: Yup.string()
// 		.email('Insira um email válido')
// 		.required('O email é obrigatório'),
// 	password: Yup.string()
// 		.min(6, 'sua senha precisa ter pelo menos 6 caracteres')
// 		.required('A senha é obrigatória'),
// 	password_confirmation: Yup.string()
// 		.oneOf([Yup.ref('password'), null], 'Passwords must match')
// 		.required('Confirme sua senha'),
// });

function UserSignIn() {
	// const history = useHistory();

	// async function handleSubmit(data) {
	// 	console.tron.log(data);
	// 	try {
	// 		const response = await api.post('admin_auth/', data);

	// 		toast.success('Cadastro realizado com sucesso!');
	// 		console.tron.log(response);

	// 		history.push('/');
	// 	} catch (err) {
	// 		const message = err.response.data.errors.full_messages[0];
	// 		console.tron.log(message);

	// 		toast.error(`Falha no cadastro: ${message}`);
	// 	}
	// }

	return (
		<Background>
			<Card>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<FormContainer>
					<FormLabel>Bem Vindo</FormLabel>
					<Form action="/action_page.php">
						<Input
							type="text"
							id="email"
							name="fname"
							placeholder="Digite seu email"
						/>
						<Input
							type="text"
							id="fassword"
							name="lname"
							placeholder="Digite a senha"
						/>
						<Button>Entrar</Button>
					</Form>
				</FormContainer>
			</Card>
		</Background>
	);
}

export default UserSignIn;
