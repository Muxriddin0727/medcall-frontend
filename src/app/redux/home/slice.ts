import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";


const initialState: HomePageState = {
    feedbacks: [],
    topDoctors: [],
    topBlogs:[],
    
  };
  
  const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
      setTopDoctors: (state, action) => {
        state.topDoctors = action.payload;
      },
      setFeedbacks: (state, action) => {
        state.feedbacks = action.payload;
      },
      setTopBlogs: (state, action) => {
        state.feedbacks = action.payload;
      },
      
      
    },
  });
  
  
  export const {
      setTopDoctors,
      setFeedbacks
    } = HomePageSlice.actions;
    
    const HomePageReducer = HomePageSlice.reducer;
    export default HomePageReducer;