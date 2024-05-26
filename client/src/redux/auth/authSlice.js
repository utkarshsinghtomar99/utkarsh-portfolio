import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "./authService";

const adminUserExist = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: adminUserExist ? adminUserExist : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  isMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => {
      return {
        isLoading: false,
        isError: false,
        isSuccess: false,
        isMessage: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.isMessage = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isMessage = action.payload.msg;
        state.admin = action.payload;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isMessage = action.payload;
        state.admin = null;
      })
      .addCase(logOutAdmin.fulfilled, (state) => {
        state.admin = null;
        state.isSuccess = true;
        state.isMessage = "Logout Successfully";
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

export const adminLogin = createAsyncThunk(
  "LOGIN/ADMIN",
  async (formData, thunkAPI) => {
    try {
      return await services.loginAdmin(formData);
    } catch (error) {
      const msg = error.response.data.msg;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const logOutAdmin = createAsyncThunk(
  "LOGOUT/ADMIN",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("admin");
    } catch (error) {
      const msg = error.response.data.msg;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
