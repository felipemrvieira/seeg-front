import React, { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import BTable from 'react-bootstrap/Table';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Background, Link } from './styles';
import api from '../../../services/api';

import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';

import Header from '../../../components/Header';

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const { getTableProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});

	// Render the UI for your table
	return (
		<BTable striped bordered hover size="sm" {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</BTable>
	);
}

export default function Solution() {
	const [solutions, setSolutions] = useState([]);
	async function loadSolutions() {
		try {
			const response = await api.get('/solutions');
			setSolutions(response.data);
			console.log(response.data);
			// console.tron.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	useEffect(() => {
		loadSolutions();
	}, []);

	const data = useMemo(() => solutions, [solutions]);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Número',
				accessor: 'number',
			},
			{
				Header: 'Nome',
				accessor: 'title',
			},
			{
				Header: '',
				accessor: 'id',
				Cell: (row) => (
					<Link className="btn btn-light" to={`/admin/solutions/${row.value}`}>
						<span className="text">Visualizar</span>
					</Link>
				),
			},
		],
		[]
	);
	return (
		<Background>
			<Header />
			<Container>
				<PageHeader>Listar Soluções</PageHeader>
				<Card>
					<Table columns={columns} data={data} />
				</Card>
			</Container>
		</Background>
	);
}

Table.propTypes = {
	columns: PropTypes.element,
	data: PropTypes.element,
};

Table.defaultProps = {
	columns: [],
	data: [],
};
