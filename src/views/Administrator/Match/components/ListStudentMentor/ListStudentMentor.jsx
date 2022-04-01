import style from "./ListStudentMentor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableItem from "./components/TableItem/TableItem";
import { useEffect, useState } from "react";
import ButtonModal from "./components/ButtonModal/ButtonModal";
import axios from "axios";

export default function ListStudentMentor(props) {
  const { match, cohort, program } = props;

  const [ choosedData, setChoosedData ] = useState({});
  const [ mentorsAvailable, setMentorsAvailable ] = useState([]);
  const [ studentsAvailable, setStudentsAvailable ] = useState([]);

  const baseurl = "https://mentoringapp-back.herokuapp.com";

  const getAllMentorsAvailable = async () => {
    try{
			await axios.get(`${baseurl}/mentors/available`)
				.then(response => {
          setMentorsAvailable(response.data);
				});
		}catch(err){
			console.log(err);
		}
  }

  const getAllStudentsAvailable = async () => {
    try{
			await axios.get(`${baseurl}/students/available`)
				.then(response => {
          console.log("RESPONSE: "+JSON.stringify(response.data));
          setStudentsAvailable(response.data);
				});
		}catch(err){
			console.log(err);
		}
  }

  const saveOptionSelected = (data) => {
    setChoosedData(data);
  }

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
          <ButtonModal 
            mentorsAvailable={mentorsAvailable}
            studentsAvailable={studentsAvailable}
            getAllStudentsAvailable={getAllStudentsAvailable}
            getAllMentorsAvailable={getAllMentorsAvailable}
            cohort={cohort}
            program={program}
          />
        </div>
      </div>
    </div>
  );
}

