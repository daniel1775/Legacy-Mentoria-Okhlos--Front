import React from 'react'
import {BasicButtonIcon} from '../atoms'


const SocialMedia = () => {
  return (
        <div className='flex gap-3 p-2' >
        <a href="https://www.facebook.com/Somos-EducaM%C3%A1s-109393514766174" target="_blank"><BasicButtonIcon icon={'akar-icons:facebook-fill'} color={'white'} w={'25px'}/></a>
        <a href="https://www.instagram.com/somoseducamas/?hl=es-la" target="blank"><BasicButtonIcon icon={'bi:instagram'} color={'white'} w={'25px'}/></a>
        <a href="https://www.linkedin.com/company/educam%C3%A1s/" target="blank"><BasicButtonIcon icon={'akar-icons:linkedin-box-fill'} color={'white'} w={'25px'}/></a>
        </div>
  )
}

export default SocialMedia