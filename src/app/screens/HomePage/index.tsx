import type {FC}  from "react";
import Welcome from "./Welcome" ;
import AboutUs from "./About us";
import TopDoctors from "./TopDoctors";
import Feedbacks from "./Feedbacks";
import Why from "./Why";


const HomePage: FC = () => {
    return (
       
    <div>
        <Welcome/>
        <AboutUs/>
        <TopDoctors/>
        <Feedbacks/>
        <Why/>
        
    </div>
    
)};

export default HomePage;