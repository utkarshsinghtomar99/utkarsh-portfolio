import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import portfolioServices from "./portfolioService";

const initialState = {
  portfolioData: null,
  editMode: { data: {}, isEdit: false },
  isLoading: false,
  isError: false,
  isSuccess: false,
  isMessage: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    edit: (state, action) => {
      return {
        ...state,
        editMode: {
          data: action.payload,
          isEdit: true,
        },
      };
    },
    cancelEdit: (state) => {
      return {
        ...state,
        editMode: {
          data: {},
          isEdit: false,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolioData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getPortfolioData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.portfolioData = action.payload;
      })
      .addCase(getPortfolioData.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.portfolioData = null;
      })
      .addCase(createData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.portfolioData = null;
        state.isError = false;
        state.isMessage = action.payload.msg;
      })
      .addCase(createData.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(updateData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.portfolioData = null;
        state.editMode = { data: {}, isEdit: false };
        state.isMessage = action.payload.msg;
      })
      .addCase(updateData.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.portfolioData = null;
        state.isMessage = "Updating Went Wrong";
      })
      .addCase(deleteData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.portfolioData = null;
        state.isError = false;
        state.isMessage = action.payload.msg;
      })
      .addCase(deleteData.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const { edit, cancelEdit } = portfolioSlice.actions;
export default portfolioSlice.reducer;

export const getPortfolioData = createAsyncThunk(
  "FETCH/PORTFOLIODATA",
  async () => {
    try {
      return await portfolioServices.getPortfolioData();
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateData = createAsyncThunk(
  "UPDATE/DATA",
  async (updatingData) => {
    try {
      return await portfolioServices.updateData(updatingData);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteData = createAsyncThunk(
  "DELETE/DATA",
  async (deletingData) => {
    try {
      return await portfolioServices.deleteData(deletingData);
    } catch (error) {
      console.log(error);
    }
  }
);

export const createData = createAsyncThunk(
  "CREATE/DATA",
  async (creatingData) => {
    try {
      return await portfolioServices.createData(creatingData);
    } catch (error) {
      console.log(error);
    }
  }
);
