import type {FC} from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";

const Dashboard:FC= () => {
    return (
        <div className="w-[20%] p-4 mr-6  bg-[#F5F5F5]">
            <Categories/>
            <PriceRange/>
            

        </div>

    )
}

export default Dashboard;