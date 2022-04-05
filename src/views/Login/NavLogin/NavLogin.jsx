
import Footer from '../../../components/Footer/Footer';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './NavLogin.module.css';
import { FaBars } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import logo from '../../../assets/Logo/programateAcademyLogo.png';
import logoMovil from '../../../assets/Logo/programateAcademyLogoMovil.png';

export default function NavLogin(){
  const [ show, setShow ] = useState(false);

  // allow logout and return to login screen
  const handleLogout = async () => {
    try {
      // await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      localStorage.removeItem('loggedAgoraUser')
      localStorage.removeItem('isLogged')
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  }
  return(
    <div className={style.navstudent}>
      <div className={style.nav}>
        <img src={logoMovil} alt="" />
        <div onClick={() => setShow(!show)} className={style.barsIcon}><FaBars /></div>
      </div>
      <div className={`${style.items_footer} ${show ? style.items_footer_show : style.items_footer_hide}`}>
        <ul className={`${style.items}`}>
          <li><img src={logo} alt="" /></li>
          
        </ul>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
        </div>
    
  );
}