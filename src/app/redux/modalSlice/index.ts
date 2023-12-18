import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BlogCommentsModalState = {
  isOpen: boolean;
  blog_id: string | null;
};

type MemberCommentsModalState = {
  isOpen: boolean;
  mb_id: string | null;
};

type InitialState = {
  authModal: boolean;
  bookModal: boolean;
  chatModal: boolean;
  blogCommentsModal: 
    BlogCommentsModalState;
  memberCommentsModal:
    MemberCommentsModalState;
  
};

const initialState: InitialState = {
  authModal: false,
  bookModal: false,
  chatModal: false,
  blogCommentsModal: {
    isOpen: false,
    blog_id: null,
  },
  memberCommentsModal: {
    isOpen: false,
    mb_id: null,
  },
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
    },
    setBlogCommentsModal(state, action: PayloadAction<BlogCommentsModalState>) {
      state.blogCommentsModal = action.payload;
    },
    setMemberCommentsModal(state, action: PayloadAction<MemberCommentsModalState>) {
      state.memberCommentsModal = action.payload;
    },
   
  },
});

export const { setAuthModal, setBookModal, setChatModal, setBlogCommentsModal, setMemberCommentsModal } = modalSlice.actions;
export default modalSlice.reducer;
