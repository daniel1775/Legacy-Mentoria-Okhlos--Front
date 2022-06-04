import React from 'react'
import authServices from '../../api/services/authServices'

const PersonName = () => {
  const user=authServices.isLogin()
  return (
    <p className='text-center  font-Roboto font-bold'>
  {user.name}
    </p>
  )
}

export default PersonName