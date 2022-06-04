import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    columnas: [],
    codeColumnas: [],
    name: '',
    file: false
}

export const loadDataMentorSlice = createSlice({
    name: 'dataMentorExcel',
    initialState,
    reducers: {
       
        setDataMentor: (state, action) => {
           return{
                ...state,
                data: action.payload.data,
                columnas: action.payload.columnas,
                codeColumnas: action.payload.codeColumnas,
                name: action.payload.name,
                file: action.payload.file
           }
        },
        resetDataMentor: (state) => {
            return {
                ...state, 
                data:[],
                columnas: [],
                codeColumnas:[],
                name: "",
                file: false 
            }
         },
    
    },
   
})

// Action creators are generated for each case reducer function
export const { setDataMentor, resetDataMentor  } = loadDataMentorSlice.actions

export const selectDataMentorExcel = (state) => state.dataMentorExcel;

export default loadDataMentorSlice.reducer