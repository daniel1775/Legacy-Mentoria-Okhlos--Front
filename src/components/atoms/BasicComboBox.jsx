import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import matchServices from '../../api/services/matchServices'
import { setDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice'
import { useDispatch } from 'react-redux' 

const BasicComboBox = ({func,data, load }) => {
const dispatch=useDispatch()
    const [cohorte, setCohorte] = useState([])
        function selectCohorte(event){
        const datos= func(event.value) 
        console.log(datos)
        datos.then(res => {
            console.log(res)
            if(load == "student"){
                dispatch(setDataEstudentApi({
                    ...data,  
                    data:res
                }
                ))
            }     
        } )
        
    }
    useEffect(() => {
        const data = matchServices.getPrograms()
        data.then(respuesta => {
            setCohorte(respuesta)
        })

    }, [])

    return (
        <Select className='w-[200px]' onChange={(e) => selectCohorte(e) } options={cohorte} placeholder={"Cohorte"} />
    )
}

export default BasicComboBox
