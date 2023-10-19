import {FC}  from "react";
import Statistics  from "./statistics";
import Categories  from "./categories";
import Intro  from "./intro";
import TopDoctors  from "./topDoctors";
import Feedbacks  from "./feedbacks";
import TopBlogs from "./topBlogs";
import Navbar from "../../components/Navbar"
const HomePage: FC = () => {
    return (
       
    <div>
        <Categories/>
        <Intro/>
        <TopDoctors/>
        <Statistics/>
        <Feedbacks/>
        <TopBlogs/>
        
    </div>
    
)};

export default HomePage;