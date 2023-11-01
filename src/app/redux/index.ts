import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from "redux-logger";
import modalSlice from './modalSlice';
import HomePageReducer from './home/slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    modal: modalSlice,
    homePage: HomePageReducer,
   
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