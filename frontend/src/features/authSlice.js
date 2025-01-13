import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
const localUser =JSON.parse(localStorage.getItem('user')) 

const initialState = {
    user : localUser? localUser : null,
    isError: false,
    isSuccess: false,
    isLoading : false,
    message : ""
}
export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        reset: (state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess= false;
            state.message = '';

        }
    },
    extraReducers : ()=>{}

})
export const register = createAsyncThunk(
    "api/login",
    async (userData, thunkAPI) => {
        try {
            const response = await authService.register(userData);
        } catch (err) {
            return thunkAPI.rejectWithValue({ isError: true, message: err.message });
        }
    }
);
export const {reset} = authSlice.actions
export default authSlice.reducer