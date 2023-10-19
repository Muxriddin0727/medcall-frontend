import { Feedbacks } from "./others"
import { Blogs } from "./blogs"
import { FindDoctors } from "./user"

/** REACT APP STAT/E */
export interface AppRootState {
    homePage: HomePageState;
    
   
  }

  /** HANDLERS */
export interface HomePageState {
    AuthenticationModal:{
      open:false,
      loading:false,
    },
      categories: FindDoctors[];
      topDoctors: FindDoctors[];
      topBlogs:   Blogs[];
      feedbacks: Feedbacks[];
    }