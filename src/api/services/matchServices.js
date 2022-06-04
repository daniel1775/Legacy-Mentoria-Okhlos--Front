import axios from '../axios.js'


const getPrograms = async () => {
    
    return await axios
        .get("cohorte")
        .then((response) => {
            
            const data=response.data;
            var datos=[]
            data.forEach(element => {
                if (element.cohort == 0 ){
                    datos.push(
                        {
                            value: element.cohort, label: 'Proyectate' 
                        }
                    )
                }else{
                    datos.push(
                    {
                        value: element.cohort, label: 'Programate Cohorte '+element.cohort 
                    }
                )}

                
            });
                return datos
        });
}

const matchMasivo = async (data) => {
    console.log(data)
    return await axios.post("MatchMassive", data)
        .then((res) => {
            return res.data
        });
}

const matchIndividual = async (id) => {
    console.log(id)
    return await axios.post(`calculate/match/${id}`)
        .then((res) => {
            return res.data
        });
}

const getAllMatchByCohort = async () => {

    return await axios
        .get(`getAllMatch`)
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data;
            } else {
                return []
            }
        });
}

const resetMatch= async ()=>{
    return await axios
    .delete(`resetMatch`)
    .then((response) => {
        return response.data
    });
}


const deletOneMatch = async (id) => {
    console.log(id)
    return await axios.delete(`deleteMatch/${id}`)
    
        .then((res) => {
            console.log(res)
            if (res.status == 200) {
                location.reload()
            } else {
                ModalAlert("Error Al borrar Match", "Favor verificar!", "error")
            }
        }

        )
}

const UpdateMatch= async (data)=>{
    console.log(data)
    return await axios
    .put(`updatedMatch/${data.idMatch}`,[data.idmentor, data.idEstudiante])
    .then((response) => {
        return response.data
    });
}

const getMatchStudents= async ()=>{
    return await axios
    .get("students/assigned")
    .then((response) => {
        return response.data
    });
}


export default { getPrograms, getMatchStudents, UpdateMatch, matchMasivo, matchIndividual, getAllMatchByCohort, deletOneMatch, resetMatch }
