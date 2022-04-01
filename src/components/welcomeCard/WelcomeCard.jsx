import React from 'react';
import styles from './welcomeCard.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LogoPromgramate from '../../components/assets/images/programate-solo-color.png';

const Welcome= () => {

  const baseUrl = ''

  const [data, setData] = useState([])

  const idMentor = useSelector(state => state.auth.user.id)

  const navigate = useNavigate()

  const getInterest = () => {
    if(data.length > 0){
      if(data[0].interestsMentor.length > 0) {
        navigate('/')
      }
    }
  }

  getInterest()

  return (
    <section class={styles.containerHomeSession} >
        <div className={styles.logoContainer} >
          <img  src={LogoPromgramate} alt="logo" className={styles.logoImg} />
        </div>
        <div className={styles.welcomeMentor} >
          <h2 className={styles.mentortitle}>Estimado Estudiante/a</h2>
          <ul className={styles.checkMentor} >
            <li>Gracias por realizar la inscripción.</li>

            <li>
              {" "}
              No olvides completar los 3 pasos para crear tú perfil como mentor.
            </li>
            <li>
              Contacta con el equipo administrativo de Educamás, si tienes
              alguna duda.
            </li>
          </ul>
          <Link className={styles.btnWelcomMentor} to="/student/select-studentInterests">
            {" "}
            Siguiente
          </Link>
        </div>
      
    </section>
  );
  
}

export default Welcome


/* const WelcomeCard = () => {
    return (
        <div>  
          <div className={styles.containerOne}>
            <div className={styles.progressContainer}>
                <div className={styles.progress}> 
                  <div className={styles.circle.active}>1</div>
                  <div className={styles.circle}>2</div>
                  <div className={styles.circle}>3</div>
              </div>
            </div>
          </div>
            <div className={styles.container}>
              <div className={styles.back}>
                <div className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.content}>
                    <h3>Querido/a estudiante</h3>
                      <ul className={styles.list}>

                          <li>Gracias por realizar la inscripción.</li>
                          <li>No olvides completar los 3 pasos para empezar tu proceso de mentoría.</li>
                          <li>Puedes contactar con tus formadores, si tienes alguna duda.</li>
                      </ul>
                      <a href="#n" className={styles.btn}>Siguiente</a>
                    </div>              
                  </div>
                  {/* -------------------<h1 className="little">.hola.</h1> }
                </div>
              </div>  
          </div>
        </div>
    )
}

export default WelcomeCard
*/