import React from 'react';
import studentStyle from './thanksStudent.module.css';
import logo from '../../../assets/Logo/programateAcademyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {

  const check = <FontAwesomeIcon icon={faCheckCircle} className={studentStyle.checkIcon} />
  const navigated = useNavigate();

  const handleNavigate = () =>{
    navigated('/student/mentor-assigned-studentsView')
  }


  return (
    <section className={studentStyle.containerAll}>
      <div className={studentStyle.logoContainer}>
        <img src={logo} alt="Programate Academy" className={studentStyle.logoImg} />
      </div>
      <article className={studentStyle.thanksContainer}>
        <div className={studentStyle.checkContainer}>
          {check}
          <h3>¡Hemos recibido tus respuestas!</h3>
        </div>
        <div className={studentStyle.notifContainer}>
          <p>Te notificaremos por correo cuándo se haya realizado la asignación de tu mentor.</p>
          <button className={studentStyle.btnFinalizar} onClick={handleNavigate}>
            Finalizar
          </button>
        </div>
      </article>
    </section>
  )
}

export default Thanks
