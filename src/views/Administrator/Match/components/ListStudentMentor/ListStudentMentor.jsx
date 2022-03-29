import style from "./ListStudentMentor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListStudentMentor(props) {
  const { match, cohort, program } = props;

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
              {console.log(match)}
              {match.map((e, index) => {
                return (
                  <tr key={e.id}>
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
                          /* onClick={() => openedClosedModalVer()} */
                        >
                          <FontAwesomeIcon icon={faUserPlus} />
                        </button>

                        <button
                          id={style.update}
                          /* onClick={() => openedClosedModalVer()} */
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </div>
                    </td>
                  </tr>
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
