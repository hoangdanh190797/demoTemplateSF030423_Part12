import { createSlice, createAsyncThunk, PayloadAction, createAction } from "@reduxjs/toolkit";
import  userLoginRegister  from '../../services/UserLoginRegisterAPI'

const initialState = {

}

export const postUserLogin = createAsyncThunk('users/postUserLogin', async(userCurrent) => {
    try {
        const response = await userLoginRegister.postLogin(userCurrent);
    } catch (error) {
        
    }
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
      
  },
});

export const {} = usersSlice.actions

export default usersSlice.reducer