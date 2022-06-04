import React from 'react'
import {ImgBienvenidaAdmin, TextBienvenidaDashboard} from '../atoms'

const BienvenidaOkhlos = () => {
    return (
        <div className='
            flex
            flex-col
            w-full
            justify-between
            items-center
            align-middle
            px-2
            
            sm:flex-row
            sm:justify-evenly
        '>
            <div className='flex items-center justify-center '>
                <TextBienvenidaDashboard />
            </div>
            <div className='flex items-center justify-center '>
                <ImgBienvenidaAdmin />
            </div>
        </div>
    )
}

export default BienvenidaOkhlos