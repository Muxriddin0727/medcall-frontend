import type {FC} from "react";
import Headers from "./Headers";
import Card from "./Card"

const Mapping:FC= () => {
    return (
        <div className="w-[80%] ml-4">
            <Headers/>
            <Card/>

        </div>

    )
}

export default Mapping;