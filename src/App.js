import { Routes, Route, useNavigate } from 'react-router-dom';


import Login from './views/Login/Login';



// import NotFound from './views/General/NotFound'
import Footer from './components/Footer/Footer';
import MatchForm from './views/Administrator/Match/MatchForm';
// Administrator imports of CRUDS //
import CrudMentors from './views/Administrator/Cruds/CrudMentor/CrudMentor';
import CrudStudents from './views/Administrator/Cruds/CrudStudents/CrudStudents';
import CrudSessions from './views/Administrator/Cruds/CrudSessions/CrudSessions';
import WelcomeCard from './components/welcomeCard/WelcomeCard';
import CrudSessionsDetail from './views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail';

// mentor imports views //
import WelcomeMentor from './views/Mentor/Welcome'
import HomeMentor from './views/Mentor/Homementor'
import FormMentor from './views/Mentor/FormMentor'
import StudentAssigned from './views/Mentor/AsignedStudent/Asignedstudent/StudentAssigned.jsx';
import ThankMentor from './views/Mentor/ThankMentor/ThankMentor';

// student imports views //
import WelcomeStudent from './views/Student/Welcome/WelcomeStudent.jsx'

import { useEffect, useState } from 'react';
//student imports components
import MultipleChoice from './views/Student/MultipleChoice/MultipleChoice.jsx';
import ThankStudent from './views/Student/Thanks/Thanks.jsx'
import MentorAssigned from './views/Student/MentorAssigned/MentorAssigned.jsx';
import { Home } from '@material-ui/icons';

function App() {
	// role 3: Student
	// role 2: Mentor
	// role 1: Administrator
	const [ role, setRole ] = useState(0);
	let navigate = useNavigate();

	useEffect(() => {
		if(role === 0){
		}else if(role === 1){
			window.location.href = "/administrator";
			/* navigate("/administrator"); */
		}else if(role === 2){
			window.location.href = "/mentor";
			/* navigate("/mentor"); */
		}else if(role === 3){
			window.location.href = "/student";
			/* navigate("/student") */
		}
	}, [navigate, role]);

	return (
		<>
			
			<Routes>
				{/* Login's routes */}
				<Route path="/" element={<Login setRole={setRole}/>} />

				{/* Administrator's routes */}
				<Route path="/administrator" element={<MatchForm />} />
				<Route path="/MatchForm" element={<MatchForm />} />
				<Route path="/CrudStudents" element={<CrudStudents />} />
				<Route path="/crud-mentors" element={<CrudMentors />} />
				<Route path="/crud-sessions-detail" element={<CrudSessionsDetail />} />
				<Route path="/crud-sessions" element={<CrudSessions />} />
				
				{/* Student's routes */}
				<Route path="/student" element={<WelcomeStudent />} />
				<Route path="/student/select-studentInterests" element={<MultipleChoice/>} />
				<Route path="/student/thanks-studentsView" element={<ThankStudent/>} />
				<Route path="/student/mentor-assigned-studentsView" element={<MentorAssigned/>} />
				{/* <Route path="/student/welcomeCard" element={<WelcomeCard />} /> */}

				{/* Mentor's routes */}
				<Route path="/mentor" element={<WelcomeMentor />}/>
				<Route path="/mentor/form-mentor" element={<FormMentor/>}/>
				<Route path="/mentor/thanks-mentorsView" element={<ThankMentor/>} />
				<Route path="/mentor/student-assigned" element={<StudentAssigned/>}/>
				

			</Routes>
			<Footer />
		</>
	);
}

export default App;
