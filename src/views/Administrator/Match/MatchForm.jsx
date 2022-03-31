
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
      /* showSelectCohort ? res = await axios.get(`${baseUrl}/match/${cohort}/${program}`) 
      : res = await axios.get(`${baseUrl}/match/${program}`) */
      /* if (res.status === 200) {
        console.log("RES: " + JSON.stringify(res.data));
        setMatch(res.data)
      } */
    } catch (err) {
      console.log(err)
    }
  }

  // logica del match linea 52 a 162
  let resultInterest = 0
  let resultAge = 0
  let competencies = 0
  let gender = 0
  let total = 0
  let count = 0

  function Interests(est, m) {
    let count = 0
    // Interests the student and mentor
    for (let i = 0; i < 3; i++) {
      // const result = students[est].interestsStudent[i].includes(mentors[m].interestsMentor)
      const result = mentors[m].interestsMentor.includes(students[est].interestsStudent[i])
      if (result === true) {
        if (count === 0) {
          count = 5
        } else {
          count += 10
        }
      }
      // debugger
    }

    return count
  }

  function Age(est, m) {
    let count = 0
    // Actual age the student and mentor
    if (students[est].actualAge === mentors[m].actualAge) {
      count = 25
    } else if (students[est].actualAge + 5 >= mentors[m].actualAge & students[est].actualAge - 5 <= mentors[m].actualAge) {
      count = 15
    } else {
      count = 5
    }
    return count
  }

  function Competencies(est, m) {
    let count = 0
    // Commitment the student and mentor
    if (students[est].commitment === 3 && mentors[m].commitment === 1) {
      count += 10
    } else if (students[est].commitment < 3 && mentors[m].commitment < 3) {
      count += 10
    }
    // Achievement Orientation the student and mentor
    if (students[est].achievementOrientation === 3 && mentors[m].achievementOrientation === 1) {
      count += 10
    } else if (students[est].achievementOrientation < 3 && mentors[m].achievementOrientation < 3) {
      count += 10
    }
    // Flexibility the student and mentor
    if (students[est].flexibility === 3 && mentors[m].flexibility === 1) {
      count += 10
    } else if (students[est].flexibility < 3 && mentors[m].flexibility < 3) {
      count += 10
    }
    // Communication the student and mentor
    if (students[est].assertiveCommunication === 3 && mentors[m].assertiveCommunication === 1) {
      count += 10
    } else if (students[est].assertiveCommunication < 3 && mentors[m].assertiveCommunication < 3) {
      count += 10
    }
    return count
  }

  function Gender(est, m) {
    let count = 0
    if (students[est].studentsGenderPrefer === mentors[m].gender) {
      count = 10
    }
    return count
  }

  function findHighScore(possibleMentors){
    let mayor = possibleMentors[0];
    for(let i=1 ; i<possibleMentors.length ; i++){
      if(mayor.score < possibleMentors[i].score){
        mayor =  possibleMentors[i];
      }
    }
    return mayor.mentor.user_id.name;
  }

  //Funcion que hace el match
  const calculateMatch = () => {
    for (let est = 0; est < students.length; est++) {
      let possibleMentors = [];
      for (let m = count; m < mentors.length; m++) {
        resultInterest = Interests(est, m)
        resultAge = Age(est, m)
        competencies = Competencies(est, m)
        gender = Gender(est, m)

        total = resultInterest + resultAge + competencies + gender

        possibleMentors.push({
          score: total, 
          mentor: mentors[m]
        });
      }
      setMatch(prev => [...prev, {
        nameEstudent: students[est].user_id.name,
        nameMentor: findHighScore(possibleMentors)
      }]);
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