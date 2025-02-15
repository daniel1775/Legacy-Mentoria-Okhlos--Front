
import styles from "./formmentor.module.css";
import Select from "react-select";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function FormMentor() {
  const baseUrl = "https://fathomless-bastion-33135.herokuapp.com";

  const [updateMentor, setUpdateMentor] = useState({
    academic_level: "",
    ActualJobPosition: "",
    Company: "",
    actualAge: "",
    gender: "1",
    sons: "",
    numeStudents: "",
  });

  const interestMentor = [
    { value: "React.JS", label: "React.JS" },
    { value: "Angular.JS", label: "Angular.JS" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "Vue.JS", label: "Vue.JS" },
    { value: "MySQL", label: "MySQL" },
    { value: "Mongo.db", label: "Mongo.db" },
    { value: "Node.JS", label: "Node.JS" },
    { value: "Express.JS", label: "Express.JS" },
    { value: "Django", label: "Django" },
    { value: "Next.JS", label: "Next.JS" },
    { value: "Java", label: "Java" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Linux", label: "Linux" },
    { value: "PHP", label: "PHP" },
  ];

  // const handleChange = (selectedOption) => {

  // }

  const maxOptions = 3;

  const [selectedOption, setSelectedOption] = useState([]);

  const handleTypeSelect = (e) => {
    setSelectedOption(e);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUpdateMentor({ ...updateMentor, [name]: value });
  };

  // console.log(selectedOption)

  const sendSelect = selectedOption.map((option) => option.value);

  const auth = useSelector((state) => state.auth);
  // console.log(auth)

  const { user } = auth;

  const navigate = useNavigate();

  const handleUpdateInterest = (e) => {
    e.preventDefault();
    if (sendSelect.length === 3) {
      const userinterestsMentor = sendSelect;

      const idMentor = user.id;

      axios.post(`${baseUrl}/api/formControl/${idMentor}`, {
        gender: updateMentor.gender,
        academic_level: updateMentor.academic_level,
        ActualJobPosition: updateMentor.ActualJobPosition,
        Company: updateMentor.Company,
        actualAge: updateMentor.actualAge,
        sons: updateMentor.sons,
        interestsMentor: userinterestsMentor,
        numeStudents: updateMentor.numeStudents,
      });
    } else {
      alert("Por favor selecciona 3 intereses");
    }
  };

  return (
    <div className={styles.containerQ}>
      <div className={styles.tittle}>
      <h4 className={styles.parrafo}>
        Completa la siguiente información de tu perfil para avanzar en la
        plataforma
      </h4>
      </div>
      <form className={styles.formMentor} onSubmit={handleUpdateInterest}>
        <div className={styles.containerList}>
          <div className={styles.columna1}>
            <label >Estudios</label>
            <input
              onChange={handleChangeInput}
              className={styles.mgBottom}
              name="academic_level"
              required
            ></input>
            <label >Cargo actual</label>
            <input
              onChange={handleChangeInput}
              className={styles.mgBottom}
              name="ActualJobPosition"
              required
            ></input>
            <label >Empresa en donde trabajas</label>
            <input
              onChange={handleChangeInput}
              className={styles.mgBottom}
              name="Company"
              required
            ></input>
            <label >Fecha de nacimiento</label>
            <input
              type="date"
              onChange={handleChangeInput}
              className={styles.mgBottom}
              name="actualAge"
              required
            ></input>
          </div>

          <div className={styles.columna2}>
            <label>Género</label>
            <select
              onChange={handleChangeInput}
              name="gender"
              className={styles.mgBottom}
              required
            >
              <option value="1">Hombre</option>
              <option value="2">Mujer</option>
              <option value="3">Personalizado</option>
            </select>
            {/* <input
           
          className="mg-bottom" 
          name=""></input> */}
            <label>Hijos</label>
            <select
              onChange={handleChangeInput}
              className={styles.mgBottom}
              name="sons"
              required
            >
              <option value="4">1</option>
              <option value="5">2</option>
              <option value="6">3</option>
              <option value="7">4</option>
              <option value="8">5</option>
              <option value="9">6</option>
            </select>

            <label>
              Cantidad de estudiantes que quieres en el proceso
            </label>
            <select
              onChange={handleChangeInput}
              name="numeStudents"
              className={styles.mgBottom}
              required
            >
              <option value="10">1</option>
              <option value="11">2</option>
              <option value="12">3</option>
            </select>
          </div>
        </div>
<hr/>
        <div className={styles.payment}>
          <div className={styles.cardIntereses}>
            <>
              <h3>Intereses generales</h3>
              <p>Elige máximo tres intereses</p>

              <Select
                name="interest"
                options={
                  selectedOption.length === maxOptions ? [] : interestMentor
                }
                isMulti
                onChange={handleTypeSelect}
                noOptionsMessage={() => {
                  return selectedOption.length === maxOptions
                    ? "You have reached the max options value"
                    : "No options available";
                }}
              />
              <button className={styles.buttonFormMentor} type="submit">
                <Link to="/mentor/thanks-mentorsView">
                  Enviar
                </Link>
              </button>

              <br />
            </>
          </div>
        </div>
        
      </form>
      <div></div>
    </div>
  );
}

export default FormMentor;
