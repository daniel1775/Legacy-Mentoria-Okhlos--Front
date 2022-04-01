import style from './ButtonModal.module.css';
import { Modal } from "@material-ui/core";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ButtonModal(props){
  const { mentorsAvailable, studentsAvailable, getAllStudentsAvailable, getAllMentorsAvailable, cohort, program } = props;

  const [ modalEditar, setModalEditar ] = useState(false);
  const [ radioCheck, setRadioCheck ] = useState(0);
  const [ mentorChoosed, setMentorChoosed ] = useState(0);
  const [ studentChoosed, setStudentChoosed ] = useState(0)
  const [ showInputMatch, setShowInputMatch ] = useState(false);
  const [ matchMentor, setMatchMentor ] = useState({});

  const baseurl = process.env.REACT_APP_BACKEND_URL;

  const openedClosedModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const calculateMatch = async () => {
    setShowInputMatch(true);
    try {
      await axios.get(`${baseurl}/match/calculate/${studentChoosed}`)
				.then(response => {
          setMatchMentor(response.data)
				});
    } catch (err) {
      console.log(err);
    }
  }

  const root = () => {
    openedClosedModalEditar();
    try {  
      getAllMentorsAvailable()
      getAllStudentsAvailable()
    } catch (err) {
      console.log(err);
    }
  }

  const handleConfirmMatch = async () => {
    openedClosedModalEditar();
    try {
      await axios.post(`${baseurl}/match/create`, {
        id_student: studentChoosed,
        id_mentor: matchMentor.id_mentor,
        score: 0,
        cohort: cohort,
        program: program
      })
				.then(response => {
          alert("Match creado correactamente");
				});
    } catch (err) {
      console.log(err);
    }
  }

  const handleCreateMatch = async () => {
    openedClosedModalEditar()
    try{
			await axios.post(`${baseurl}/match/create`, {
        id_student: studentChoosed,
        id_mentor: mentorChoosed,
        score: 0,
        cohort: cohort,
        program: program
      })
				.then(response => {
          alert("Match creado correactamente");
				});
		}catch(err){
			console.log(err);
		}
  }

  const modal = (
    <div className={style.modal}>
      <h3>Cambiar Match</h3>
      <div className={style.input}>
        <label>Estudiantes disponibles</label>
        <select
          type="select"
          className="form-control"
          name="student"
          value={studentChoosed}
          onChange={e => setStudentChoosed(e.target.value)}
        >
          {studentsAvailable.map(e => (
            <option value={e.id_student}>{`${e.name} ${e.last_name}`}</option>
          ))}
        </select>
      </div>
      <div onChange={e => setRadioCheck(e.target.value)} className={style.container_checkbox}>
        <label>
          Automatico
          <input type="radio" name="check" value={1}/> 
        </label>
        <label>
          Manual
          <input type="radio" name="check" value={2}/> 
        </label>
      </div>

      <div className={`${style.container_automatic} ${radioCheck==1 ? style.show_container_automatic : style.hide_container_automatic}`}>
        <button onClick={calculateMatch}>Calcular match</button>
        {showInputMatch && 
          <>
            <input value={`${matchMentor.name} ${matchMentor.last_name}`} type="text" readOnly />
            <button onClick={handleConfirmMatch}>Confirmar</button>
          </>
        }
        
      </div>
      <div className={`${style.container_manual} ${radioCheck==2 ? style.show_container_manual : style.hide_container_manual}`}>
        <label>Mentores disponibles</label>
        <select
          type="select"
          className="form-control"
          name="program"
          value={mentorChoosed}
          onChange={e => setMentorChoosed(e.target.value)}
        >
          {mentorsAvailable.map(e => (
            <option value={e.id}>{`${e.name_mentor} ${e.last_name_mentor}`}</option>
          ))}
        </select>
        <button onClick={handleCreateMatch}>Confirmar</button>
      </div>
    </div>
  )

  return(
    <> 
      <button onClick={() => {
        root()
      }}>
        AGREGAR MATCH
      </button>
      <Modal open={modalEditar} onClose={openedClosedModalEditar}>
        {modal}
      </Modal>
    </>
  )
}