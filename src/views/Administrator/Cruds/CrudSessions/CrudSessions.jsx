import { useState, useEffect } from 'react';
import styles from './CrudSessions.module.css';


import SearchContainer from '../../../../components/SearchContainer/SearchContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ItemSession from './itemSession/ItemSession.jsx';
import Axios from 'axios';
import Swal from 'sweetalert2';


const Articles = [{
	Titulo: "Título",
	Fechadeinicio: "Fecha de inicio",
	Fechadefinalizacion: "Fecha de finalización",
	Descripcion: "Descripción",
	Estado: "Estado",

}]


//Modal styles 
const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	iconos: {
		cursor: 'pointer',
	},
	inputMaterial: {
		width: '100%',
	},
	h3: {
		fontFamily: 'Gilroy-ExtraBold ',
		color: '#92C149',
	},
	Button: {
		backgroundColor: '#FFCC02',
		color: '#010101',
		margin: '0rem 0.5rem 0rem 0rem',
		'&:hover': {
			backgroundColor: '#92C149',
		},
	},
}));

const CrudSessions = () => {
	const Styles = useStyles();
	const [modalinsertar, setmodalinsertar] = useState(false);
	const [modaleditar, setmodaleditar] = useState(false);
	const [choosedData, setChoosedData] = useState({});


	const saveOptionSelected = (data) => {
		setChoosedData(data);
	}




	//Insert saved module data
	const [SavedData, setSavedData] = useState({
		title: '',
		start_date: '',
		end_date: '',
		description: '',
		state: 1 & 2,

	});

	useEffect(() => {
		/* console.log("SAVEDDATA: " + SavedData.gender); */
	}, [SavedData]);

	const baseUrl = process.env.REACT_APP_BACKEND_URL;

	//Function to insert the data written in the module.
	const InsertData = (e) => {
		const { name, value } = e.target;
		setSavedData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		console.log(SavedData);
	};

	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		Axios({
			url: `${baseUrl}/sessions`,
		})
			.then((response) => {
				setSessions(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setSessions]);

	//one-button boolean function
	const openedClosedModalInsertar = () => {
		setmodalinsertar(!modalinsertar);
	};
	//one-button boolean function
	const openedClosedModalEditar = () => {
		setmodaleditar(!modaleditar);
	};


	//---------------------------------------alert from add--------------------------------------------------
	const alertAdd = () => {
		Swal.fire({
			showCloseButton: true,
			closeButtonText: 'X',
			title: '¿Desea insertar los datos?',
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'No',
			confirmButtonColor: '#ffcc02',
			cancelButtonColor: '#000000',
			confirmButtonText: 'Si'

		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					showCloseButton: true,
					title: '¡Listo!',
					text: "Añadido con éxito",
					icon: 'success',
					showConfirmButton: true,
					confirmButtonColor: '#ffcc02',
					confirmButtonText: 'Ok',
				})


			}


		})
	};
	//-----------------------------------------------alert from edit-------------------------------------------
	const mostrarAlerta = () => {
		Swal.fire({
			showCloseButton: true,
			closeButtonText: 'X',
			title: '¿Desea guardar los cambios?',
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'No',
			confirmButtonColor: '#ffcc02',
			cancelButtonColor: '#000000',
			confirmButtonText: 'Si'

		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					showCloseButton: true,
					title: '¡Listo!',
					text: "Cambios guardados con éxito",
					icon: 'success',
					showConfirmButton: true,
					confirmButtonColor: '#ffcc02',
					confirmButtonText: 'Ok',


				})
			}


		})
	};

	//Modal structure Insertar

	const bodyInsertar = (
		<div className={styles.modal}>
			<h3 className={styles.h3}>AÑADIR UNA SESION</h3>
			<TextField
				name="title"
				className={Styles.inputMaterial}
				label="Titulo"
				onChange={InsertData}
				value={SavedData && SavedData.title}
			/>
			<br />
			<TextField
				type="date"
				name="start_date"
				className={Styles.inputMaterial}
				label="Fecha de inicio"
				onChange={InsertData}
				value={SavedData && SavedData.start_date}
			/>
			<br />
			<TextField
				type="date"
				name="end_date"
				className={Styles.inputMaterial}
				label="Fecha de finalización"
				onChange={InsertData}
				value={SavedData && SavedData.end_date}
			/>
			<TextField
				name="description"
				className={Styles.inputMaterial}
				label="Descripción"
				onChange={InsertData}
				value={SavedData && SavedData.description}
			/>
			<br />

			<br />
			<select type='text' name='state' onChange={InsertData} value={SavedData && SavedData.state}>
				<option value="0">Estado</option>
				<option value="2">Habilitada</option>
				<option value="1">Deshabilitada</option>

			</select>
			<br />
			<div align="center" >
				<button className={styles.button}
					onClick={() => {
						alertAdd(); openedClosedModalInsertar(); handleModalInsert()
					}}/* onClick={()=>petitionPost()}*/>
					Insertar
				</button>
				<button
					className={styles.button}
					onClick={() => openedClosedModalInsertar()}
				>
					Cancelar
				</button>
			</div>
		</div>
	);

	async function handleModalInsert() {
		try {
			await Axios.post(`${baseUrl}/sessions`, {
				title: SavedData.title,
				start_date: SavedData.start_date,
				end_date: SavedData.end_date,
				description: SavedData.description,
				state: SavedData && SavedData.state,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const reload = () => {
		window.location.reload(true);
	};



	const bodyEditar = (
		<div className={styles.modal}>
			<h3 className={styles.h3}>EDITAR SESIÓN</h3>
			<TextField
				name="title"
				className={Styles.inputMaterial}
				label="Titulo"
				onChange={InsertData}
				value={SavedData && SavedData.title}
			/>
			<br />
			<TextField
				type="date"
				name="start_date"
				className={Styles.inputMaterial}
				label="Fecha de inicio"
				onChange={InsertData}
				value={SavedData && SavedData.start_date}
			/>
			<br />
			<TextField
				type="date"
				name="end_date"
				className={Styles.inputMaterial}
				label="Fecha de finalización"
				onChange={InsertData}
				value={SavedData && SavedData.end_date}
			/>
			<br />
			<TextField
				name="description"
				className={Styles.inputMaterial}
				label="Descripción"
				onChange={InsertData}
				value={SavedData && SavedData.description}
			/>
			<br />

			<br />
			<select type='text' name='state' onChange={InsertData} value={SavedData && SavedData.state}>
				<option value="0">Estado</option>
				<option value="2">Habilitado</option>
				<option value="1">Deshabilitado</option>

			</select>
			<br />
			<div align="center" >
				<button className={styles.button} onClick={() => mostrarAlerta() & openedClosedModalEditar()}>
					Guardar cambios
				</button>
				<button
					className={styles.button}
					onClick={() => openedClosedModalEditar()}
				>
					Cancelar
				</button>
			</div>
		</div>
	);
	useEffect(() => {
		console.log("CHOOSE DATA = " + JSON.stringify(choosedData))
	}, [choosedData])






	return (
		<div className={styles.container}>
			<h1>DETALLE DE SESIONES</h1>
			<div className={styles.header}>
			<input type="search" placeholder="Buscar Sesión" />
			<button onClick={() => reload()}>Actualizar tabla</button>
			<button onClick={() => openedClosedModalInsertar()}>
				Insertar Sesión
			</button>
			<ReactHTMLTableToExcel
				id="test-table-xls-button"
				className="download-table-xls-button"
				table="tableSession"
				filename="Tabla Sesiones"
				sheet="pagina 1"
				buttonText="Descargar CSV"
			/>
			</div>
			<div class={styles.containerTable}>
				<table className={styles.table} id="tableSession">
					<thead>
						{Articles.map((e) => {
							return (
								<tr>

									<th>{e.Titulo}</th>
									<th>{e.Fechadeinicio}</th>
									<th>{e.Fechadefinalizacion}</th>
									<th>{e.Descripcion}</th>
									<th>{e.Estado}</th>
									<th>Acciones</th>

								</tr>
							);
						})}

					</thead>
					<tbody>
						{sessions.map((e) => {
							return (
								<ItemSession
									data={e}
									saveOptionSelected={saveOptionSelected}

								/>
							);
						})}
					</tbody>
				</table>
			</div>
			<Modal open={modalinsertar} onClose={openedClosedModalInsertar}>
				{bodyInsertar}
			</Modal>
			<Modal open={modaleditar} onClose={openedClosedModalEditar}>
				{bodyEditar}
			</Modal>

		</div>
	);
};

export default CrudSessions;
