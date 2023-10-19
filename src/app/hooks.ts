import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, RootStore, AppDispatch } from "./redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useReduxDispatch = () => useDispatch<AppDispatch>();