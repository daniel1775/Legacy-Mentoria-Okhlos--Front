import React from 'react'
import Images from "../../assets";


const ImgFase2 = () => {
    return (
        <div className='
            grid 
            grid-col
            justify-center
            align-middle
            p-4
            gap-4
            items-center
            w-full
            lg:grid-cols-2
            lg:justify-center
        
        '>
            <div className='justify-center flex'>
                <img src={Images.imgform}  alt="FomulariosDiligenciados" style={{width: '100%'}}/>
            </div>
            <div className='justify-center flex w-full'>
                <img src={Images.imginf}  alt="InformesDiligenciados" style={{width: '100%'}}/>        
            </div>
        </div>  
    )
}

export default ImgFase2