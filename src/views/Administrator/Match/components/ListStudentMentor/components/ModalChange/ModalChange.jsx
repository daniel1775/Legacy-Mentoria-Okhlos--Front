import style from './ModalChange.module.css';
import axios from 'axios';
import useState from 'react';

export default function ModalChange(props){
  const { data } = props;
  const { name_student, last_name_student } = data;

  const [ student, setStudent ] = useState("");
  const [ mentors, setMentors ] = useState([]);

  const baseurl = process.env.REACT_APP_BACKEND_URL;

  const getAllMentorsAvailable = async () => {
    try{
			await axios.get(`${baseurl}/mentors-available`)
				.then(response => {
					setMentors(response.data[0].role);
				});
		}catch(err){
			console.log(err);
		}
  }

  const getIdStudentbyName = async (name, last_name) => {
    try{
      await axios.get(`${baseurl}/student-by-name/${name}/${last_name}`)
				.then(response => {
					setMentors(response.data[0].role);
				});
    }catch(err) {

    }
  }

  return(
    <div className={style.modal}>
      <p>
        {name_student}
      </p>
      <select 
        type="select"
        className="form-control"
        name="program"
        value={student}
        onChange={e => setStudent(e.target.value)}
      >
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  )
}