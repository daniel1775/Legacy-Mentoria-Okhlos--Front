import { useState, useEffect } from "react";
import styles from "./Style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import Axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ItemStudent from './components/ItemStudent/ItemStudent.jsx';

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

//Alert editar
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

//Alert create

const Alertcreate = () => {
  Swal.fire({
    showCloseButton: true,
    closeButtonText: "X",
    title: "Registro creado con éxito",
    icon: "success",
    confirmButtonColor: "#ffcc02",
    confirmButtonText: "Ok",
  });
};

//Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    maxWidth: 600,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  TextField: {
    display: "inline-block",
  },

  iconos: {
    cursor: "pointer",
    backgroundcolor: "blue",
  },
  inputMaterial: {
    width: "100%",
    height: "2.5rem",
  },
  h3: {
    fontFamily: "Gilroy-ExtraBold ",
    color: "#4caf50",
    margin: "0",
  },
  Button: {
    backgroundColor: "#ffdf5f",
    color: "#010101",
    margin: "0rem 0.5rem 0rem 0rem",
    "&:hover": {
      backgroundColor: "#FFCC02",
    },
  },
}));

const CrudStudents = () => {
  const Styles = useStyles();
  const [modalinsertar, setmodalinsertar] = useState(false);
  const [modaleditar, setmodaleditar] = useState(false);
  const [modalver, setmodalver] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // Almacena los valores de la fila a editar
  const [choosedData, setChoosedData] = useState({});

  const saveOptionSelected = (data) => {
    setChoosedData(data);
  }

  //Insert saved module data
  const [SavedData, setSavedData] = useState({
    name: "",
    middleName: "",
    lastName: "",
    secondSurname: "",
    actualAge: "",
    gender: 1,
    program: "",
    email: "",
    contactNumber: "",
    cohorte: "",
    role: 1,
    state: 1,
    password:"",
  });

  useEffect(() => {
    /* console.log("SAVEDDATA: " + SavedData.gender) */;
  }, [SavedData]);

  //base Url of deploy
  const baseUrl = 'https://mentoringapp-back.herokuapp.com';
  //Function to insert the data written in the module.
  const InsertData = (e) => {
    const { name, value } = e.target;
    setSavedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(SavedData);
  };

  const removeStudent = async (id) => {
    await Axios.delete(`${baseUrl}/student/${id}`);
   
};

  const [students, setStudents] = useState([]);

  useEffect(() => {
    Axios({
      url: `${baseUrl}/all-students`,
    })
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStudents]);

  //one-button boolean function
  const openedClosedModalInsertar = () => {
    setmodalinsertar(!modalinsertar);
  };

  const openedClosedModalEditar = () => {
    setmodaleditar(!modaleditar);
  };

  const openedClosedModalVer = () => {
    setmodalver(!modalver);
  };

  const reload = () => {
		window.location.reload(true);
	};



  //Modal structure Insertar

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>AGREGAR NUEVO ESTUDIANTE </h3>
      <br />
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="name"
            className={Styles.inputMaterial}
            label="Primer Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.name}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="middleName"
            className={Styles.inputMaterial}
            label="Segundo Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.middleName}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="lastName"
            className={Styles.inputMaterial}
            label="Primer Apellido"
            onChange={InsertData}
            value={SavedData && SavedData.lastName}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="secondSurname"
            className={Styles.inputMaterial}
            label="Segundo apellido"
            onChange={InsertData}
            value={SavedData && SavedData.secondSurname}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            type="date"
            name="actualAge"
            className={Styles.inputMaterial}
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
            <option value="201">
              Administración de Empresas
            </option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <TextField
            type="email"
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            type="number"
            name="contactNumber"
            className={Styles.inputMaterial}
            label="Celular"
            onChange={InsertData}
            value={SavedData && SavedData.contactNumber}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            type="number"
            name="cohorte"
            className={Styles.inputMaterial}
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
            className={Styles.inputMaterial}
            label="Contraseña"
            onChange={InsertData}
            value={SavedData && SavedData.password}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="mentor"
            className={Styles.inputMaterial}
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
            name="state"
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
          className={Styles.Button}
          onClick={() => {
            Alertcreate(); openedClosedModalInsertar(); handleModalInsert();
          }}
        >
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

  // Insert Function in Backend
  async function handleModalInsert() {
    try {
      await Axios.post(`${baseUrl}/student`, {
        name: SavedData.name + SavedData.middleName,
        last_name: SavedData.lastName + SavedData.secondSurname,
        birth_date: SavedData.actualAge,
        gender: SavedData.gender,
        phone: SavedData.contactNumber,
        email: SavedData.email,
        program: SavedData.program,
        mentor: SavedData.mentor,
        active: 1,
        gender: SavedData.gender,
        password: SavedData.password,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const search = async () => {
    await Axios.get(`${baseUrl}/search-students/${inputValue}`)
      .then(response => {
        setStudents(response.data[0])
      })
  }

  //Modal structure Editar

  const bodyEditar = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>EDITAR ESTUDIANTE </h3>
      <br />
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="name"
            className={Styles.inputMaterial}
            label="Primer Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.name}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="middleName"
            className={Styles.inputMaterial}
            label="Segundo Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.middleName}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="lastName"
            className={Styles.inputMaterial}
            label="Primer Apellido"
            onChange={InsertData}
            value={SavedData && SavedData.lastName}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="secondSurname"
            className={Styles.inputMaterial}
            label="Segundo apellido"
            onChange={InsertData}
            value={SavedData && SavedData.secondSurname}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            type="date"
            name="actualAge"
            className={Styles.inputMaterial}
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
            <option value="201">
              Administración de Empresas
            </option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <TextField
            type="email"
            name="email"
            className={Styles.inputMaterial}
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
            className={Styles.inputMaterial}
            label="Celular"
            onChange={InsertData}
            value={SavedData && SavedData.contactNumber}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            type="number"
            name="cohorte"
            className={Styles.inputMaterial}
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
            className={Styles.inputMaterial}
            label="Contraseña"
            onChange={InsertData}
            value={SavedData && SavedData.password}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="mentor"
            className={Styles.inputMaterial}
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
          onClick={() => { Alertedit(); openedClosedModalEditar() }}
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

  useEffect(() => {
    console.log("CHOOSE DATA = " + JSON.stringify(choosedData))
  }, [choosedData])

  //Modal structure Ver

  const bodyVer = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>VER ESTUDIANTE </h3>
      <br />
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="name"
            className={Styles.inputMaterial}
            label="Primer Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.name}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="middleName"
            className={Styles.inputMaterial}
            label="Segundo Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.middleName}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="lastName"
            className={Styles.inputMaterial}
            label="Primer Apellido"
            onChange={InsertData}
            value={SavedData && SavedData.lastName}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="secondSurname"
            className={Styles.inputMaterial}
            label="Segundo apellido"
            onChange={InsertData}
            value={SavedData && SavedData.secondSurname}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            type="date"
            name="actualAge"
            className={Styles.inputMaterial}
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
            <option value="201">
              Administración de Empresas
            </option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <TextField
            type="email"
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            type="number"
            name="contactNumber"
            className={Styles.inputMaterial}
            label="Celular"
            onChange={InsertData}
            value={SavedData && SavedData.contactNumber}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            type="number"
            name="cohorte"
            className={Styles.inputMaterial}
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
            className={Styles.inputMaterial}
            label="Contraseña"
            onChange={InsertData}
            value={SavedData && SavedData.password}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="mentor"
            className={Styles.inputMaterial}
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
          onClick={() => openedClosedModalVer()}
        >
          Cerrar
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <h1>TABLA CONTROL ESTUDIANTES</h1>
        <div className={styles.header}>
          <div className={styles.containerSearch}>
            <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className={styles.search} onClick={search} >
              <FontAwesomeIcon icon={faSearch} />
            </button>

          </div>
          <button onClick={() => reload()}>Actualizar tabla</button>
          <button onClick={() => openedClosedModalInsertar()}>
            Insertar Estudiante
          </button>

          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="tableStudent"
            filename="Tabla Estudiantes"
            sheet="pagina 1"
            buttonText="Descargar CSV"
          />

         
           
        </div>

        <div className={styles.containerTable}>
          <table className={styles.table} id="tableStudent">
            <thead>
              {
                <tr>
                  <th>id</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Edad</th>
                  <th>Genero</th>
                  <th>Teléfono</th>
                  <th>E-mail</th>
                  <th>Intereses</th>
                  <th>Programa</th>
                  <th>Mentor</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              }
            </thead>
            <tbody>
              {students.map((e) => {
                return (
                  <ItemStudent
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

        <Modal open={modalver} onClose={openedClosedModalVer}>
          {bodyVer}
        </Modal>
      </div>
    </>
  );
};

export default CrudStudents;

/* <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.birth_date}</td>
                    <td>{e.gender}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.interest}</td>
                    <td>{e.program}</td>
                    <td>{e.mentor}</td>
                    <td>{e.active}</td>
                    <td>
                      <div className={styles.containerbutton}>
                        <button id={styles.update}>
                          <FontAwesomeIcon
                            icon={faEye}
                            onClick={() => openedClosedModalVer()}
                          />
                        </button>
                        <button id={styles.update}>
                          <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => openedClosedModalEditar()}
                          />
                        </button>
                        <button
                          id={styles.delete}
                         // onClick={() => Alertdelete()}
                          onClick={() => removeStudent(e.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </td>
                  </tr> */