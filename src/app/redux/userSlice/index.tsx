import { createSlice } from "@reduxjs/toolkit";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

type InitialState = {
  member_data: { mb_username: string } | null;
};

const data = localStorage.getItem("member_data");

let member_data = null;
if (data !== null && data !== undefined) {
  try {
    member_data = JSON.parse(data);
  } catch (error) {
    sweetErrorHandling("Invalid member data in local storage");
  }
}

const initialState: InitialState = {
  member_data: member_data,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin(state, { payload }) {
      console.log(payload);
      localStorage.setItem("member_data", JSON.stringify(payload.data));
      localStorage.setItem("token", payload.token);
      state.member_data = payload.data;
    },

    setTokenExpired(state) {
      console.log('Token has expired, logging out user...'); // Debugging statement
      state.member_data = null;
      localStorage.removeItem("member_data");
      localStorage.removeItem("token");
     },
     

    setSignup(state, { payload }) {
      state.member_data = payload;
    },

    setLogout(state) {
      state.member_data = null;
      localStorage.removeItem("member_data");
      localStorage.removeItem("token");
    },
  },
});

export const { setLogin, setLogout, setSignup, setTokenExpired } = userSlice.actions;
export default userSlice.reducer;
