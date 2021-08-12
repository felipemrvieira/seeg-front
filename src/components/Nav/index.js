import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import { logout } from '../../services/auth';

// import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LogoContainer, Logo, Button, NavbarWrapper, Link } from './styles';
// import api from '../../../services/api';

function Header() {
	function sair() {
		logout();
		window.location.reload();
	}
	const [showModal, setShowModal] = useState(false);

	return (
		<NavbarWrapper>
			<Navbar bg="white" expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<LogoContainer>
							<Logo />
						</LogoContainer>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<Link to="/admin/solutions">Listar Soluções</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/admin/solutions/new">Cadastrar Soluções</Link>
							</Nav.Link>
							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Button onClick={() => setShowModal(true)}>Sair</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Modal
				show={showModal}
				onHide={() => setShowModal(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						Você deseja sair?
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Selecione a opção Sair abaixo se você quer encerrar a sua sessão
					atual.
				</Modal.Body>
				<Modal.Footer>
					<button
						onClick={() => setShowModal(false)}
						className="btn btn-secondary"
						type="button"
						data-dismiss="modal"
					>
						Cancel
					</button>
					<button type="button" className="btn btn-primary" onClick={sair}>
						Sair
					</button>
				</Modal.Footer>
			</Modal>
		</NavbarWrapper>
	);
}

export default Header;
