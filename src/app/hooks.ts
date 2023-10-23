import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootStore, AppDispatch } from "./redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useReduxDispatch = () => useDispatch<AppDispatch>();