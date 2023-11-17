import { type FC,  } from "react";
import NotReg from "./NotReg";
import Posts from "./Posts";
import { verifiedMemberData } from "../../api/verify";
import Search from "./Search";




const Blogs: FC = () => {
  return (
    <div className="w-[90%] m-auto mb-[40px]">
     {verifiedMemberData ? <Search /> : <NotReg />}
      <Posts />
    
     
    
    </div>
  );
};

export default Blogs;
