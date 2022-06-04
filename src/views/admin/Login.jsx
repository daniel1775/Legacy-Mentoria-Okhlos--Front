import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import {login, selectAuth} from '../../redux/slices/authSlice'

const Login = () => {

    const count = useSelector(selectAuth);
    const dispatch = useDispatch();

    const [datos, setDatos] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    function click() {
        dispatch(login(datos))
        }

    async function logii(){
        const dat = await axios.post('http://127.0.0.1:8000/login/',datos).then(
            res=>{
            
            }
        ) 
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" >
                    Username
                </label>
                <input onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" name="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" >
                    Password
                </label>
                <input onChange={handleInputChange}  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" name="password" type="password" placeholder="******************" />
                <p className="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">

                <button onClick={ click} className="bg-blue-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>

    )
}

export default Login