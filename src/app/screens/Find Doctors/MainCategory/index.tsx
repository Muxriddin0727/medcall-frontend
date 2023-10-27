import type {FC} from "react";
import Dashboard from "./Dashboard";
import Mapping from "./Mapping";

const MainCategory:FC= () => {
    return (
        <div className="w-[90%] flex m-auto">
            <Dashboard/>
            <Mapping/>

        </div>

    )
}

export default MainCategory;