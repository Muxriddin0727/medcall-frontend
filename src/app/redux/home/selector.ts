import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrieveTopDoctors = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topDoctors
);
export const retrieveFeedbacks = createSelector(
  selectHomePage,
  (HomePage) => HomePage.feedbacks
); 
export const retrieveTopBlogs = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topBlogs
);
