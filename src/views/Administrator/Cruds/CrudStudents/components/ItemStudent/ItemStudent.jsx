import styles from './ItemStudent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { faEdit, faTrashAlt, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Modal, TextField } from '@material-ui/core';
import { useState } from 'react';

export default function TableItem(props) {
	const { saveOptionSelected, data } = props;

	const [modalEditar, setModalEditar] = useState(false);

	const [SavedData, setSavedData] = useState({
		name: data.name,
		lastName: data.last_name,
		actualAge: data.birth_date,
		gender: data.gender,
		program: data.program,
		email: data.email,
		contactNumber: data.phone,
		cohorte: data.cohort,
		role: 1,
		state: data.active,
		mentor: data.mentor,
		password: data.password,
	});

	const InsertData = (e) => {
		const { name, value } = e.target;
		setSavedData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		console.log(SavedData);
	};

	const openedClosedModalEditar = () => {
		setModalEditar(!modalEditar);
	};

	const Alertedit = () => {
		Swal.fire({
			showCloseButton: true,
			closeButtonText: 'X',
			title: '¿Desea guardar los cambios?',
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'No',
			confirmButtonColor: '#ffcc02',
			cancelButtonColor: '#000000',
			confirmButtonText: 'Si',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					showCloseButton: true,
					title: '¡Listo!',
					text: 'Cambios guardados con éxito',
					icon: 'success',
					showConfirmButton: true,
					confirmButtonColor: '#ffcc02',
					confirmButtonText: 'Ok',
				});
			}
		});
	};

	const bodyEditar = (
		<div className={styles.modal}>
			<h3 className={styles.h3}>EDITAR ESTUDIANTE </h3>
			<br />
			<div className="row ">
				<div className="form-group col-md-6">
					<TextField
						name="name"
						className={styles.inputMaterial}
						label="Primer Nombre"
						onChange={InsertData}
						value={SavedData && SavedData.name}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="lastName"
						className={styles.inputMaterial}
						label="Primer Apellido"
						onChange={InsertData}
						value={SavedData && SavedData.lastName}
					/>
				</div>
			
			</div>
		
			<div className="row ">
				<div className="form-group col-md-6">
					<TextField
						type="date"
						name="actualAge"
						className={styles.inputMaterial}
						label="Fecha de Nacimiento"
						onChange={InsertData}
						value={SavedData && SavedData.actualAge}
					/>
				</div>
				<div className="form-group col-md-6">
					<select
						type="select"
						className="form-control"
						name="gender"
						value={SavedData && SavedData.gender}
						onChange={InsertData}
						aria-label="Default select example"
					>
						<option value="0" selected="">
							Género
						</option>
						<option value="1">Masculino</option>
						<option value="2">Femenino</option>
					</select>
				</div>
			</div>
			<div className="row ">
				<div className="form-group col-md-6">
					<select
						type="select"
						className="form-control"
						name="program"
						value={SavedData && SavedData.program}
						onChange={InsertData}
						aria-label="Default select example"
					>
						<option value="200">Bootcamp Prográmate</option>
						<option value="201">Administración de Empresas</option>
					</select>
				</div>
				<div className="form-group col-md-6">
					<TextField
						type="email"
						name="email"
						className={styles.inputMaterial}
						label="E-mail"
						onChange={InsertData}
						value={SavedData && SavedData.email}
					/>
					<br />
				</div>
			</div>
			<div className="row ">
				<div className="form-group col-md-6">
					<TextField
						type="number"
						name="contactNumber"
						className={styles.inputMaterial}
						label="Celular"
						onChange={InsertData}
						value={SavedData && SavedData.contactNumber}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						type="number"
						name="cohorte"
						className={styles.inputMaterial}
						label="cohorte"
						onChange={InsertData}
						value={SavedData && SavedData.cohorte}
					/>
				</div>
			</div>
			<div className="row ">
				<div className="form-group col-md-6">
					<TextField
						name="password"
						className={styles.inputMaterial}
						label="Contraseña"
						onChange={InsertData}
						value={SavedData && SavedData.password}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="mentor"
						className={styles.inputMaterial}
						label="Mentor"
						onChange={InsertData}
						value={SavedData && SavedData.mentor}
					/>
				</div>
			</div>
			<div className="row ">
				<div className="form-group col-md-6">
					<select
						type="select"
						className="form-control"
						name="estado"
						onChange={InsertData}
						value={SavedData && SavedData.state}
						aria-label="Default select example"
					>
						<option value="0">Deshabilitado</option>
						<option value="1">Habilitado</option>
					</select>
				</div>
			</div>

			<br />
			<div align="center">
				<button
					className={styles.button}
					onClick={() => {
						Alertedit();
						openedClosedModalEditar();
					}}
				>
					Guardar Cambios
				</button>

				<button
					className={styles.Button}
					onClick={() => openedClosedModalEditar()}
				>
					Cancelar
				</button>
			</div>
		</div>
	);

	return (
		<tr>
			<td>{data.id}</td>
			<td>{data.name}</td>
			<td>{data.last_name}</td>
			<td>{data.birth_date}</td>
			<td>{data.gender === 2 ? "Femenino" : data.gender === 1 ? "Masculino" : data.gender === 3 ? "Otro" : null}</td>
			<td>{data.phone}</td>
			<td>{data.email}</td>
			<td>{data.interest}</td>
			<td>{data.program}</td>
			<td>{data.mentor}</td>
			<td>{data.active === 1 ? "Habilitado" : "Deshabilitado"}</td>
			<td>
				<div className={styles.containerbutton}>
				{/* 	<button id={styles.update}>
						<FontAwesomeIcon
							icon={faEye}
							onClick={() => {}}
						/>
					</button> */}
					<button id={styles.update}>
						<FontAwesomeIcon
							icon={faEdit}
							onClick={() => {openedClosedModalEditar(); saveOptionSelected(data)}}
						/>
					</button>
					<button id={styles.delete} onClick={() => {}}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</div>
			</td>
			<Modal open={modalEditar} onClose={openedClosedModalEditar}>
				{bodyEditar}
			</Modal>
		</tr>
	);
}
