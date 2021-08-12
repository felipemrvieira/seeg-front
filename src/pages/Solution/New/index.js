import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Background, ButtonWrapper, Label, Input } from './styles';
import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';
import Header from '../../../components/Header';
import api from '../../../services/api';

function Solution() {
	const [file, setFile] = useState({});
	const history = useHistory();

	function fileUpload(fileparam) {
		const formData = new FormData();
		formData.append('xlsx_file', fileparam);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		return api.post(`/solutions`, formData, config);
	}

	function onFormSubmit(e) {
		e.preventDefault();
		console.log('submited');
		fileUpload(file).then((response) => {
			console.log(response.data);
			toast.success('Informação cadastrada com sucesso!!');
			history.push('/admin/solutions');
		});
	}

	function onChange(e) {
		setFile(e.target.files[0]);
	}

	return (
		<Background>
			<Header />
			<Container>
				<PageHeader>Cadastrar Soluções</PageHeader>
				<Card>
					<p>Selecione um arquivo no formato xlsx</p>
					<form onSubmit={onFormSubmit}>
						<ButtonWrapper>
							<Label>Selecione o arquivo</Label>
							<Input
								type="file"
								name="upload"
								onChange={onChange}
								placeholder="Selecione o arquivo"
							/>
						</ButtonWrapper>
						<button className="btn btn-light mt-2" type="submit">
							Upload
						</button>
					</form>
				</Card>
			</Container>
		</Background>
	);
}

export default Solution;
