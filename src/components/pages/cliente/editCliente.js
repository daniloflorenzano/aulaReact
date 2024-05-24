import { PutCliente } from '../../../services/serviceCliente';
import { useState, useEffect } from 'react';
import { GetClienteById } from '../../../services/serviceCliente';
import { Link, useParams } from 'react-router-dom';

const EditCliente = () => {
	let { clientId } = useParams();

	const [cliente, setCliente] = useState({});

	useEffect(() => {
		GetClienteById(clientId).then((res) => setCliente(res.data));
	}, []);

	const handleChange = (event, value) => {
		let fieldName = mapFieldName(event.target.id);

		cliente[fieldName] = value;
		setCliente({ ...cliente });
	};

	const handleSalvar = () => {
		let mappedCliente = remapClientWithCorretFieldName(cliente);

		PutCliente(mappedCliente).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<div className='container'>
			<h1>Editar Cliente {clientId}</h1>

			<div>
				<div>
					<label>Nome</label>
					<input
						type='text'
						id='NomeCliente'
						value={cliente.NomeCliente || cliente.cliNome}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>

				<div>
					<label>CPF/CNPJ</label>
					<input
						type='text'
						id='CPF'
						value={cliente.CPF || cliente.cliCpfcnpj}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>

				<div>
					<label>Nome da Mae</label>
					<input
						type='text'
						id='NomeMae'
						value={cliente.NomeMae || cliente.cliNomeMae}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>

				<div>
					<label>Data de Nascimento</label>
					<input
						type='date'
						id='DataNascimento'
						value={cliente.DataNascimento || cliente.cliDataNascimento}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>

				<div>
					<label>Email</label>
					<input
						type='text'
						id='Email'
						value={cliente.Email || cliente.cliEmail}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>

				<div>
					<label>Telefone</label>
					<input
						type='text'
						id='Telefone'
						value={cliente.Telefone || cliente.cliTelefone}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>

				<div>
					<label>Sexo</label>
					<input
						type='text'
						id='Sexo'
						value={cliente.Sexo || cliente.cliSexo}
						onChange={(e) => handleChange(e, e.target.value)}
						className='form-control'
					></input>
				</div>
			</div>

			<div className='d-flex'>
                <button
                    type='button'
                    className='btn btn-primary mt-3'
                    style={{ marginRight: '10px' }}
                    onClick={handleSalvar}
                >
                    Salvar
                </button>

                <Link className='btn btn-secondary mt-3' to='/'>Voltar</Link>
            </div>
		</div>
	);
};

export default EditCliente;

// Fiz esse remapeamento para que o nome dos campos fiquem de acordo com o que é esperado no backend, que é um ClienteVM
function remapClientWithCorretFieldName(cliente) {
	let newCliente = {};

	for (let key in cliente) {
		let newKey = mapFieldName(key);
		newCliente[newKey] = cliente[key];
	}

	return newCliente;
}

function mapFieldName(fieldName) {
	switch (fieldName) {
		case 'cliCodigo':
			return 'CodigoCliente';

		case 'cliNome':
			return 'NomeCliente';

		case 'cliCpfcnpj':
			return 'CPF';

		case 'cliNomeMae':
			return 'NomeMae';

		case 'cliDataNascimento':
			return 'DataNascimento';

		case 'cliEmail':
			return 'Email';

		case 'cliTelefone':
			return 'Telefone';

		case 'cliSexo':
			return 'Sexo';

		default:
			return fieldName;
	}
}
