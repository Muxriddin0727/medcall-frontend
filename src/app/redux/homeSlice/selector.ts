import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";


const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveCategories = createSelector(
    selectHomePage,
    (HomePage)=> HomePage.categories
);

export const retrieveTopDoctors = createSelector(
    selectHomePage,
    (HomePage)=> HomePage.topDoctors
);

export const retrieveTopBoArticles = createSelector(
    selectHomePage,
    (HomePage)=> HomePage.topBlogs
);

export const retrieveFeedbacks = createSelector(
    selectHomePage,
    (HomePage)=> HomePage.feedbacks
);