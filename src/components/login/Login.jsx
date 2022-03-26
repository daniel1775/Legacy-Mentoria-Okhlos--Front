import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../notification/Notification'
import { dispatchLogin } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import './login.css'
import Input from '../Input/Input'
import logo from '../assets/images/academy.png'

const Login = () => {
  //Inicializo hooks
  const [user, setUser] = useState({
    email: '',
    password: '',
    err: '',
    success: ''
  })
  const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'
  // const [state, setstate] = useState(initialState)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { email, password, err, success } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(`${baseUrl}/api/login`, {
        email,
        password
      })
      // console.log(res)
      setUser({ ...user, err: '', success: res.data.msg })
      window.localStorage.setItem('firstLogin', true)
      window.localStorage.setItem(
        'loggedOkhlosUser', JSON.stringify(res.data)
      )
      dispatch(dispatchLogin())



//aqui toca poner el nuevo welcome de administrador
      navigate('/welcome-user')
    }
    catch (err) {
      err.response.data.error &&
        setUser({ ...user, err: err.response.data.error, success: '' })
    }
  }

  return (
    <div className='container-login-main'>
      <div className='container-login-page'>
      <img className='logoLogin' src={logo} alt='logo-programate' />
      <h2 className="loginTitle">Ingresa a Okhlos</h2>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

        <form className='form' onSubmit={handleSubmit}>
          <div className='container-login-form-content'>
            {/* <label htmlFor='email'>Email Address</label> */}
            <Input
              label='Correo'
              placeholder='ejemplo@ejemplo.com'
              name='email'
              type='email' required
              value={email}
              onChange={handleChangeInput}
              
            />

            <Input
              
              label='Contraseña'
              placeholder='********'
              type='password'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>

          <button className='button-login' type='submit'>
            Ingresar 
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login