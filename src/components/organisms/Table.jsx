import React, { useState } from 'react'
import {ButtonTable, ButtonLoadDataExcel} from '../atoms'
import {utils, writeFile} from "xlsx";


const Table = ({ data }) => {

    return (
        <div className="font-GilroyLight h-[60vh] ">

            {data.file ?
                <table className="table-zebra table-compact w-full ">
                    <thead className=' font-Roboto'>
                        <tr className=' w-full'>
                            {data.file ?
                                data.columnas[0].map((c, index) => (
                                    <th className='bg-PrimarioColor2 text-black font-extrabold' key={index}>{c}</th>
                                ))
                                : <th>No hay</th>}

                            {/*  {data.file ? <th className='bg-PrimarioColor2 text-black font-extrabold'>acciones</th> : null}*/}
                        </tr>
                    </thead>
                    <tbody>
                        {data.file ?

                            data.data.map((r, i) => (
                                <tr className='hover' key={i}>
                                    {data.columnas[0].map((c, index) => (
                                        <td key={index}>{r[index]}</td>
                                    ))}
                                    {/* <td className='flex gap-2'>
                                        <ButtonTable icon={"eva:edit-2-outline"} color={"text-PrimarioColor2"} />
                                        <ButtonTable icon={"fluent:delete-48-regular"} color={"text-red-500"} />
                                    </td> */}
                                </tr>
                            ))

                            : <tr>
                                <td>no hay</td>
                            </tr>
                        }

                    </tbody>
                </table>
                : <div className='flex justify-center items-center p-6 pt-8'>
                    <ButtonLoadDataExcel />

                </div>
            }
        </div>
    )
}

export default Table