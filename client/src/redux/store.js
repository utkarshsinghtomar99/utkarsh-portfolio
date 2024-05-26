import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import portfolioReducer from "./portfolio/portfolioSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    portfolio: portfolioReducer,
  },
});

export default store;
