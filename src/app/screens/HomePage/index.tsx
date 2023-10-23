import type {FC}  from "react";
import Welcome from "./Welcome" ;
import AboutUs from "./About us";


const HomePage: FC = () => {
    return (
       
    <div>
        <Welcome/>
        <AboutUs/>
        
    </div>
    
)};

export default HomePage;