import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from "redux-logger";
import HomePageReducer from "./../homeSlice/slice";
import HomePageSlice from "../store";
import authSlice from "../authSlcie";
import AuthReducer from '../authSlcie';
import modalSlice from '../modalSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    authSlice: AuthReducer,
    modal: modalSlice,
   
  },
});



export default store;
export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  unknown,
  Action<string>
>;