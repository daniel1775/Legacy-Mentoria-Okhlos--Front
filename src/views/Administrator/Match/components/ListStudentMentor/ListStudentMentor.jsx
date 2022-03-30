import style from "./ListStudentMentor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableItem from "./components/TableItem/TableItem";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListStudentMentor(props) {
  const { match, cohort, program } = props;

  const [ choosedData, setChoosedData ] = useState({});
  const [ mentorsAvailable, setMentorsAvailable ] = useState([]);

  const baseurl = process.env.REACT_APP_BACKEND_URL;

  const handleButtonChange = () => {
    
  }

  const getAllMentorsAvailable = async () => {
    try{
			await axios.get(`${baseurl}/mentors-available`)
				.then(response => {
          setMentorsAvailable(response.data);
				});
		}catch(err){
			console.log(err);
		}
  }

  const getIdStudentbyName = async (name, last_name) => {
    try{
      await axios.get(`${baseurl}/student-by-name/${name}/${last_name}`)
				.then(response => {
					
				});
    }catch(err) {

    }
  }

  const saveOptionSelected = (data) => {
    setChoosedData(data);
  }

  useEffect(() => {
    console.log("mentorsAvailable"+JSON.stringify(mentorsAvailable));
  }, [ mentorsAvailable ])

  return (
    <div className={style.container}>
      <div>
        <h2>
          Match
          <br/>
          {`Programa: ${program === 200 ? 'Bootcamp Prográmate' : 'Administración de empresas'} `}
          <br/>
          {`${program === 200 ? 'Cohorte: ' + cohort : ''} `}
        </h2>
        <div class={style.containerTable}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>N° </th>
                <th>Nombres Estudiante</th>
                <th>Apellidos Estudiante</th>
                <th>Nombres Mentor</th>
                <th>Apellidos Mentor</th>
                <th>Media</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {match.map((e, index) => {
                return (
                  <TableItem
                    saveOptionSelected={saveOptionSelected}
                    data={e}
                    num={index+1}
                    mentorsAvailable={mentorsAvailable}
                    getAllMentorsAvailable={getAllMentorsAvailable}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={style.containerbutton}>
          <button>Agregar Match</button>
        </div>
      </div>
    </div>
  );
}

/* <tr key={e.id}>
    <td>{index + 1}</td>
    <td>{e.name_student}</td>
    <td>{e.last_name_student}</td>
    <td>{e.name_mentor}</td>
    <td>{e.last_name_mentor}</td>
    <td>{e.score}</td>
    <td>
      <div className={style.containerbuttonactions}>
        <button
          id={style.update}
            // onClick={() => openedClosedModalVer()}
        >
          <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
      </div>
    </td>
  </tr> */