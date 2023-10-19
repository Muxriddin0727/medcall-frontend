import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from "redux-logger";
import HomePageReducer from "./../homeSlice/slice";
import HomePageSlice from "../store";
import authSlice from "../authSlcie";
import AuthReducer from '../authSlcie';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    authSlice: AuthReducer,
   
  },
});



export default store;
export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;