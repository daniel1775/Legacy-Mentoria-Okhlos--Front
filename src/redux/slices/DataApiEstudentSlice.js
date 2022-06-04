import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import studentServices from '../../api/services/studentServices';

const initialState = {
    data: [],
    columnas: [],
    codeColumnas: [],
    name: '',
    file: false
}

export const getAllStudent = createAsyncThunk(
    'dataEstudentApi/getAllStudentStatus',
    async () => {
        return studentServices.getAllStudents()
    }
);

export const DataApiEstudentSlice = createSlice({
    name: 'dataEstudentApi',
    initialState,
    reducers: {

        setDataEstudentApi: (state, action) => {
            return {
                ...state,
                data: action.payload.data,
                columnas: action.payload.columnas,
                codeColumnas: action.payload.codeColumnas,
                name: action.payload.name,
                file: action.payload.file
            }
        },
        resetDataEstudentApi: () => {
            return {
                initialState
            }
        },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllStudent.fulfilled, (state, action) => {
            // Add user to the state array
                
               
                const columnas = Object.keys(action.payload[0]);

                const result = action.payload.map((e) => Object.values(e));

                state.data = result.slice(1);
                state.columnas = [columnas];
                state.file = true;
                state.name = "Lstado estudiantes";
         
        })
    },

})

// Action creators are generated for each case reducer function
export const { setDataEstudentApi, resetDataEstudentApi } = DataApiEstudentSlice.actions

export const selectDataEstudentApi = (state) => state.dataEstudentApi;

export default DataApiEstudentSlice.reducer