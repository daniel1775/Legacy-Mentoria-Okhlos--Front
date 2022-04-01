import style from './TableItem.module.css';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@material-ui/core";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TableItem(props){
  const { saveOptionSelected, data, num, mentorsAvailable, getAllMentorsAvailable } = props;  

  const [ modalEditar, setModalEditar ] = useState(false);
  const [ radioCheck, setRadioCheck ] = useState(0);
  const [ mentorChoosed, setMentorChoosed ] = useState(0);
  const [ showInputMatch, setShowInputMatch ] = useState(false);
  const [ matchMentor, setMatchMentor ] = useState({});

  const baseurl = "https://mentoringapp-back.herokuapp.com";

  const openedClosedModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const calculateMatch = async () => {
    setShowInputMatch(true);
    try {
      await axios.get(`${baseurl}/match/calculate/${data.id_student}`)
				.then(response => {
          setMatchMentor(response.data)
				});
    } catch (err) {
      console.log(err);
    }
  }

  const handleConfirmMatch = async () => {
    openedClosedModalEditar();
    try {
      await axios.put(`${baseurl}/match/confirm`, {
        id_student: data.id_student,
        id_mentor: matchMentor.id_mentor,
        score: matchMentor.score
      }).then(response => {
        alert("Match actualizado correactamente");
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handlePutMatch = async () => {
    openedClosedModalEditar()
    try{
			await axios.put(`${baseurl}/match/update/${data.id_student}/${mentorChoosed}`)
				.then(response => {
          alert("Match actualizado correactamente");
				});
		}catch(err){
			console.log(err);
		}
  }

  const modal = (
    <div className={style.modal}>
      <h3>Cambiar Match</h3>
      <div className={style.input}>
        <label>
          Estudiante
          <input value={`${data.name_student} ${data.last_name_student}`} type="text" readOnly/>
        </label>
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
        <button onClick={handlePutMatch}>Confirmar</button>
      </div>
    </div>
  )

  return(
    <tr key={data.id}>
      <td>{num}</td>
      <td>{data.name_student}</td>
      <td>{data.last_name_student}</td>
      <td>{data.name_mentor}</td>
      <td>{data.last_name_mentor}</td>
      <td>{data.score}</td>
      <td>
        <div className={style.containerbuttonactions}>
          <button
            id={style.update}
            onClick={() => {
              saveOptionSelected(data);
              openedClosedModalEditar();
              getAllMentorsAvailable()}}
            /* onClick={() => openedClosedModalVer()} */
          >
            <FontAwesomeIcon icon={faExchangeAlt} />
          </button>
        </div>
      </td>
      <Modal open={modalEditar} onClose={openedClosedModalEditar}>
        {modal}
      </Modal>
    </tr>
  )
}