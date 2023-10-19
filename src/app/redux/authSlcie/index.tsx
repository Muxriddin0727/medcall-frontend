import { createSlice } from "@reduxjs/toolkit";

type shouldLoadModalType = {
    open: boolean;
    loading: boolean;
  };

type authSliceType ={
    AuthenticationModal: shouldLoadModalType;
};

const initialState: authSliceType= {
    AuthenticationModal: {
        open:false,
        loading:false,
    },
};

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers: {
        setAuthenticationModal(state, {payload}) {
            state.AuthenticationModal = payload;
        },
    },
});

export const {
    setAuthenticationModal,
} = authSlice.actions;
const AuthReducer = authSlice.reducer;
export default AuthReducer;