import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  authModal: boolean;
  loading: boolean;
};

const initialState: InitialState = {
  authModal: false,
  loading: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setAuthModal(state, ) {
      state.authModal = !state.authModal
    },
  },
});

export const { setAuthModal } = modalSlice.actions;
export default modalSlice.reducer;
