import type {FC} from "react";
import Categories from "./Categories";

const Dashboard:FC= () => {
    return (
        <div className="min-w-[300px] h-fit p-4 mr-6  bg-[#F5F5F5] max-lg:hidden">
            <Categories/>
            

        </div>

    )
}

export default Dashboard;