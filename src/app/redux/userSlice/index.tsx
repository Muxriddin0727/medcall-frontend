import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    member_data: {mb_username: string} | null;
 
};

const data = localStorage.getItem("member_data")  ;

const initialState: InitialState = {
 member_data: data ? JSON.parse(data) : null,
};


const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin(state, { payload }) {
      localStorage.setItem("member_data", JSON.stringify(payload));
      state.member_data = payload;
    },

    setSignup(state, { payload }) {
      state.member_data = payload;
    },

    setLogout(state) {
      state.member_data = null;
    }
  }
});

export const {setLogin, setLogout, setSignup } = userSlice.actions;
export default userSlice.reducer;
