import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  authModal: boolean;
  bookModal: boolean;
};

const initialState: InitialState = {
  authModal: false,
  bookModal: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setAuthModal(state, ) {
      state.authModal = !state.authModal
    },
    setBookModal(state,) {
      state.bookModal =!state.bookModal
    },
  },
});

export const { setAuthModal, setBookModal } = modalSlice.actions;
export default modalSlice.reducer;
