import React from 'react'
import {PhotoProfile, PersonName}  from '../atoms'


const UserLogin = () => {
    return (
        <div className='flex items-center gap-2'>
            <PhotoProfile w={"40px"} h={"40px"}/>
            <PersonName />
        </div>
    )
}

export default UserLogin