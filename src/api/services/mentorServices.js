import axios from '../axios.js'

const getAllMentor = async () => {

    return await axios
        .get("user/mentor")
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data[0];
            } else {
                return []
            }
        });
}

const getEstudies = async () => {
    return await axios
        .get("studies")
        .then((response) => {

            const data = response.data
            var datos = []
            data.forEach(element => {
                datos.push(
                    {
                        value: element.id, label: element.title
                    }
                )
            });
            return datos
        });
}

const getCargos = async () => {
    return await axios
        .get("cargo")
        .then((response) => {

            const data = response.data
            var datos = []
            data.forEach(element => {
                datos.push(
                    {
                        value: element.id, label: element.name
                    }
                )
            });
            return datos

        });
}

const getBusiness = async () => {
    return await axios
        .get("business")
        .then((response) => {

            const data = response.data
            var datos = []
            data.forEach(element => {
                datos.push(
                    {
                        value: element.id, label: element.name
                    }
                )
            });
            return datos

        });
}
const registerMentor = async (data) => {
    console.log(data)
    return await axios.post("mentor", [data])
        .then((res) => {
            console.log(res)
            return res
        });
}

const updateMentor = async (id, data) => {
    console.log(data)
    console.log(id)
    return await axios.put(`mentor/${id}`, [data])
        .then((res) => {
            console.log(res)
            return res
        });

}


const offMentor = async (id) => {

    return await axios.put(`mentorStatus/${id}`)
        .then((res) => {
            if (res.status == 200) {
                location.reload()
            } else {
                ModalAlert("Error Al Desactivar Mentor", "Favor verificar!", "error")
            }
        }

        )
}

const registerAll = async (data) => {
    console.log(data)
    return await axios.post("MentorMasiva", data.data)
        .then((res) => {
            console.log(res)
        });
}

const getMentorAvalible = async () => {
    return await axios
        .get("mentors/available")
        .then((response) => {
            const data = response.data
            var datos = []
            data.forEach(element => {
                datos.push(
                    {
                        value: element.id, label: element.name
                    }
                )
            });
            console.log(data)
            return datos

        });
}


export default { getAllMentor, registerAll, getEstudies, getCargos, getBusiness, offMentor, registerMentor, updateMentor, getMentorAvalible }