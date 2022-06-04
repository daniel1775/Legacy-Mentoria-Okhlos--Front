import ModalAlert from '../../components/atoms/ModalAlert.js';
import axios from '../axios.js'


const getAllStudents = async () => {
    return await axios
        .get("user/student")
        .then((response) => {
            if (response.data.length) {
                console.log(response.data)
                return response.data;
            } else {
                return []
            }
        });
}

const logout = () => {
    localStorage.removeItem("user");
}
const registerAll = async (data) => {
    return await axios.post("/StudentMasiva", data.data)
        .then((res) => {
        });
}

const offStudent = async (id) => {

    return await axios.put(`studentOff/${id}`)
        .then((res) => {
            if (res.status == 200) {
                location.reload()
            } else {
                ModalAlert("Error Al Desactivar Estudiante", "Favor verificar!", "error")
            }
        }

        )
}
const getStudentCohort = async (cohorte) => {

    return await axios.get(`students/cohort/${cohorte}`)
        .then((res) => {
            const result = res.data.map((e) => Object.values(e));
            console.log(result)
            return result
        });
}

const getProgram = async () => {
    return await axios.get("programs",)
        .then((res) => {
            const data = res.data;
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

const registerStudent = async (data) => {
    console.log(data)
    return await axios.post("/student", [data])
        .then((res) => {
            return res
        });
}

const updateStudent = async (id, data) => {
    console.log(data)
    return await axios.put(`student/update/${id}`, [data])
        .then((res) => {
            return res
        });
}

const getintereses = async () => {
    return await axios
        .get("interests")
        .then((response) => {

            const data = response.data;
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




export default { getAllStudents, logout, registerAll, getintereses, offStudent, getStudentCohort, getProgram, registerStudent, updateStudent }