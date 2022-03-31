import styles from './ItemSession.module.css';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { faEdit, faTrashAlt, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Modal, TextField } from '@material-ui/core';
import { useState } from 'react';

export default function TableItem(props) {
    const { saveOptionSelected, data} = props;

    const [modalEditar, setModalEditar] = useState(false);

    const [SavedData, setSavedData] = useState({
        title: data.title,
        start_date: data.start_date,
        end_date: data.end_date,
        description: data.description,
        state: 1 & 2,

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
    const bodyEditar = (
        <div className={styles.modal}>
            <h3 className={styles.h3}>EDITAR SESIÓN</h3>
            <TextField
                name="title"
                className={styles.inputMaterial}
                label="Titulo"
                onChange={InsertData}
                value={SavedData && SavedData.title}
            />
            <br />
            <TextField
                type="date"
                name="start_date"
                className={styles.inputMaterial}
                label="Fecha de inicio"
                onChange={InsertData}
                value={SavedData && SavedData.start_date}
            />
            <br />
            <TextField
                type="date"
                name="end_date"
                className={styles.inputMaterial}
                label="Fecha de finalización"
                onChange={InsertData}
                value={SavedData && SavedData.end_date}
            />
            <br />
            <TextField
                name="description"
                className={styles.inputMaterial}
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
                <button className={styles.button} onClick={() => {mostrarAlerta() ; openedClosedModalEditar(); }}>
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
    return (
        <tr>
            <td>{data.title}</td>
            <td >{data.start_date}</td>
            <td >{data.end_date}</td>
            <td > {data.description}</td>
            <td >{data.state === 2 ? 'Habilitada' : 'Deshabilitada'}</td>

            <>
                <td>
                    <div className={styles.containerbutton}>
                        <button id={styles.update} onClick={() => {openedClosedModalEditar(); saveOptionSelected(data)}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                         
                    </div>
                </td>
                
                <Modal open={modalEditar} onClose={openedClosedModalEditar}>
                    {bodyEditar}
                </Modal>
            </>
        </tr>

    );





}