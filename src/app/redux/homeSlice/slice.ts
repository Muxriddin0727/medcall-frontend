import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";
import { setAuthenticationModal } from "../authSlcie";


type shouldLoadType = {
    open: boolean;
    loading: boolean;
};

type homePageSliceType = {
    AuthenticationModal: shouldLoadType;
};

const initialState: HomePageState = {
    AuthenticationModal: {
        open: false,
        loading: false,
    },
    categories: [],
    topDoctors: [],
    topBlogs: [],
    feedbacks: [],

};

const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setAuthenticationModal: (state, action) => {
            state.AuthenticationModal = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setTopDoctors: (state, action) => {
            state.topDoctors = action.payload;
        },
        setTopBoArticles: (state, action) => {
            state.topBlogs = action.payload;
        },
        setfeedbacks: (state, action) => {
            state.feedbacks = action.payload;
        },
    },
});
export const {
    setCategories,
    setTopDoctors,
    setTopBoArticles,
    setfeedbacks,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;