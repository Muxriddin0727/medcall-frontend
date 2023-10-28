import type {FC}  from "react";
import NotReg from "./NotReg";
import Posts from "./Posts"


const Blogs: FC = () => {
    return (
       
    <div className="w-[90%] m-auto mb-[40px]" >
        <NotReg/>
        <Posts />
    </div>
    
)};

export default Blogs;