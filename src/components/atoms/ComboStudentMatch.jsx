import React from 'react'
import Select from 'react-select'

const ComboStudentMatch = ({data, func}) => {
    var arraystudent =[]
    for (let i = 0; i <data.data.length; i++) {
        arraystudent.push(
            {
                value: data.data[i][0],
                label: data.data[i][1]
            }
        )
    }
    function selectCohorte (event){
            console.log(event)
    }
  
    return (
    <Select className='w-[200px]' onChange={(e) => func(e) } options={arraystudent} placeholder={"Seleccione Estudiante"} />
    
  )
}

export default ComboStudentMatch