
import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './matchform.module.css';
import ListStudentMentor from './components/ListStudentMentor/ListStudentMentor';
import Cohort from './components/Cohort/Cohort';

const MatchForm = () => {
  const [students, setStudents] = useState([])
  const [mentors, setMentors] = useState([])
  // permite controlar que componente se va a renderizar: <ListStudentMentor/> ó <ProgramAndCohort/>
  const [showViewCohort, setShowViewCohort] = useState(true)
  // almacena los datos de estudiantes y mentores una vez realizado el match
  const [match, setMatch] = useState([])
  // saved the value choosed for the user in the selects
  const [cohort, setCohort] = useState(3);
  const [program, setProgram] = useState(200);
  const [ showSelectCohort, setShowSelectCohort ] = useState(true);

  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  // almacena el valor escogido en la seccion de cohorte (corregir)
  const handleTypeSelectCohort = e => {
    setCohort(e.value) 
  };

  const handleTypeSelectProgram = e => {
    setProgram(e.value) 
  };

  const getValuesFinal = async () => {
    setShowViewCohort(false);
    console.log(cohort)
    console.log(program)
    try {
      await axios.get(`${baseUrl}/match/${cohort}/${program}`)
      .then(response => {
        console.log("DATA" + JSON.stringify(response.data));
        setMatch(response.data);
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {showViewCohort ? 
        <Cohort
          handleTypeSelectCohort={handleTypeSelectCohort}
          handleTypeSelectProgram={handleTypeSelectProgram}
          getValuesFinal={getValuesFinal}
          showSelectCohort={showSelectCohort}
          setShowSelectCohort={setShowSelectCohort}
        /> : 
        <ListStudentMentor
          match={match}
          cohort={cohort}
          program={program}
        />
      }
    </div>
  )
}

export default MatchForm