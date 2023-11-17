import { Feedbacks } from "./others"
import { Blog } from "./blogs"
import { FindDoctors } from "./user"

/** REACT APP STAT/E */
export interface AppRootState {
  homePage: HomePageState;
  findDoctorsPage: FindDoctorsPageState;


}

/** HANDLERS */
export interface HomePageState {
  // AuthenticationModal: {
  //   open: false,
  //   loading: false,
  // },
  
  topDoctors: FindDoctors[];
  topBlogs: Blog[];
  feedbacks: Feedbacks[];
}

export interface FindDoctorsPageState {
  allDoctors: FindDoctors[];
  oneDoctor: FindDoctors | null;

}