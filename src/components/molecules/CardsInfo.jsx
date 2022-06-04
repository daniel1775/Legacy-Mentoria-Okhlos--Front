import React from 'react'
import {IconCard, CardInfo, BtnInfo} from '../atoms'

const CardsInfo = ({color, text, dato, link}) => {
  return (
    <div className={"flex justify-between aspect-video flex-col w-full "+color} >
      <div className='h-full text-center items-center justify-center w-full grid grid-cols-2'>
        <CardInfo text={text} dato={dato}/>
        <IconCard />
      </div>
      <BtnInfo link={link}/>
    </div>
  )
}

export default CardsInfo