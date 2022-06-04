import React, { useState } from 'react'
import { login } from "../../redux/slices/authSlice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import {LogoColorLapiz, BasicButton, BasicInputText} from '../atoms'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [load, setLoad] = useState(false)

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    function click() {
        dispatch(login(data))
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
            navigate("/Dashboard")
        }, 3000)
    }

    return (
        <div className='flex gap-y-7 items-center justify-center flex-col w-full '>
            <LogoColorLapiz />
            <h2 className='font-Roboto text-PrimarioColor1 mt-10 text-3xl pb-8 font-bold text-center'>
                Bienvenido a OKHLOS
            </h2>
            <div className='flex flex-col gap-y-1 '>
                <BasicInputText placeholder={"Ingrese el email"} type={"email"} name={"username"} func={handleInputChange} />
                <BasicInputText placeholder={"Ingrese la contraseña"} type={"password"} name={"password"} func={handleInputChange} />
            </div>
            {/*
            <NavLink to={"/Dashboard"}>
                <BasicButton text={"Ingresar"} func={click}/>

            </NavLink>
             */}
            {load ? <Icon className=' text-[2rem]' icon={"eos-icons:bubble-loading"} />
                : <BasicButton text={"Ingresar"} func={click} />
            }

        </div>
    )
}

export default Login