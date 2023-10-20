import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        authModal: false,
    },
    reducers: {
        setAuthModal(state){
            state.authModal =!state.authModal;
        }
    },

});

export default modalSlice.reducer;
export const {setAuthModal} = modalSlice.actions;