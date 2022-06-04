import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mentorServices from '../../api/services/mentorServices';

const initialState = {
    data: [],
    columnas: [],
    codeColumnas: [],
    name: '',
    file: false
}

export const getAllMentor = createAsyncThunk(
    'dataMentorApi/getAllMentorStatus',
    async () => {
        return mentorServices.getAllMentor()
    }
);

export const DataApiMentorSlice = createSlice({
    name: 'dataMentorApi',
    initialState,
    reducers: {

        setDataMentorApi: (state, action) => {
            return {
                ...state,
                data: action.payload.data,
                columnas: action.payload.columnas,
                codeColumnas: action.payload.codeColumnas,
                name: action.payload.name,
                file: action.payload.file
            }
        },
        resetDataMentorApi: () => {
            return {
                initialState
            }
        },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllMentor.fulfilled, (state, action) => {
            // Add user to the state array
                const columnas = Object.keys(action.payload[0])
                const result = action.payload.map(e => Object.values(e))
                state.data= result
                state.columnas=[columnas]
                state.file=true
                state.name="Lstado Mentores"
         
        })
    },

})

// Action creators are generated for each case reducer function
export const { setDataMentorApi, resetDataMentorApi } = DataApiMentorSlice.actions

export const selectDataMentorApi = (state) => state.dataMentorApi;

export default DataApiMentorSlice.reducer