import style from './TableItem.module.css';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@material-ui/core";
import { useState } from 'react';

export default function TableItem(props){
  const { saveOptionSelected, data, num, mentorsAvailable, getAllMentorsAvailable } = props;  

  const [ modalEditar, setModalEditar ] = useState(false);

  const openedClosedModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const modal = (
    <div className={style.modal}>
      <h3>Cambiar Match</h3>
      <div className={style.input}>
        <input value={`${data.name_student} ${data.last_name_student}`} type="text" readOnly/>
      </div>
      <div>
        <select
          type="select"
          className="form-control"
          name="program"
        >
          {mentorsAvailable.map(e => (
            <option value={e.id}>{`${e.name_mentor} ${e.last_name_mentor}`}</option>
          ))}
        </select>
      </div>
      <div className={style.container_buttons}>
        <button>Match manual</button>
        <button>Match automatico</button>
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