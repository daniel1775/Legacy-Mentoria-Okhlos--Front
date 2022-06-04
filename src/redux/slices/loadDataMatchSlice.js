import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import matchServices from '../../api/services/matchServices';


const initialState = {
    data: [],
    columnas: [],
    codeColumnas: [],
    name: '',
    file: false
}

export const matchMassive = createAsyncThunk(
    'dataMatchApi/matchMassiveStatus',
    async (data) => {
        return  matchServices.matchMasivo(data)
    }
);

export const loadDataMatchSlice = createSlice({
    name: 'dataMatchApi',
    initialState,
    reducers: {

        setDataMatchApi: (state, action) => {
            return {
                ...state,
                data: action.payload.data,
                columnas: action.payload.columnas,
                codeColumnas: action.payload.codeColumnas,
                name: action.payload.name,
                file: action.payload.file
            }
        },
        resetDataMatchApi: () => {
            return {
                initialState
            }
        },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(matchMassive.fulfilled, (state, action) => {
            // Add user to the state array
                const columnas = Object.keys(action.payload[0])
                //const result = action.payload.map(e => Object.values(e))
                state.data= action.payload 
                state.columnas=[columnas]
                state.file=true
                state.name="Listado Match"
         
        })
    },

})

// Action creators are generated for each case reducer function
export const { setDataMatchApi, resetDataMatchApi } = loadDataMatchSlice.actions

export const selectMatch = (state) => state.dataMatchApi;

export default loadDataMatchSlice.reducer