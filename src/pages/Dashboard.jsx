import React from 'react'
import {CardsInfoGeneral, ImgFase2, Welcome} from '../components/organisms'

const Dashboard = () => {
    return (
        <div >
            <Welcome />
            <CardsInfoGeneral />
            <div className=' '>
                <ImgFase2 />
            </div>
        </div>
    )
}

export default Dashboard