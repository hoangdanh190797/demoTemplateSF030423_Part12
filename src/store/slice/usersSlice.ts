import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import UserSiginAPI from "../../services/UserSiginAPI";
import UserSignupAPI from "../../services/UserSignupAPI";

declare interface initialState {
  isLoading: any;
  isLogin: any;
  error: any;
  // currentUser: any,
  // userAfterJSON: any,
  userOnl: any;
  user: null;
  userRegister: null;
}
// const saveUser = JSON.parse ?? (localStorage.getItem("user"))

// const saveUserNew = JSON.parse ?? (localStorage.getItem("userNew"))

// const savedUser = localStorage.getItem('user');
// const currentUser = JSON.parse ?? (savedUser);

const initialState: initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  userOnl: {},

  user: null,
  userRegister: null,
};

export const postUserLogin = createAsyncThunk(
  "users/postUserLogin",
  async (users: any) => {
    try {
      const response = await UserSiginAPI.postLogin(users);
      return response.data.user;
    } catch (error) {}
  }
);

export const getUserLogin = createAsyncThunk("users/getUserLogin", async () => {
  try {
    const response = await UserSiginAPI.getUser();
    return response.data;
  } catch (error) {}
});

export const postUserRegister = createAsyncThunk(
  "users/postUserSignup",
  async (saveUserNew: any) => {
    try {
      const response = await UserSignupAPI.postUserSignup(saveUserNew);
      return response.data.user;
    } catch (error) {}
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getToken: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(postUserLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.user = action.payload;
      })
      .addCase(postUserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isLogin = false;
        state.error = action.error.message ?? null;
      })
      // ---------
      .addCase(getUserLogin.pending, (state, action) => {})
      .addCase(getUserLogin.fulfilled, (state, action) => {
        // state.userOnl = action.payload;
      })
      .addCase(getUserLogin.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      // ---------
      .addCase(postUserRegister.pending, (state, action) => {})
      .addCase(postUserRegister.fulfilled, (state, action) => {
        state.isLogin = true;
        state.userRegister = action.payload;
      })
      .addCase(postUserRegister.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
