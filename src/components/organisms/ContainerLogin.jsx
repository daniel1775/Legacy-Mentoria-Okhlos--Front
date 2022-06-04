import React from 'react'
import {ImageLogin} from '../atoms'
import { Login } from '../molecules'

const ContainerLogin = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen w-full p-4 sm:p-0'>
            <ImageLogin />
            <Login />
        </div>
    )
}

export default ContainerLogin