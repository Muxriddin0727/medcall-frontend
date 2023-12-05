import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  authModal: boolean;
  bookModal: boolean;
  chatModal: boolean;
};

const initialState: InitialState = {
  authModal: false,
  bookModal: false,
  chatModal: false,
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
    setChatModal(state, ) {
      state.chatModal = !state.chatModal
    }
  },
});

export const { setAuthModal, setBookModal, setChatModal } = modalSlice.actions;
export default modalSlice.reducer;
