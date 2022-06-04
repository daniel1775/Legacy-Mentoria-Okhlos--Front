import React from 'react'
import {BasicButton, TextInfoDashBoard} from '../atoms'

const DashboardOptions = () => {
    return (
        <div className='
            flex
            flex-col
            justify-between
            items-center
            align-middle
            p-4  
            sm:flex-row
        '>
            <div >
                <TextInfoDashBoard />

            </div>
           {/* <div className='flex gap-x-4 justify-end items-start pr-4 pt-4'  >
                <BasicButton text={"Programate"} />
                <BasicButton text={"Proyectate"} />
            </div>*/}
        </div>
    )
}

export default DashboardOptions