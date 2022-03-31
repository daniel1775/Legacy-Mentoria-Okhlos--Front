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

  const baseurl = process.env.REACT_APP_BACKEND_URL;

  const openedClosedModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const handlePutMatch = async () => {
    try{
      console.log("ID_STUDENT"+ data.id_student)
      console.log("ID_MENTORS"+ mentorChoosed)
			await axios.put(`${baseurl}/match/update/${data.id_student}/${mentorChoosed}`)
				.then(response => {
          alert("Match actualizado correactamente");
				});
		}catch(err){
			console.log(err);
		}
  }

  useEffect(() => {
    console.log("mentorChoosed: "+mentorChoosed);
  }, [mentorChoosed])

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

      <div className={`${style.container_automatic} ${radioCheck==1 ? style.show_container : style.hide_container}`}>
        AUTOMATICO
      </div>
      <div className={`${style.container_manual} ${radioCheck==2 ? style.show_container : style.hide_container}`}>
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