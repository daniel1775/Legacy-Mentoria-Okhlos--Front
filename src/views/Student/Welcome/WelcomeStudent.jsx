import React from 'react';

// import '../Welcome/WelcomeStudent.css';
import WelcomeCard from '../../../components/welcomeCard/WelcomeCard.jsx';
import NavEstudent from '../../Administrator/NavStudent/NavStudent.jsx';


const WelcomeStudent = () => {
    return (
      <>
      <NavEstudent/>
        <div>
          <WelcomeCard/>
        </div>
        </>
    )
}

export default WelcomeStudent
