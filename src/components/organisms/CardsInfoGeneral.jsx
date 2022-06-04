import React, { useEffect, useState } from "react";
import { CardsInfo } from "../molecules";
import studentServices from "../../api/services/studentServices";
import mentorServices from "../../api/services/mentorServices";
import matchServices from "../../api/services/matchServices";

const CardsInfoGeneral = () => {
    const [mentores, setMentores] = useState(0)
    const [estudiantes, setEstudiantes] = useState(0)
    const [matchInfoStudents, setMatchInfoStudents] = useState(0)
    useEffect(() => {
        const students = studentServices.getAllStudents();
        students.then(res => {
            setEstudiantes(res.length)
            console.log(res.length)
        })
        const mentors = mentorServices.getAllMentor();
        mentors.then(res => {
            setMentores(res.length)
            console.log(res.length)
        })
        const matchinfo = matchServices.getMatchStudents();
        matchinfo.then(res => {
            setMatchInfoStudents(res)
        })

    }, [])
    return (
        <div className="font-Roboto gap-5 p-3 text-center ">
            <h2 className="text-[1.3rem] font-bold text-center sm:text-left p-3">Informe General: Programate</h2>
            <div className="
                grid
                grid-cols
                px-4
                items-center
                justify-center
                w-full
                gap-3 
                sm:grid-cols-2 
                md:gap-6
                lg:grid-cols-4

            ">
                <div >
                    <CardsInfo dato={estudiantes} text={"Estudiantes"} color={"bg-PrimarioColor1"} link={"/EstudentManage"}/>
                </div>
                <div >
                    <CardsInfo dato={mentores} text={"Mentores"} color={"bg-PrimarioColor4"} link={"/MentorManage"}/>
                </div>
                <div >
                    <CardsInfo dato={matchInfoStudents} text={"Match Est."} color={"bg-PrimarioColor1"} link={"/MatchManage"}/>
                </div>
                <div >
                    <CardsInfo dato={estudiantes- matchInfoStudents} text={"Estudiantes"} color={"bg-PrimarioColor4"} link={"/MatchManage"}/>
                </div>

            </div>
        </div>
    );
};

export default CardsInfoGeneral;
