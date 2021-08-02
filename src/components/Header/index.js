import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LogoContainer, Logo, Button, NavbarWrapper, Link } from './styles';
// import api from '../../../services/api';

function Header() {
	return (
		<NavbarWrapper>
			<Navbar bg="white" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<LogoContainer>
							<Logo />
						</LogoContainer>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<Link to="/solutions">Listar Soluções</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/solutions/new">Cadastrar Soluções</Link>
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
						<Button>Sair</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</NavbarWrapper>
	);
}

export default Header;