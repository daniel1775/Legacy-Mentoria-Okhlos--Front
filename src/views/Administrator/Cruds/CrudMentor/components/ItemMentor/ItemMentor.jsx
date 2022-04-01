import { useState } from "react";
import styles from "./ItemMentor.module.css";
import Swal from "sweetalert2";
import { Modal, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

const ItemMentor = (props) => {

    const { saveOptionSelected, data } = props;

    const [modaleditar, setmodaleditar] = useState(false);

    //Insert saved module data
    const [SavedData, setSavedData] = useState({
        name: data.name,
        lastName: data.last_name,
        born: data.birth_date,
        genre: data.gender,
        phone: data.phone,
        //start
        mailMentor: data.email,
        interestsMentor: data.interest,
        programMentor: data.program,
        studiesMentor: data.studies,
        businessMentor: data.business,
        roleMentor: data.role,
        //end
        childs: "",
        assignStu: "",
        state: data.active
    });

    //Function to insert the data written in the module.
    const InsertData = (e) => {
        const { name, value } = e.target;
        setSavedData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(SavedData);
    };

    //Alert Edit
    const Alertedit = () => {
        Swal.fire({
            showCloseButton: true,
            closeButtonText: "X",
            title: "¿Desea guardar los cambios?",
            icon: "question",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonColor: "#ffcc02",
            cancelButtonColor: "#000000",
            confirmButtonText: "Si",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    showCloseButton: true,
                    title: "¡Listo!",
                    text: "Cambios guardados con éxito",
                    icon: "success",
                    showConfirmButton: true,
                    confirmButtonColor: "#ffcc02",
                    confirmButtonText: "Ok",
                });
            }
        });
    };

    const Alertdelete = () => {
        Swal.fire({
            showCloseButton: true,
            closeButtonText: "X",
            title: "¿Está seguro que quiere eliminar este registro?",
            text: "Si hace esto, no podrá revertirlo",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonColor: "#ffcc02",
            cancelButtonColor: "#000000",
            confirmButtonText: "Si",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    showCloseButton: true,
                    title: "Eliminado",
                    text: "El registro ha sido eliminado con éxito",
                    icon: "success",
                    showConfirmButton: true,
                    confirmButtonColor: "#ffcc02",
                    confirmButtonText: "Ok",
                });
            }
        });
    };

    const openedClosedModalEditar = () => {
        setmodaleditar(!modaleditar);
    };

    //Modal structure Editar
    const bodyEditar = (
        <div className={styles.modal}>
            <h3 className={styles.h3}>EDITAR MENTOR</h3>

            <div className="row">
                {/* <div className="form-group col-md-6">
                    <TextField
                        name="id"
                        className={styles.inputMaterial}
                        label="Id"
                        onChange={InsertData}
                        value={SavedData && SavedData.id}
                    />
                </div> */}
                <div className="form-group col-md-6">
                    <TextField
                        name="name"
                        className={styles.inputMaterial}
                        label="Nombres"
                        onChange={InsertData}
                        value={SavedData && SavedData.name}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <TextField
                        name="lastName"
                        className={styles.inputMaterial}
                        label="Apellidos"
                        onChange={InsertData}
                        value={SavedData && SavedData.lastName}
                    />
                </div>
                <div className="form-group col-md-6">
                    <select
                        type="select"
                        className="form-control"
                        name="genre"
                        onChange={InsertData}
                        value={SavedData && SavedData.genre}
                        aria-label="Default select example"
                    >
                        <option value="0" selected="">
                            Género
                        </option>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <TextField
                        name="born"
                        className={styles.inputMaterial}
                        label="Fecha de nacimiento"
                        onChange={InsertData}
                        value={SavedData && SavedData.born}
                    />
                </div>
                <div className="form-group col-md-6">
                    <TextField
                        name="childs"
                        className={styles.inputMaterial}
                        label="Hijos"
                        onChange={InsertData}
                        value={SavedData && SavedData.childs}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <TextField
                        name="interestsMentor"
                        className={styles.inputMaterial}
                        label="Intereses"
                        onChange={InsertData}
                        value={SavedData && SavedData.interestsMentor}
                    />
                </div>
                <div className="form-group col-md-6">
                    <select
                        type="select"
                        className="form-control"
                        name="programMentor"
                        onChange={InsertData}
                        value={SavedData && SavedData.programMentor}
                        aria-label="Default select example"
                    >
                        <option value="0" selected="">
                            Programa
                        </option>
                        <option value="Bootcamp Prográmate">Bootcamp Prográmate</option>
                        <option value="Administración de Empresas">
                            Administración de Empresas
                        </option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <TextField
                        name="studiesMentor"
                        className={styles.inputMaterial}
                        label="Carrera"
                        onChange={InsertData}
                        value={SavedData && SavedData.studiesMentor}
                    />
                </div>
                <div className="form-group col-md-6">
                    <TextField
                        name="businessMentor"
                        className={styles.inputMaterial}
                        label="Empresa"
                        onChange={InsertData}
                        value={SavedData && SavedData.businessMentor}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <TextField
                        name="assignStu"
                        className={styles.inputMaterial}
                        label="Asignación Estudiante"
                        onChange={InsertData}
                        value={SavedData && SavedData.assignStu}
                    />
                </div>
                <div className="form-group col-md-6">
                    <TextField
                        name="mailMentor"
                        className={styles.inputMaterial}
                        label="E-mail"
                        onChange={InsertData}
                        value={SavedData && SavedData.mailMentor}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <select
                        type="select"
                        className="form-control"
                        name="state"
                        onChange={InsertData}
                        value={SavedData && SavedData.state}
                        aria-label="Default select example"
                    >
                        <option value="0" selected="">
                            Estado
                        </option>
                        <option value="Habilitado">Habilitado</option>
                        <option value="Masculino">Deshabilitado</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <TextField
                        name="phone"
                        className={styles.inputMaterial}
                        label="Télefono"
                        onChange={InsertData}
                        value={SavedData && SavedData.phone}
                    />
                </div>
            </div>

            <br></br>

            <div align="center">
                <button
                    className={styles.button}
                    onClick={() => Alertedit() & openedClosedModalEditar()}
                >
                    Guardar Cambios
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
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.last_name}</td>
            <td>{data.birth_date}</td>
            <td>{data.gender === 2 ? "Femenino" : data.gender === 1 ? "Masculino" : data.gender === 3 ? "Otro" : null}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.interest}</td>
            <td>{data.program}</td>
            <td>{data.studies}</td>
            <td>{data.business}</td>
            <td>{data.role}</td>
            <td>{data.active === 2 ? "Habilitado" : "Deshabilitado"}</td>
            <td>
                <div className={styles.containerbutton}>
                    <button
                        id={styles.update}
                        onClick={() => {
                            saveOptionSelected(data)
                            openedClosedModalEditar()
                        }}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>{" "}
                    <button id={styles.delete} onClick={() => Alertdelete()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    {/* <button
                        className={styles.button}
                        onClick={() => openedClosedModalVer()}
                    >
                        Cerrar
                    </button> */}
                </div>
            </td>
            <Modal open={modaleditar} onClose={openedClosedModalEditar}>
                {bodyEditar}
            </Modal>
        </tr>
    )
}

export default ItemMentor;