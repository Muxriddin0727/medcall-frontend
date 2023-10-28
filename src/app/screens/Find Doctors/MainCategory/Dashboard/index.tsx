import type {FC} from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";

const Dashboard:FC= () => {
    return (
        <div className="min-w-[300px] h-fit p-4 mr-6  bg-[#F5F5F5] max-lg:hidden">
            <Categories/>
            <PriceRange/>
            

        </div>

    )
}

export default Dashboard;